'use client'

import { addItem } from "@/dataconnect/moreboba/app/sdks/js"
import { useState } from "react";

import { dataconnect } from "@/firebase/setup";


const AddItemModal: React.FC<{ isVisible: boolean, onClose: () => void, sectionName: string }> = ({
    isVisible,
    onClose,
    sectionName
}) => {
    if (!isVisible) return null;
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const handleAddition = async () => {
        try {
            console.log('add item')
            addItem(dataconnect, { name, image, price })
            console.log("added item")
        } catch (e) {
            console.error(e + "item error")
        };
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg">
                <div className="w-[600px] flex flex-col">
                    <button className="text-white text-xl place-self-end bg-black cursor-pointer" onClick={onClose}>X</button>
                    <h3 className="text-xl font-medium mb-4">Add an Item</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Item Name</label>
                            <input type="text" id="name" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 input" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Image Link</label>
                            <input type="text" id="image" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 input" onChange={(e) => setImage(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                            <input type="text" id="price" className="iw-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 input" onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                        <button onClick={handleAddition} type="submit" className="btn bg-black text-white py-2 px-4 rounded-lg m-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItemModal
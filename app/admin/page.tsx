'use client'
// import MCard from "@/componenets/menu-card";
// import AddItemModal from "@/componenets/add-item-modal";
// import { useState } from "react";

// export default function Home() {
//     const [showModal, setShowModal] = useState(false)
//     return (
//             <>
//                 <span className="font-bold text-4xl text-center">Hello! </span>
//                 <div className="text-center p-10">
//                 </div>
//                 <div className="flex space-x-3">
//                     <span className="font-bold text-2xl indent-18"> Milk Teas </span>
//                     <div onClick={() =>
//                         setShowModal(true)
//                     } className="mt-0.5 cursor-pointer">  <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
//                     </svg>
//                     </div>
//                     <AddItemModal isVisible={showModal} onClose = {() =>
//                     setShowModal(false)} sectionName="Milk Tea" />

//                 </div>

//             <section id="Milk Tea"
//                 className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
//                 <div>
//                     <MCard image="https://t4.ftcdn.net/jpg/02/34/80/03/360_F_234800391_LYnMCu9oVrK4yy6N679MKVrXmeEdzqpB.jpg"
//                         name="Taro Milk Tea"
//                         price="6.99" />
//                 </div>
//                 <div>
//                     <MCard image="https://static.vecteezy.com/system/resources/previews/027/145/673/non_2x/brown-sugar-bubble-boba-drink-milk-tea-perfect-for-drink-catalog-ai-generated-png.png"
//                         name="Brown Sugar Milk Tea"
//                         price="6.99" />
//                 </div>
//                 <div>
//                     <MCard image="https://as2.ftcdn.net/v2/jpg/01/95/61/11/1000_F_195611112_hFRNHtqo8m3zWxvmBRfQG5R17U9Ybc19.jpg"
//                         name="Thai tea"
//                         price="6.99" />
//                 </div>

//             </section>

//             <div className="flex space-x-3">
//                     <span className="font-bold text-2xl indent-18"> Milk Teas </span>
//                     <div onClick={() =>
//                         setShowModal(true)
//                     } className="mt-0.5 cursor-pointer">  <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
//                     </svg>
//                     </div>
//                     <AddItemModal isVisible={showModal} onClose = {() =>
//                     setShowModal(false)} sectionName="Fruit Tea" />

//                 </div>

//             <section id="Fruit Tea"
//                 className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

//                 <div>
//                     <MCard image="https://cdn.foodaciously.com/static/recipes/7205ced8-8409-4261-942b-243d36e11278/step/bubble-tea-with-passion-fruit-c0658b33347ff0c47f852dd587bf8a12-1920-q60.jpg"
//                         name="Passion Fruit Green Tea"
//                         price="7.99" />
//                 </div>
//                 <div>
//                     <MCard image="https://takestwoeggs.com/wp-content/uploads/2021/10/Mango-Green-Tea-Takestwoeggs.jpg"
//                         name="Mango Green Tea"
//                         price="8.99" />
//                 </div>
//                 <div>
//                     <MCard image="https://www.sunnysyrup.com/proimages/products/02Boba/01/01-7/Kiwi-Fruit-Popping-Boba-3.jpg"
//                         name="Kiwi Fruit Tea"
//                         price="8.99" />
//                 </div>

//             </section>

//         </>
//     );
// }

import MCard from "@/componenets/menu-card"
import AddItemModal from "@/componenets/add-item-modal"
import {useState, useEffect} from "react"
import { getItems } from "@/dataconnect/moreboba/app/sdks/js"
import { dataconnect } from "@/firebase/setup";


interface Item {
    name: string;
    image: string;
    price: string;
}

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        getItems(dataconnect, {"sectName": "Milk Tea"})
        .then((response: {data: {items: Item[]}}) => {
            setItems(response.data.items)
        })
    }, [])
    return (
            <>
                <span className="font-bold text-4xl text-center">Hello! </span>
                <div className="text-center p-10">
                </div>
                <div className="flex space-x-3">
                    <span className="font-bold text-2xl indent-18"> Milk Teas </span>
                    <div onClick={() =>
                        setShowModal(true)
                    } className="mt-0.5 cursor-pointer">  <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <AddItemModal isVisible={showModal} onClose = {() =>
                    setShowModal(false)} sectionName="Milk Tea" />

                </div>

            <section id="Milk Tea"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                >
                {items.map((item) => (
                    <div key={item.name}>
                        <MCard image={item.image} name={item.name} price={item.price} />
                    </div>
                ))}
                 {/* <!--   ✅ Product card 33333 - Starts Here 👇 --> */}
                {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <a href="#">
                        <img src="https://img.freepik.com/premium-photo/small-cup-iced-milk-tea-taiwan-style-with-straw-white-background-fresh-cool-sweet-drink-food-drink-concept_34056-662.jpg"
                            alt="House Milk Tea" className="h-80 w-72 object-cover rounded-t-xl" />
                        <div className="px-4 py-3 w-72">
                            <p className="text-lg font-bold text-black truncate block capitalize">House Milk Tea</p>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$6.99</p>
                                <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg></div>
                            </div>
                        </div>
                    </a>
                </div> */}
                {/* <!--   🛑 Product card 33333- Ends Here  --> */}

            </section>

            <div className="flex space-x-3">
                    <span className="font-bold text-2xl indent-18"> Fruit Teas </span>
                    <div onClick={() =>
                        setShowModal(true)
                    } className="mt-0.5 cursor-pointer">  <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <AddItemModal isVisible={showModal} onClose = {() =>
                    setShowModal(false)} sectionName="Fruit Tea" />

                </div>

            <section id="Fruit Tea"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                <div>
                    <MCard image="https://cdn.foodaciously.com/static/recipes/7205ced8-8409-4261-942b-243d36e11278/step/bubble-tea-with-passion-fruit-c0658b33347ff0c47f852dd587bf8a12-1920-q60.jpg"
                        name="Passion Fruit Green Tea"
                        price="7.99" />
                </div>
                <div>
                    <MCard image="https://takestwoeggs.com/wp-content/uploads/2021/10/Mango-Green-Tea-Takestwoeggs.jpg"
                        name="Mango Green Tea"
                        price="8.99" />
                </div>
                <div>
                    <MCard image="https://www.sunnysyrup.com/proimages/products/02Boba/01/01-7/Kiwi-Fruit-Popping-Boba-3.jpg"
                        name="Kiwi Fruit Tea"
                        price="8.99" />
                </div>

            </section>

        </>
    );
}

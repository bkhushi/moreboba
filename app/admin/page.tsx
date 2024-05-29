'use client'
import MCard from "@/componenets/menu-card";
import AddItemModal from "@/componenets/add-item-modal";
import { Fragment, useState } from "react";

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    return (
            <>
            <Fragment>
                <span className="font-bold text-4xl text-center">What would you like today?</span>
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
                    setShowModal(false)} section="Milk Tea" />

                </div>
            </Fragment>

            <section id="Milk Tea"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div>
                    <MCard image="https://t4.ftcdn.net/jpg/02/34/80/03/360_F_234800391_LYnMCu9oVrK4yy6N679MKVrXmeEdzqpB.jpg"
                        name="Taro Milk Tea"
                        price="6.99" />
                </div>
                <div>
                    <MCard image="https://static.vecteezy.com/system/resources/previews/027/145/673/non_2x/brown-sugar-bubble-boba-drink-milk-tea-perfect-for-drink-catalog-ai-generated-png.png"
                        name="Brown Sugar Milk Tea"
                        price="6.99" />
                </div>
                <div>
                    <MCard image="https://as2.ftcdn.net/v2/jpg/01/95/61/11/1000_F_195611112_hFRNHtqo8m3zWxvmBRfQG5R17U9Ybc19.jpg"
                        name="Thai tea"
                        price="6.99" />
                </div>

            </section>

            <div className="flex space-x-3">
                <span className="font-bold text-2xl indent-18"> Fruit Teas </span>
                <div className="mt-0.5">  <svg xmlns="http://www.w3.org/2000/svg" width='30' height='30' viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                </svg>
                </div>
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

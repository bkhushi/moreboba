import MCard from "@/componenets/menu-card";

export default function Home() {
    return (
        <>
            <span className="font-bold text-4xl text-center">What would you like today?</span>
            <div className="text-center p-10">
            </div>

            <span className="font-bold text-2xl indent-18"> Milk Teas </span>
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

            <span className="font-bold text-2xl indent-18"> Fruit Teas </span>

            <section id="Fruit Tea"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                <div>
                    <MCard image="https://cdn.foodaciously.com/static/recipes/7205ced8-8409-4261-942b-243d36e11278/step/bubble-tea-with-passion-fruit-c0658b33347ff0c47f852dd587bf8a12-1920-q60.jpg"
                        name="Passion Fruit Green Tea"
                        price="7.99" />
                </div>
                <div>
                    <MCard image="https://takestwoeggs.com/wp-content/uploads/2021/10/Mango-Green-Tea-Takestwoeggs.jpg"
                        name="Brown Sugar Milk Tea"
                        price="8.99" />
                </div>
                <div>
                    <MCard image="https://www.sunnysyrup.com/proimages/products/02Boba/01/01-7/Kiwi-Fruit-Popping-Boba-3.jpg"
                        name="Thai tea"
                        price="8.99" />
                </div>

            </section>

        </>
    );
}
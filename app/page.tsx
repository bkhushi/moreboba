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
                    <MCard image= "https://as2.ftcdn.net/v2/jpg/01/95/61/11/1000_F_195611112_hFRNHtqo8m3zWxvmBRfQG5R17U9Ybc19.jpg"
                    name="Thai tea" 
                    price="6.99" />
                </div>

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
                    <MCard image= "https://www.sunnysyrup.com/proimages/products/02Boba/01/01-7/Kiwi-Fruit-Popping-Boba-3.jpg"
                    name="Thai tea" 
                    price="8.99" />
                </div>

            </section>

        </>
    );
}
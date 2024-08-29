import homeImage from "../../assets/promise.webp";
function AboutCoffeeeDetails(){
    return(
        <>
        <div className="h-[85vh] w-full mt-20 flex items-center justify-between">
                    <div
                        className="h-[90%] w-[40%] bg-cover bg-center mb-8 rounded"
                        style={{ backgroundImage: `url(${homeImage})` }}
                    >
                    </div>
                    <div className="h-[90%] w-[50%] flex items-start justify-start flex-col">
                        <h1 className="text-6xl bigFont text-[#333D4B] mb-6">Our Promise</h1>
                        <p className="text-lg">
                            Coffee is a plant (Coffea) and the name of the drink that is made from this plant. The coffee plant is a bush or tree that can grow up to ten meters (about 32 feet) high, but is usually cut shorter. Coffee plants originally grew in Africa, and now also grow in South America, Central America and Southeast Asia. They are an important crop for the economies of many countries.To make a drink from coffee beans, the beans must first be specially prepared by drying the beans and then roasting. The beans are dried a short time after they are picked. This preserves them and makes them ready to be packed or roasted. Before the beans are made into a drink, they must be roasted or ground (crushed into tiny pieces in a coffee mill). When the ground coffee is placed into boiling water, the flavour and dark brown colour of the beans goes into the water. Making coffee is called brewing coffee. There are several different ways that coffee can be brewed.
                            - Wikipedia
                        </p>
                    </div>
                </div>
        </>
    )
}
export default AboutCoffeeeDetails
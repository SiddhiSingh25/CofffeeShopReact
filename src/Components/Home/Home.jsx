import './Home.css'
import Hero from './Hero'
import HeroPage from './HeroPage'
import CoffeeOptions from './CoffeeOptions';
import CoffeeName from './CoffeeName';
function Home() {
    let containerDetails = [{
        count: "01",
        title: "Choose your coffee",
        desc: "Did you know that picking the right bean is pretty much as significant as the right hardware and preparing to the equation of incredible espresso"
    }
        , {
        count: "02",
        title: "Track Your Package",
        desc: "Regardless of whether it's 10 bean bags for a nearby coffee shop or 10,000 immunizations for an abroad center, there's a ton riding on your capacity to convey and follow a bundle."
    },
    {
        count: "03",
        title: "Enjoy",
        desc: "Caffeine is a diuretic, which causes an expansion in the measure of water ousted from our bodies. At the point when just drinking jazzed drinks, this can prompt drying out."
    }];
    let smallSectionDetails = ["1 Preferences", "2 Bean Type", "3 Quantity", "4 Grind Options"];
    let boxDetails = [{
        title: "Drip Brew",
        desc: "Ground coffee is added to a brew basket and placed in an automatic coffee machine for this brewing style"
    },
    {
        title: "Cold Brew",
        desc: "Coarsely ground coffee is placed in room temperature water and allowed to steep for an extended period of time."
    },
    {
        title: "Espresso",
        desc: "To achieve an espresso brew, you'll need an espresso or cappuccino machine"
    }]
    return (
        <>
            <div className="home bg-cover bg-no-repeat bg-center min-h-[200vh] w-full px-28">
                <Hero />
                <HeroPage containerDetails={containerDetails} />
                <CoffeeOptions smallSectionDetails={smallSectionDetails} />
                <CoffeeName boxDetails={boxDetails}/>
            </div>
        </>
    )
}
export default Home
import { NavLink } from "react-router-dom"
import { GiCoffeePot } from "react-icons/gi";
import './Header.css'
function Header(){
    return(
        <>
        <nav className="h-20 w-full  px-28 flex items-center justify-between">
            <div className="logo w-[20%]">
            <GiCoffeePot className="h-12 w-12 "/>
            </div>
           
                <ul className="navLinks w-[22%] flex items-center justify-between">
                    <li><NavLink  to="Home" className="smallFont navElm"><p>HOME</p></NavLink></li>
                    <li> <NavLink  to="About" className="smallFont navElm"><p>ABOUT</p></NavLink></li>
                    <li><NavLink  to="BuyCoffeePage" className="smallFont navElm"><p>BUY COFFEE</p></NavLink></li>
                </ul>    
        </nav>
        </>
    )
}
export default Header
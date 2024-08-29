import SmallSection from './SmallSection'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import How from './How';
let HowDetails = ["How do you drink your coffee ?", "What kind of beans do you use ?", "How much coffee do you want ?", "How you want us to grind them ?"]
function CoffeeOptions({smallSectionDetails}){
    return(<>
       <div className='min-h-[100vh] w-full mt-3 flex items-center justify-between '>
                    <div className="min-[80vh] w-[18%] left mx-6 flex items-center justify-start flex-col">
                        <SmallSection smallSectionDetails={smallSectionDetails} />
                    </div>
                    <div className="right min-[100vh] w-[70%] flex items-center flex-col justify-start">
                    {HowDetails.map((item)=>(<How item={item}/>))}
                    </div>
                </div>
    </>)
}
export default CoffeeOptions
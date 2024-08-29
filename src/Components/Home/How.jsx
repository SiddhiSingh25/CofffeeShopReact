import { IoIosArrowDropdownCircle } from "react-icons/io";
function How({item}) {
  return (<>
    <div className='h-20 w-[95%]  flex items-center justify-between mb-10'>
      <h1 className='text-[#83888F] mediumFont text-[6vh] font-semibold'>{item}</h1>
      <button><IoIosArrowDropdownCircle className='h-10 w-10 text-[#333D4B]' /></button>
    </div>
  </>)
}
export default How
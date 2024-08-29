import { GiCoffeeCup } from "react-icons/gi";
function Box({item }) {
    return (
        <>
            <div className='h-[40vh] w-80 bg-slate-100 rounded-2xl flex items-center justify-between flex-col px-3 py-10'>
            <div className="flex items-center justify-between">
            <h1 className='text-4xl font-semibold text-gray-900 mr-3'>{item.title}</h1>
            <GiCoffeeCup className="h-8 w-8"/>
            </div>
                <p className='text-[2.8vh] smallFont font-normal text-gray-900'> {item.desc}</p>
            </div>
        </>
    )
}
export default Box
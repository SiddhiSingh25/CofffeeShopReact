import image from "../../assets/coffee-cup-home.jpg"
function Hero(){
    return(
        <>
        <div className='bg-image bg-cover bg-center bg-no-repeat  h-[79vh] w-full px-28 rounded-2xl mt-2 flex items-center justify-start'
        style={{backgroundImage : `url(${image})`}}>
                    <div className='flex h-[40%] w-[46%] items-start justify-between flex-col mb-16'>
                        <h1 className='text-[11.5vh] mediumFont leading-[10vh] font-extrabold mb-4'>Great simple coffee.</h1>
                        <p className='text-[#FEFCF7]'>Good communication is just as stimulating as black coffee, and just as hard to sleep after.</p>
                        <button className="mediumFont text-2xl px-8 py-2 bg-[#0E8784] text-[#FEFCF7] mt-10">Find out more</button>
                    </div>
                </div>
        </>
    )
}
export default Hero
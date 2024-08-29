import image from "../../assets/home-image.jpg"
function AboutContent(){
    return(
        <>
        <div className='bg-image bg-cover bg-no-repeat bg-left-top h-[77vh] w-full px-28 rounded-2xl mt-2 flex items-center justify-start'
        style={{backgroundImage : `url(${image})`}}>
                    <div className='flex h-[40%] w-[46%] items-start justify-between flex-col mb-16'>
                        <h1 className='text-[11.5vh] font-bold'>About us</h1>
                        <p className='text-[#FEFCF7]'>The original domesticated coffee plant is said to have been from Harar,
                             and the native population is thought to be derived from Ethiopia with distinct nearby populations in Sudan and Kenya. Coffee was primarily consumed in the Islamic world where it originated and was directly related to religious practices.</p>
                    </div>
                </div>
        </>
    )
}
export default AboutContent

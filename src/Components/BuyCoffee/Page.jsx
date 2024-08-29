import image from "../../assets/home-image.jpg"
function Page(){
    return(
        <>
        <div className='bg-image bg-cover bg-no-repeat bg-left-top h-[77vh] w-full px-28 rounded-2xl mt-2 flex items-center justify-start'
        style={{backgroundImage : `url(${image})`}}>
                    <div className='flex h-[40%] w-[46%] items-start justify-between flex-col mb-16'>
                        <h1 className='text-[11.5vh] font-bold'>Buy Coffee</h1>
                        <p className='text-[#FEFCF7]'>Regardless of whether it's 10 bean bags for a nearby coffee shop or 10,000 immunizations
                            for an abroad center, there's a ton riding on your capacity to convey and follow a bundle.</p>
                    </div>
                </div>
        </>
    )
}
export default Page
function ContainerBox({containerDetails}) {
    return (<>
    {containerDetails.map((item)=>(
        <div className="containerBox w-[29%] h-[78%] flex-col flex items-start justify-between">
        <h1 className='bigFont text-8xl text-[#FDD6BA]'>{item.count}</h1>
        <h1 className='bigFont text-5xl font-extrabold text-[#FEFCF7]'>{item.title}</h1>
        <h5 className=' text-[2.5vh] leading-6 text-[#FEFCF7]'>{item.desc}</h5>
    </div>
    ))}
        
    </>)
}
export default ContainerBox
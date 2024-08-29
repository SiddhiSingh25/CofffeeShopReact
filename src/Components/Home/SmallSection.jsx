function SmallSection({ smallSectionDetails }) {
    return (<>
        {smallSectionDetails.map((item) => (
            <div className='w-[100%] h-20 text-[#83888F] flex items-center justify-start text-3xl  mediumFont' style={{borderBottom : "1px solid #83888F"}}>
                {item}
            </div>
        ))}

    </>)
}
export default SmallSection
import ContainerBox from './ContainerBox'
import Circle from './Circle'
import Line from './Line'
function HeroPage({containerDetails}){
    return(
        <>
        <div className='home-lower h-[95vh] w-full  rounded-2xl mt-16 bg-[#333D4B] px-20 py-10 flex items-center justify-between flex-col'>
                    <div className="effect h-20 w-[100%] flex items-center justify-start">
                        <Circle/>
                        <Line/>
                        <Circle/>
                        <Line/>
                        <Circle/>
                    </div>
                    <div className="container h-[80%] w-[100%] flex py-2 items-start justify-between ">
                        <ContainerBox containerDetails={containerDetails}/>
                    </div>
                </div>
        </>
    )
}
export default HeroPage
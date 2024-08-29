import Box from './Box';
function CoffeeName({boxDetails}) {
    return (<>
        <div className='h-[50vh] w-full'>
            <div className=' flex items-center justify-between w-full mb-3'>
                {boxDetails.map((item) => (<Box item={item} />))}
            </div>
        </div>
    </>)
}
export default CoffeeName
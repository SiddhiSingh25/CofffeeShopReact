import './AnimateText.css';
import { FaCoffee, FaStar, FaHeart } from 'react-icons/fa';

function AnimateText() {
    const brandInfo = [
        { name: 'Starbucks', icon: <FaCoffee className='text-2xl'/> },
        { name: 'Peet\'s Coffee', icon: <FaStar className='text-2xl'/> },
        { name: 'Dunkin', icon: <FaHeart className='text-2xl'/> },
        { name: 'Nespresso', icon: <FaCoffee className='text-2xl'/> },
        { name: 'Caribou Coffee', icon: <FaStar className='text-2xl'/> },
        { name: 'Lavazza', icon: <FaHeart className='text-2xl'/> },
        { name: 'Dunkin', icon: <FaHeart className='text-2xl'/> },
        { name: 'Nespresso', icon: <FaCoffee className='text-2xl'/> },
    ];

    return (
        <>
            <div className="moving-box">
                <div className="blur-left blur"></div>
                <div className="move-container">
                    {brandInfo.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            {brand.icon}
                            <span className="brand-name">{brand.name}</span>
                        </div>
                    ))}
                </div>
                <div className="move-container">
                    {brandInfo.map((brand, index) => (
                        <div className="brand-item" key={index}>
                            {brand.icon}
                            <span className="brand-name">{brand.name}</span>
                        </div>
                    ))}
                </div>
                <div className="blur-right blur"></div>
            </div>
        </>
    );
}

export default AnimateText;

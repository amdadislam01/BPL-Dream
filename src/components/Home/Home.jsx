import React from 'react'
import banner from '../../assets/bg-shadow.png';
import bannerMain from '../../assets/banner-main.png';
const Home = ({toggle}) => {
    return (
        <div className="max-w-7xl mx-auto px-10 py-6">
            <div
                className="bg-cover bg-center flex flex-col justify-center items-center text-center rounded-2xl bg-black h-[500px]"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <img src={bannerMain} alt="" className="mb-4" />
                <h1 className="text-4xl text-white font-bold">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-white text-xl mb-4">Beyond Boundaries Beyond Limits</p>
                <div className={`border border-[#E7FE29] rounded-md p-1 ${toggle===false ? 'border border-orange-300':''}`}>
                    <button className={`py-3 px-4 bg-[#E7FE29] rounded-md font-bold ${toggle===false ? 'bg-gradient-to-r from-red-300 to-orange-300' : ''}`}>
                        Claim Free Credit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home

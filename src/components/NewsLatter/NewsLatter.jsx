import React from 'react'

const NewsLatter = () => {
    return (
        <div className="max-w-5xl mx-auto p-3 rounded-2xl bg-slate-50 mt-16 mb-20">
            <div className="bg-gradient-to-r from-blue-100 via-white to-orange-100 rounded-2xl shadow-lg p-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-gray-600 mb-6">
                    Get the latest updates and news right in your inbox!
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered rounded-md px-4 py-3 w-full sm:w-80"
                    />
                    <button className="px-6 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-pink-400 to-yellow-400">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLatter




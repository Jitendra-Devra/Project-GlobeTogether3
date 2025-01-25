// import React from 'react'

const Header = () => {
  return (
    <div className="">
      <header className="header text-white items-center relative px-[20px] py-[50px] jusitfy-center flex flex-col">
      <div className="header-content relative z-2">
        <h1 className="text-[48px] mb-[10px] " style={{textShadow:'2px 2px 5px #000'}}>Discover Your Next Adventure</h1>
        <p className="text-[18px] mb-[20px]">Connect with like-minded travelers and embark on unforgettable journeys together.</p>
        <div className="search-bar flex-1 relative max-w-[600px] mx-auto">
          <input className=" w-[90%] px-[12px] py-[8px] rounded-[20px] border border-gray-300 outline-none text-[16px] focus:border-[#0a9396] focus:shadow-[0_0_40px_#0a9396] focus:outline-none" type="text" placeholder="Explore destinations, trips, and more..." />
          <span className="absolute right-[70px]  text-[27px] text-[#0a9396] cursor-pointer ">🔍</span>
        </div> 
      </div>
    </header>
    </div>
  )
}

export default Header

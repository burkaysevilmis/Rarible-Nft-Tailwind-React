
import { FaTwitter,FaInstagram,FaDiscord,FaTelegram,FaYoutube } from 'react-icons/fa';

export default function HamburgerMenu() {
  return (
    <div style={{minHeight:'95%'}} className='flex flex-col justify-between '>
<div className='flex flex-col mt-10 space-y-3'>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>
       <p className='align-middle text-white font-bold text-lg'>Explore</p>

    </div>
   <div>
   <div className='flex  h-10 border-t border-t-zinc-800 justify-between items-center sticky'>
    <FaTwitter color='gray'  />
    <FaInstagram color='gray'  />
    <FaDiscord color='gray'  />
    <FaTelegram color='gray'  />
    <FaYoutube color='gray'  />
    </div>
    <div className='flex justify-center'> 
     <button title='Create'   className=' h-10 w-[40%] px-3 ml-3 justify-center items-center flex text-white rounded-3xl transition-all duration-500
 bg-gradient-to-r from-[rgba(255,0,184)] via-[#64A1B8] to-[rgba(100,161,255)] bg-size-200 bg-pos-0 hover:bg-pos-100 hover:to-[#0066FF]'   >
       <p className='whitespace-nowrap'>Create</p>
     </button>
     <button style={{backgroundColor:'rgba(45, 129, 255, 0.15)'}} title='Create'   className=' h-10 w-[40%]  px-3 ml-3 justify-center items-center flex text-white rounded-3xl border border-gray-800 hover:border-gray-500'  >
      <p style={{color:'rgb(45, 129, 255)'}}  className='whitespace-nowrap font-poppins font-extrabold'>Sign İn</p>
     </button>
     </div>
   </div>
    </div>
    
  )
}

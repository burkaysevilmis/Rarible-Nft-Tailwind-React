import Image from 'next/image'
import logo from '../../images/logo.png'
import { SearchIcon,MenuIcon,XIcon } from '@heroicons/react/solid'
import styles from './styles.module.scss'
export default function Header({hamburgerModal,sethamburgerModal}) {
  return (
    <div className='flex-row flex items-center h-10 md1:justify-between '>
      <div className='flex-row flex items-center'>
        <Image className='w-[10] h-[10] '  layout='fixed' src={logo} />
        <p  style={{fontSize:16}} className='md1:hidden ml-3 font-bold'>Rarible</p>
      </div>
      <div className='flex flex-row items-center w-screen md1:hidden lg1:justify-around'>
      <div style={{minWidth:250}} className=' h-10 sm1:hidden w-[50%] lg1:hidden  bg-gray-800  ml-5 my-3 rounded-3xl flex-row flex items-center border-red hover:border-solid hover:border'>
      <SearchIcon className='w-5 h-5 ml-4  mr-2' color='gray '  />
       <input className='w-full bg-transparent outline-none ' />
      </div>
      <div className='ml-5 flex-row flex  space-x-4 items-center'>
      <p className='align-middle text-[#495057] font-bold text-sm'>Explore</p>
      <p className='align-middle text-[#495057] whitespace-nowrap font-bold text-sm'>My Profile</p>
      <p className='align-middle text-[#495057] font-bold text-sm'>Following</p>
      <p className='align-middle text-[#495057] font-bold text-sm'>Activity</p>
      <p className='align-middle text-[#495057] font-bold text-sm whitespace-nowrap xl1:hidden'>How it works</p>
      <p className='align-middle text-[#495057] font-bold text-sm  xl1:hidden'>Community</p>
      {/* <p className='align-middle hidden text-[#495057] font-bold text-lg sm1:flex'>...</p> */}

      </div>
      {/* bg-gradient-to-r from-[rgba(255,0,184)] to-[rgba(0,102,255)]       rgb(100, 161, 255) 50%, rgb(0, 102, 255) 100%)*/}
      {/* className=' hover:from-[#64A1B8] hover:to-[#0066FF] h-10 w-auto justify-center items-center rounded-3xl flex p-4  bg-gradient-to-r from-[rgba(255,0,184)] to-[rgba(100,161,255)]' */}
   
     <div className='flex '> 
     <button title='Create'   className='h-10 px-3 ml-3 justify-center items-center flex text-white rounded-3xl transition-all duration-500
 bg-gradient-to-r from-[rgba(255,0,184)] via-[#64A1B8] to-[rgba(100,161,255)] bg-size-200 bg-pos-0 hover:bg-pos-100 hover:to-[#0066FF]'   >
       <p className='whitespace-nowrap'>Create</p>
     </button>
     <button title='Create'   className=' h-10 px-3 ml-3 justify-center items-center flex text-white rounded-3xl border border-gray-800 hover:border-gray-500'  >
      <p className='whitespace-nowrap'>Sign İn</p>
     </button>
     </div>
      </div>
      <div>
        {hamburgerModal?      <XIcon onClick={()=>{sethamburgerModal(hamburgerModalValue=>!hamburgerModalValue)}} className='w-8 h-8 ml-4  mr-2 hidden md1:flex' color='gray '  />
:      <MenuIcon onClick={()=>{sethamburgerModal(hamburgerModalValue=>!hamburgerModalValue)}} className='w-8 h-8 ml-4  mr-2 hidden md1:flex' color='gray '  />
}
      </div>
    </div>
  )
}

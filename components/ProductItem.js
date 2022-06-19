import { FaTwitter,FaInstagram,FaDiscord,FaTelegram,FaYoutube ,FaHeart,FaDrawPolygon} from 'react-icons/fa';
import Image from 'next/image'
import imggg from './../images/imggg.jpeg'
import {SiEthereum} from 'react-icons/si'
export default function ProductItem() {
  return (
    <div className='flex bg-black border border-gray-700 h-96 m-3 mb-4 sm1:h-96 rounded-3xl flex-col'>
      <div className='flex-row flex m-3 justify-between items-end w-full h-8'>
        <div className='flex-row flex '>
        <div className='h-8 w-8 rounded-full bg-blue-500 ring-2 '></div>
        {/* <div className='h-8 w-8 rounded-full bg-red-500 ring-2 ml-[-20px]'></div>
        <div className='h-8 w-8 rounded-full bg-green-500 ring-2 ml-[-20px]'></div> */}

        </div>
      <div>
      <p className=' text-gray-400 text-4xl flex mr-5'>...</p>

      </div>
      </div>
      <div className='h-[80%] w-[90%] self-center rounded-lg md1:overflow-hidden '>
        <Image width='100%' height='100%' layout='responsive' src={'https://img.rarible.com/prod/image/upload/t_image_big/prod-itemImages/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d:5534/23c84014'} className='object-fill rounded-lg'  />
      </div>
      <div className='flex flex-col m-3'>
        <div className='flex-row flex items-center justify-between mb-1 w-full'>
          <p className='text-xs'>
          Weird Ape #228
          </p>
          <div className=' justify-center items-center flex' >
        <div className='rounded-xl bg-[#149BF6] absolute opacity-25 w-[20px] h-[20px] '>

        </div>
          <SiEthereum color='#149BF6'  />
          </div>
        </div>
        <div className='flex-row flex items-center justify-between'>
          <p className='text-md'>
         8 MATIC 1/1
          </p>
        
        </div>
        <div className='flex-row flex items-center justify-between'>
          <p style={{    color: 'rgb(0, 102, 255)'}} className='text-sm'>
         Buy Now
          </p>
          <FaHeart  color='gray'  />
        </div>
      </div>
    </div>
  )
}

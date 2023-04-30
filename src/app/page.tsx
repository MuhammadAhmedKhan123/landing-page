
import React from 'react'
import Link from 'next/link'
import Products from './Products'
import Dropdown from './dropdown'
import {MdEqualizer, FaUsers, HiTemplate, FaLaptopCode, BsFacebook, BsDiscord, AiFillYoutube, AiFillInstagram} from "react-icons/all"
export default function page() {
  return (
    <div  className='  w-full h-full   bg-white overflow-hidden'>
      <div className=' sticky inset-0 backdrop-blur-sm  z-30 '>
        <div className=' flex justify-start w-full  mt-4   '><div className='ml-14 mm:ml-6  lm:ml-6 st:ml-8 font-mono text-xl text-red-500 '>Digital</div></div>
        <div className=' flex  justify-end w-full  mt-[-23px] '><div className=' mr-14 font-medium lm:hidden st:hidden mm:hidden smm:hidden'><span className=' mr-6 hover:text-red-500'><Link href='/'>Home</Link></span><span className=' hover:text-red-500 mr-6'><Link href='#features' >Features</Link></span><span className=' hover:text-red-500 mr-6'><Link href='#about'>About</Link></span><span className=' hover:text-red-500 mr-6'><Link  href='#products'>Products</Link></span><span className=' hover:text-red-500'>Contact</span></div>
        <div className='mt:hidden lt:hidden md:hidden lg:hidden relative top-[-14px]'><Dropdown/></div>
        </div>
      </div>
      <div className=' relative top-[-79px]'>
      <div className='  mix-blend-multiply opacity-50'><div className=' w-full lg:h-[380px]  h-[380px] st:h-[650px] lm:h-[650px] mm:h-[650px] smm:h-[650px]  bg-[#ffd8e1]  '></div><svg className=' relative top-[-20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd8e1" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,224C840,235,960,277,1080,282.7C1200,288,1320,256,1380,240L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg></div>
      <div className='   mix-blend-multiply relative  mm:top-[-794px] smm:top-[-794px] lm:top-[-794px] st:top-[-794px] mt:top-[-525px] lt:top-[-555px] md:top-[-575px] lg:top-[-675px]'><div className=' w-full lg:h-[480px]  h-[390px]  st:h-[690px] lm:h-[690px] mm:h-[720px] smm:h-[720px] bg-[#ffd8e1] '></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd8e1" fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,112C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg></div>
      </div>

      <div className='  relative'>
        <div className=' relative lg:top-[-1160px] top-[-1050px] lt:top-[-1000px] mt:top-[-1000px] st:top-[-1540px] lm:top-[-1540px] mm:top-[-1470px]  smm:top-[-1470px] st:pl-12 mm:pl-4 smm:pl-4 lm:pl-12 mt:pl-10 lt:pl-10  pl-20 flex st:flex-col-reverse lm:flex-col-reverse smm:flex-col-reverse mm:flex-col-reverse'>
          <div className=' flex justify-start mm:justify-center smm:justify-center lm:justify-center st:justify-center'>
         <div className='text-black st:flex-col lm:flex-col smm:flex-col mm:flex-col justify-center st:text-center mm:text-center smm:text-center lm:text-center pr-12 mm:pr-4 smm:pr-4 w-full md:mt-[-25px]  st:mt-[-50px] mm:mt-[-40px] smm:mt-[-40px]  lm:mt-[-40px]   '><h1 className='text-4xl st:text-3xl lm:text-2xl mm:text-xl smm:text-xl font-semibold font-serif'>Smart Digital Watches
           for Luxurious Life</h1>
           <p className=' pt-3 mb-6 smm:text-sm mm:text-sm text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           <a className=' pt-3 pb-3 pr-4 pl-4 rounded-lg bg-red-500 font-medium text-[#ffd8e1] '>Buy Products</a>
           </div>
           
           </div>




         <div className=' w-full flex justify-end mm:justify-center lm:justify-center st:justify-center'><div className=' mm:w-[400px] lm:w-[400px] st:w-[400px] st:pr-8 mm:pr-8 lm:pr-8 st:pl-6 mm:pl-6 lm:pl-6 md:w-[380px] lt:w-[340px] mt:w-[310px] relative  md:top-[-185px] lt:top-[-150px] mt:top-[-100px] brightness-105'> <img src='./pics/pic1.png' alt='pic1'></img></div></div>
        </div>
      </div>



      <div id='features' className=' w-full flex-col justify-center pt-14 relative smm:top-[-1400px] mm:top-[-1340px] lm:top-[-1440px] st:top-[-1440px] top-[-1100px] lg:top-[-1320px] mt:mt-14'>
      <div className=' text-black text-center lg:mr-40 lg:ml-40 md:mr-32 md:ml-32 lt:mr-32 lt:ml-32  mt:mr-24  mt:ml-24 st:mr-10 st:ml-10 lm:mr-6 lm:ml-6 mm:mr-5 mm:ml-5  smm:mr-2 smm:ml-2    '>
      <div className=' mb-3'><h1 className=' text-2xl font-medium '>Product Features</h1></div>
      <div className=' '><p>Lorem Ipsum is  dummy text of the printing and typesetting industry. Lorem  has been the industrys  dummy text ever since the 1500s</p></div>
      </div>

<div className=' flex justify-center lg:mt-16 lm:ml-5 mm:ml-5 smm:ml-5'>
      <div className=' flex-none    lg:flex  lg:justify-center '>

      <div className=' lm:flex-col mm:flex-col smm:flex-col flex justify-center md:mt-10 lt:mt-8 mt:mt-6 st:mt-6 lm:mt-5 mm:mt-3 smm:mt-2 lg:mt-8 mb-10  lg:mb-0'>
      
      <div className=' flex-col   w-56 text-center lg:mr-6 lm:mb-10 mm:mb-10 smm:mb-10 mr-5'>
       <div className='  ml-[75px] mt-3 w-20 h-20 bg-[#ffd8e1] rounded-full'><span className=' flex  justify-center  pt-2  text-red-500 text-6xl'><MdEqualizer/></span></div>
       <div><h1 className='text-black text-xl font-medium'>High Quality</h1>
       <p className='text-black '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       </div>      
      </div>

      <div className=' flex-col   w-56 text-center lg:mr-3 lg:ml-0 lm:ml-0 mm:ml-0 smm:ml-0 ml-5'>
      <div className='  ml-[75px] mt-3 w-20 h-20 bg-[#ffd8e1] rounded-full'><span className=' flex  justify-center  pt-2  text-red-500 text-6xl'><FaUsers/></span></div>
      <div><h1 className='text-black text-xl font-medium'>User Friendly</h1>
      <p className='text-black '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>      
     </div>
      
      </div>

      <div className=' lm:flex-col mm:flex-col smm:flex-col flex justify-center lg:mt-8'>
      
      <div className=' flex-col   w-56 text-center lg:ml-3 lg:mr-0 mr-5 lm:mb-10 mm:mb-10 smm:mb-10 '>
       <div className='  ml-[75px] mt-3 w-20 h-20 bg-[#ffd8e1] rounded-full'><span className=' flex  justify-center  pt-2  text-red-500 text-6xl'><HiTemplate/></span></div>
       <div><h1 className='text-black text-xl font-medium'>Awesome Design</h1>
       <p className='text-black '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       </div>      
      </div>
      
      <div className=' flex-col   w-56 text-center lg:ml-6 ml-5 lm:ml-0 mm:ml-0 smm:ml-0'>
       <div className='  ml-[75px] mt-3 w-20 h-20 bg-[#ffd8e1] rounded-full'><span className=' flex  justify-center  pt-2  text-red-500 text-6xl'><FaLaptopCode/></span></div>
       <div><h1 className='text-black text-xl font-medium'>Latest Technology</h1>
       <p className=' text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
       </div>      
      </div>
      
      </div>

     </div> 
      </div>
      
      </div>

    




       <div id='about' className='text-black flex   justify-center relative top-[-1000px] lg:top-[-1100px] smm:top-[-1300px] mm:top-[-1200px] lm:top-[-1260px] st:top-[-1300px] items-center  bg-[#F7F8F8] smm:h-[760px] mm:h-[760px] lm:h-[820px] st:h-[880px] mt:h-[880px] mt:mt-14 h-[600px] w-full'>
        
        <div className=' flex mt:flex-col st:flex-col lm:flex-col mm:flex-col smm:flex-col  '>
        <div className=' smm:w-[260px] mm:w-[290px] lm:w-[360px]  st:w-[450px] mt:w-[550px] lt:w-[300px]  md:w-[300px] lg:w-[450px] md:mr-6 lt:mr-3 st:ml-28  mt:ml-52 st:pb-4 mt:pb-4'><img src='./pics/pic2.png'></img></div>
        <div className=' flex justify-center'>
        <div className='md:ml-6 lt:ml-3  rounded-xl shadow-lg bg-white h-[360px] w-[460px] mm:w-[290px] lm:w-[360px] st:w-[450px] mt:w-[550px] smm:w-[260px]'>
         <div className='  pl-6 pt-7 mr-2'>
         <h1 className=' text-3xl font-medium'>About The Product</h1>
         <p className=' mt-3  smm:text-sm  '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
         <div className='list-disc smm:text-sm '>
         <li className=' mt-6'>Model No #333 Blackmart</li>
         <li className=' mt-3'>Camera Resulation 24 Mega Pixal</li>
         <li className=' mt-3'>Image Processor DIGHC7</li>
         <li className=' mt-3'>Effective Pixels Approx </li>
         <li className=' mt-3'>Effective Pixels Approx </li>
         </div>
         </div>
         </div>
        </div>
        
        </div>
       </div>

       <div id='products' className=' w-full h-full  relative smm:top-[-1178px] mm:top-[-1100px] lm:top-[-1100px] st:top-[-1160px] mt:top-[-860px] lt:top-[-860px] md:top-[-820px] lg:top-[-890px]  '>
       <Products/>
       </div>
              
    
     <div >
      <div className=' flex    lm:flex-col mm:flex-col smm:flex-col  w-full   h-full lm:h-72 mm:h-72 smm:h-80 bg-[#ffd8e1]'>
      <div className=' md: lt:w-[450px] st:w-[450px] mt:w-[450px] md:w-[450px] lm:ml-2 lm:mr-2  mm:ml-2 mm:mr-2 smm:ml-2 smm:mr-2 ml-10 md:ml-14 pt-10 mb-4'>
        
          
      <div className='font-mono text-xl text-red-500 mb-3 lm:text-center mm:text-center smm:text-center'>Digital</div>
      <div className=' mb-8 flex lm:justify-center lm:text-center mm:text-center smm:text-center'><h1>Lorem Ipsum is  dummy text of the printing and typesetting industry.</h1></div>
      <div className=' flex lm:justify-center mm:justify-center smm:justify-center w-full '>
        <li className='w-10 h-10 rounded-full bg-red-500 text-xl flex
         justify-center items-center mr-2'><BsFacebook/></li>
        <li className='w-10 h-10 rounded-full bg-red-500 text-xl flex
         justify-center items-center mr-2'><BsDiscord/></li>
        <li className='w-10 h-10 rounded-full bg-red-500 text-xl flex
         justify-center items-center mr-2'><AiFillYoutube/></li>
        <li className='w-10 h-10 rounded-full bg-red-500 text-xl flex
         justify-center items-center mr-2'><AiFillInstagram/></li>
      </div>
      
      
      </div>

      <div className='md:mt-44 mt-52 mt:mt-40 st:mt-40 flex smm:justify-center mm:justify-center lm:justify-center relative smm:top-[-180px] lm:top-[-180px] mm:top-[-180px]'>
        Made by:  <a href='https://github.com/MuhammadAhmedKhan123'> Muhammad Ahmed Khan</a>
      </div>
      </div> 
     </div>


    </div>
  )
}

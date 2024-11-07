import react from 'react';
import Image from 'next/image';
export default function Home(){
  return(
    <div className=" flex flex-col min-h-screen bg-blue">
<div className="flex-grow flex item-center justify- p-11">
  <div className="bg-slate- p-12 rounded-lg shadow-lg max-w-4xl w-full flex item-center justify-center border-4 border-sky-300 ">

{/* background image*/}

<div className="absolute inset-0 flex item-center justify-center">
  <div className="relative w-full h-ful pt-24 item-center justify-center max-w-[600px] max-y-[600px]">
    <Image 
    src="/images/backgr.png" 
    alt="background Image"   
    width={300}
    height={100}
    objectFit="cover" 
    className="opacity-10" />
    </div>
</div>



    {/*left section*/}

<div className="w-2/3 pr-4 pt-16 relative z-10">
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Name:</strong>
  </span>
  <span className="text-black"> Farhat Naz</span>
</p>

<p className="mb-2">
  <span className="text-sky-500">
    <strong> Roll Number:</strong>
  </span>
  <span className="text-black"> 00082451 </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Distance Learning:</strong>
  </span>
  <span className="text-black"> No </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Name:</strong>
  </span>
  <span className="text-black"> Farhat </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>City:</strong>
  </span>
  <span className="text-black">Karachi </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Campus:</strong>
  </span>
  <span className="text-black"> Governer House Karachi </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Day/Time:</strong>
  </span>
  <span className="text-black"> Tuesday 2 pm-5 pm </span>
</p>
<p className="mb-2">
  <span className="text-sky-500">
    <strong>Batch:</strong>
  </span>
  <span className="text-black"> 1 </span>
</p>


{/* Button*/}

<div className=" flex flex-col mt-14">
  <button className="relative w-full p-1  rounded-lg border border-gray-300 bg-blue-900 text-white item-center justify-center flex ">
<span className="absolute inset-0 bg-slate-500 "
style={{width:"50%"}}>

</span>
<span className="relative z-10"> Q1 &WMD</span>
  </button>
  </div>
 

</div>
{/*Right Section*/}

<div className="w-1/3 text-center relative z-10 ">
<Image src={"/images/farhat.jpg"}
alt={"farhat"}
width={400}
height={10}
className="rounded-lg mb-6 w-full"/>
<p border-t2 border-t-slate-500 pt-2 font-bold text-sky-500 mt-10 text-2xl>Authorized Signature</p>

</div>
{/*logo*/}
<img src="/images/logo.jpg"
alt="logo"
className=" absolute top-[-18px] pt-24 left-20 w-16 h-18 z-10"/>

  </div>
</div>
    </div>
  )
}

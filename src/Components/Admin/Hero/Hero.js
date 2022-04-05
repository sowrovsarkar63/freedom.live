import React from 'react'

export default function Hero() {
  return (
    <>
<section className='bg-[#F8FAFB] shadow-lg p-10'>
<ul className="steps steps-vertical lg:steps-horizontal xl:steps-horizontal 2xl:steps-horizontal mt-5 p-5 ">
  <li className="step step-primary px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
  <li className="step step-primary px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
  <li className="step step-primary px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>

</ul>


<div className='Contact flex flex-col space-y-4 items-center  md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between 2xl:flex-row 2xl:justify-between mt-5'>
    <div className='imgInfo flex flex-col md:flex-row md:space-x-5 md:justify-around lg:flex-row lg:space-x-5 lg:justify-around  xl:flex-row xl:space-x-5 xl:justify-around 2xl:flex-row 2xl:space-x-5 2xl:justify-around px-24'>
        <img src="/assets/Ellipse preview admin.png" className='' alt="Upload img" />

        <div className='upload-button flex flex-col space-y-2 mt-2  '>
        <button className='  btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#005BBB]'>Upload Image </button>
        <button className='  btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#BB0000]'>Delete Picture </button>
        </div>
        
    </div>

    <div>

            <button className='btn-md px-14 rounded-full text-sm text-white font-normal font-poppin bg-[#005BBB]'>Save changes</button>
        </div>




</div>



 {/* contact form started */}

<div className='flex flex-col md:flex-row md:justify-around lg:flex-row lg:justify-around xl:flex-row xl:justify-around 2xl:flex-row 2xl:justify-around'>


{/* main contact form div */}

<div className='contact-form-selected'>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">Name</span>
    
  </label>
  <input type="text" placeholder="Enter Name" className="input shadow-xl rounded-xl w-full max-w-xs " />
  
</div>

{/* email */}
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">Country</span>
    
  </label>
  <select className="select shadow-xl rounded-xl">
    <option disabled selected ><span className='text-sm font-normal'>Choose Country</span></option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>

{/*  */}

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">City</span>
    
  </label>
  <select className="select shadow-xl rounded-xl">
    <option disabled selected ><span className='text-sm font-normal'>Choose City</span></option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>

{/*  */}

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">People</span>
    
  </label>
  <select className="select shadow-xl rounded-xl">
    <option disabled selected ><span className='text-sm font-normal'>Choose People</span></option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>

<div className='form-control w-full max-w-xs'>
<div className='contact-form-selection-area flex justify-around mt-1'>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text px-1">Available  </span>
    <input type="checkbox" className="toggle toggle-accent checked " />
  </label>
</div>


<div className='form-control'>
<label className="label cursor-pointer">
    
    <input type="radio" name="radio-1" className="radio-md " />
    <span className="label-text px-1">Remember me</span>
  </label>

</div>

</div>
</div>
</div>

{/* finished one contact form */}

<div className='contact-form-selected'>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">Contact</span>
    
  </label>
  <input type="text" placeholder="Telephone Number" className="input shadow-xl rounded-xl w-full max-w-xs " />
  
</div>

{/* email */}
<div className="form-control w-full max-w-xs">
<label className="label">
    <span className="label-text font-poppin font-medium"></span>
    
  </label>
<input   type="email" placeholder="E-mail (showed on page)" className="input shadow-xl rounded-xl w-full max-w-xs " />
  
</div>

{/*  */}

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium"></span>
    
  </label>
  <input title="Email"  type="email" placeholder="E-mail (for offer delete)" className="input shadow-xl rounded-xl w-full max-w-xs "/>
  
  
</div>

{/*  */}

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">Suited for</span>
    
  </label>
  <label className="label cursor-pointer">
    
    <input type="radio" name="radio-1" className="radio-sm " />
    <span className="label-text ">Remember me</span>
  </label>
  <label className="label cursor-pointer">
    
    <input type="radio" name="radio-1" className="radio-sm " />
    <span className="label-text ">Remember me</span>
  </label>
  
  <label className="label cursor-pointer">
    
    <input type="radio" name="radio-1" className="radio-sm " />
    <span className="label-text ">Remember me</span>
  </label>
  
  
</div>


</div>

{/* last one */}
<div className='contact-form-selected'>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium">Description</span>
    
  </label>
  {/* <input type="textarea" placeholder="Telephone Number" className="input textarea shadow-xl rounded-xl w-full max-w-xs " /> */}
  <textarea className="textarea" placeholder="Description" className='rounded-lg w-full max-w-lg shadow-xl px-20 py-8'></textarea>
  
</div>



</div>

{/* finished another contact col */}

</div>
</section>

{/* Captcha section */}

<section className="captcha section flex justify-center mt-5 mb-5">

<div className="captcha-container  w-96 h-36 bg-white relative shadow-xl max-w-sm">
  <p className='text-sm font-poppin font-normal text-gray-400 px-2'>Captcha</p>
  <div className="absolute bg-gray-400 w-46 h-18 top-14 left-14 bottom-10 right-10 max-w-xs">

  </div>
  </div>    

</section>

<section className='captcha-btn flex justify-center '>
 <div className='w-96 h-36 max-w-sm flex justify-between border-b-2'>
 <button className=' px-8 py-2 btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#BB0000]'>Cancel </button>

 <button className='px-8 py-2  btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#005BBB]'>Add </button>

 </div>
 
</section>

{/* devider */}
<section className='flex justify-center'>
    <hr />
</section>


   </>
  )
}

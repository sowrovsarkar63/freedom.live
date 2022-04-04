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


<div className='Contact flex justify-between mt-5'>
    <div className='imgInfo flex space-x-5 justify-around px-24'>
        <img src="/assets/Ellipse preview admin.png" className='' alt="Upload img" />

        <div className='upload-button flex flex-col space-y-1 '>
        <button className='  btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#005BBB]'>Upload Image </button>
        <button className='  btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#BB0000]'>Delete Picture </button>
        </div>
        
    </div>

    <div>

            <button className='btn-md px-14 rounded-full text-sm text-white font-normal font-poppin bg-[#005BBB]'>Save changes</button>
        </div>




</div>



 {/* contact form started */}

<div className='flex justify-around'>


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
   </>
  )
}

import React from 'react'

export default function DeleteOffer() {
  return (
      <>
    <section className='flex justify-center mt-5 mb-20'>
        
      <div className=' w-96 h-36 bg-white   max-w-sm '>
      <h2 className=''>How to delete offer?</h2>
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium"></span>
    
  </label>
  <input type="text" placeholder="Offer Number" className="input shadow-xl rounded-xl w-full max-w-xs " />
  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium"></span>
    
  </label>
  <input type="text" placeholder="Offer Number" className="input shadow-xl rounded-xl w-full max-w-xs " />
  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text font-poppin font-medium"></span>
    
  </label>
  <button className=' px-8 py-2 btn-sm rounded-full text-sm text-white font-normal font-poppin bg-[#BB0000]'>Request Delete </button>
  
</div>

      </div>

      
    </section>


    <section className='delete-info'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 p-5'>
          <div className="delete-text px-10">
              <h2 className='text-xl font-poppin font-bold '>How to delete offer?</h2>
              <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          <div className="delete-img px-10">
              <img  className='object-cover' src="/assets/image 2 admin.png" alt="image" />
          </div>

          {/*  */}

          <div className="delete-img px-10">
              <img  className='object-cover' src="/assets/image 2 admin.png" alt="image" />
          </div>

          <div className="delete-text px-10">
              <h2 className='text-xl font-poppin font-bold '>How to delete offer?</h2>
              <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
      </div>
    </section>

    </>
  )
}

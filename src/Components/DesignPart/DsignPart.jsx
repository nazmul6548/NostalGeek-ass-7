import React from 'react'

function DsignPart() {
  return (
    <div>

<div className=''>

<header className='mt-5'>
 <nav className=''>
 <div className="navbar bg-base-100 flex flex-row md:justify-between">
<div className="navbar-start">
<a className="btn btn-ghost text-3xl">Recipe Calories</a>
</div>
<div className="navbar-center hidden md:flex">
<ul className="menu menu-horizontal px-1">
 <li><a>Home</a></li>
 <li><a>Recipes</a></li>
 <li><a>About</a></li>
 <li><a>Search</a></li>
 
</ul>
</div>

<div className=''>
<label className="w-20 md:w-60 input input-bordered hidden md:flex items-center gap-2">
<input type="text" className="grow" placeholder="Search" />
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
<div className='ml-40 md:ml-4'>
<img src="https://i.ibb.co/TgsSYwr/Frame-5-1.png" alt="" />
</div>
</div>



</div>



 </nav>
<div className='mt-10'>
<div className="hero min-h-screen min-h-screen rounded-2xl overflow-hidden" style={{backgroundImage: 'url(https://i.ibb.co/TbHQJcq/chef-is-cooking-in-the-kitchen-with-a-frying-pan-on-fire-photo.jpg)'}}>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="w-full">
 <h1 className="mb-5 text-4xl md:text-6xl font-bold text-white md:leading-[90px]">Discover an exceptional cooking class <br /> tailored for you!</h1>
 <p className="mb-5 w-4/5 m-auto">Are you looking to elevate your culinary skills and create delicious dishes like a professional chef? Look no further than our exceptional cooking classes tailored just for you! </p>
 <div className=''>
 <button className="btn bg-[#0BE58A] m-3 text-xl border-none">Explore Now</button>
 
 <button class="btn btn-outline text-white text-xl m-3">Our Feedback</button>
 </div>
</div>
</div>
</div>
</div>
</header>
<main className='w-full md:0'>
<div className='text-center mt-10'>
<h1 className='text-6xl font-bold p-5'>Our Recipes</h1>
        <p className='pb-5'>Indulge in a culinary adventure with our exquisite recipes crafted to tantalize your taste buds and ignite your passion for cooking.</p>
</div>
</main>

</div>
    </div>
  )
}

export default DsignPart
import React from 'react'

function SingleCard({singleCard,handlebuttonclick}) {
    // console.log(singleCard);
    const {calories,preparing_time,ingredients,short_description,recipe_image,recipe_name,recipe_id} = singleCard;
  return (
    <div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center  w-full text-left">
    <h2 className="card-title w-full text-left">{recipe_name}</h2>
    <p>{short_description}</p>
    <div className="divider"></div>
    <div className='w-full text-left'>
        <h3 className='font-bold'>ingredients : {ingredients.length}</h3>
    
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
        <li>{ingredients[5]}</li>
    
    </div>
    <div className="divider"></div>
    <div className='flex w-full text-left'>
        <p className='flex '>   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>
   {preparing_time}</p>
        <p className='flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
</svg>
 {calories}</p>
    </div>

    <div className="card-actions  mt-5 w-full">
      <button onClick={() => handlebuttonclick(singleCard)} className="btn bg-[#0BE58A]">Want to Cook</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleCard
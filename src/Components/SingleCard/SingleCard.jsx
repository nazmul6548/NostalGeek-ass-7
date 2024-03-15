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
        <p>{preparing_time}</p>
        <p>{calories}</p>
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
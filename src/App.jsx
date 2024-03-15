
import { useEffect, useState } from 'react'
import './App.css'
import DsignPart from './Components/DesignPart/DsignPart'
import SingleCard from './Components/SingleCard/SingleCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
const [cards,setCard] =useState([])
const [product,setProduct] =useState([])

  useEffect(() => {
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => {
      setCard(data)
    })
  },[])
  // console.log(cards);

  const handlebuttonclick = (para) => {
    const isExist = product.find(p => para.id === p.id);
    if (!isExist) {
      setProduct([...product,para])
    }else{
      // alert('product already exists')
      toast("Already exist cart !");
    }
// console.log(para);
  }

  return (
    <>
     <div className='container m-auto'>
      <DsignPart></DsignPart>


      <div className='grid grid-cols-12 mt-10 '>
       
        <div className='grid grid-cols-2 gap-10 col-span-7'>
          {
            cards.map(card => <SingleCard singleCard={card} handlebuttonclick={handlebuttonclick}></SingleCard>)
          }
          

        </div>
        <div className='grid col-span-5'>
          <div>
            <h1 className='text-4xl font-bold text-center'>Want to cook : {product.length}</h1>
            <div className="divider w-3/4 m-auto pt-3"></div>

            <div className='flex '>
           
    <table className='table-auto w-3/4'>
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Time</th>
        <th className="px-4 py-2">Calories</th>
      </tr>
    </thead>
    </table>
            </div>
              
            <div>
              {
                product.map((item,index) =>(
                <div className='flex justify-center bg-slate-600 m-3 bg-[#28282808] p-4'>
           <p>{index+1}</p>
    <table className='table-auto w-full'>
    <thead>
      <tr>
        <th className="px-4 py-2">{item.recipe_name.slice(0,8)}</th>
        <th className="px-4 py-2">{item.preparing_time}</th>
        <th className="px-4 py-2">{item.calories}</th>
      </tr>
    </thead>
    </table>
    <button class="btn bg-[#0BE58A]">Preparing</button>
            </div>
                ))
              }
            </div>


            <div>
              <h1 className='text-3xl font-bold text-center'>Currently cooking : </h1>
              <div className="divider w-3/4 m-auto pt-3"></div>
            </div>
            <div className='flex  '>
           
    <table  className='table-auto w-full'>
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Time</th>
        <th className="px-4 py-2">Calories</th>
      </tr>
    </thead>
    </table>
            </div>
          </div>

        </div>
      </div>
      <ToastContainer />
     </div>
     
     
      
    </>
  )
}

export default App

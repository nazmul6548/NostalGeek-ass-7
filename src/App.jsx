import { useEffect, useState } from "react";
import "./App.css";
import DsignPart from "./Components/DesignPart/DsignPart";
import SingleCard from "./Components/SingleCard/SingleCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cards, setCard] = useState([]);
  const [product, setProduct] = useState([]);
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  

  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
  // console.log(cards);

  const handlebuttonclick = (para) => {
    const isExist = product.find((p) => para.id === p.id);
    if (!isExist) {
      setProduct([...product, para]);
    } else {
      // alert('product already exists')
      toast("Already exist cart !");
    }
    // console.log(para);
  };

  const handlepreparingclick = (item) => {
    // console.log(item);
    const upProduct = product.filter((p) => p.id !== item.id);
    setProduct(upProduct)
    setCurrentlyCooking([...currentlyCooking,item])
  };
  console.log([currentlyCooking]);

  return (
    <>
      <div className="container m-auto ">
        <DsignPart></DsignPart>

        <div className="grid md:grid-cols-12 mt-10  ">
          <div className="grid md:grid-cols-2 gap-10  md:col-span-7 border-2 rounded-xl m-2">
            {cards.map((card) => (
              <SingleCard
                singleCard={card}
                handlebuttonclick={handlebuttonclick}
              ></SingleCard>
            ))}
          </div>
          <div className="grid  md:col-span-5 border-2 rounded-xl m-2">
            <div>
              <h1 className="text-4xl font-bold text-center">
                Want to cook : {product.length}
              </h1>
              <div className="divider w-3/4 m-auto pt-3"></div>

              <div className="flex ">
                <table className="table-auto w-3/4 mt-10">
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
                {product.map((item, index) => (
                  <div className="flex justify-center bg-[#28282808] m-3  p-4">
                    <p>{index + 1}</p>
                    <table className="table-auto w-full">
                      <thead>
                        <tr>
                          <th className="px-4 py-2">
                            {item.recipe_name.slice(0, 8)}
                          </th>
                          <th className="px-4 py-2">{item.preparing_time}</th>
                          <th className="px-4 py-2">{item.calories}</th>
                        </tr>
                      </thead>
                    </table>
                    <button
                      onClick={() => handlepreparingclick(item)}
                      className="btn bg-[#0BE58A]"
                    >
                      Preparing
                    </button>
                  </div>
                ))}
              </div>

              <div>
                <h1 className="text-3xl font-bold text-center mt-10">
                  Currently cooking : {currentlyCooking.length} 
                </h1>
                <div className="divider w-3/4 m-auto pt-3"></div>
              </div>
              <div className="flex  ">
                <table className="table-auto w-full mt-10">
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
                  currentlyCooking.map((it,index) =>(
                   
                <div className="flex  bg-[#28282808] m-3  p-4">
                  <p>{index+1}</p>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">{it.recipe_name.slice(0, 8)}</th>
                      <th className="px-4 py-2">{it.preparing_time}</th>
                      <th className="px-4 py-2">{it.calories}</th>
                    </tr>
                  </thead>
                </table>
              </div>

                  ) )
                }
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

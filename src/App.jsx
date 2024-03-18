import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Vlogs from "./components/Vlogs/Vlogs"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";

function App() {

  const [ready, setReady] = useState([]);

  const [cart, setCart] = useState([]);

 
  const handleButton = (prepData) => {

    setCart((pS) =>
      pS.filter((item) => item.recipe_id !== prepData.recipe_id)
    );
    setReady((side) => [...side, prepData]);
  };

  const cookButton = (vlog) => {
   
    const alreadyExits = cart.find(
      (item) => item.recipe_id == vlog.recipe_id
    );

    if (!alreadyExits) {
      setCart((s) => [...s, vlog]);
      toast.success('Successfully Added');
    } else {
      toast.warn('Already Exist');
    }
   
  };

  console.log(cart);
  return (
  
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='mt-24 justify-center items-center text-center'>
        <h1 className='text-[#150B2B] text-3xl font-semibold mb-6'>
          Our Recipes
        </h1>
        <p className='text-[#150B2B99]'>
          Welcome to our restaurant, where we proudly present a diverse array of
          recipes crafted with passion and creativity.
        </p>
      </div>
      <div className='grid grid-cols-12 gap-10 max-w-6xl mx-auto my-12'>
        <div className='col-span-8'>
          <Vlogs cookButton={cookButton}></Vlogs>
        </div>

        <div className='col-span-4'>
          <Card
            handleButton={handleButton}
            cart={cart}
            ready={ready}
          ></Card>
        </div>
        
      </div>
      <ToastContainer />
      

     

    </div>
  
  )
}

export default App

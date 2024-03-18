/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Navbar from "./components/Navbar/Navbar"
import Vlogs from "./components/Vlogs/Vlogs"
import { ToastContainer } from 'react-toastify';

function App() {

  return (
  
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='mt-24 justify-center items-center text-center'>
        <h1 className='text-[#150B2B] text-3xl font-semibold mb-6'>
          Our Recipies
        </h1>
        <p className='text-[#150B2B99]'>
          Welcome to our restaurant, where we proudly present a diverse array of
          recipes crafted with passion and creativity.
        </p>
      </div>
      <div className='grid grid-cols-12 gap-10 max-w-6xl mx-auto my-12'>
        <div className='col-span-8'>
          <Vlogs handleWantToCook={handleWantToCook}></Vlogs>
        </div>

        <div className='col-span-4'>
          <Card
            handlePrepareButton={handlePrepareButton}
            sidebar={sidebar}
            >prepares={prepares}
          </Card>
        </div>
      </div>
      <ToastContainer />

     

    </div>
  
  )
}

export default App

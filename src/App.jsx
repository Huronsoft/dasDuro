import { Outlet } from "react-router-dom";
import Encabezado from "./compent/Encabezado";
import Navbar from "./compent/Navbar";
import Navbarleft from "./compent/navbarleft";

export default function App(){
   return (
    
    <div className="h-screen overflow-hidden">
      <Encabezado/>
 
      <div className="flex flex-row w-full h-screen overflow-hidden bg-[rgb(34,37,42)]">   
      
     



      <div className="flex flex-col overflow-auto  w-72  h-full border-r-2 border-r-gray-800"> 

      <Navbarleft/>




      </div>

      <div className="flex flex-col  w-full h-full ">

      <div className="flex flex-row justify-end w-full h-10 gap-2 text-cyan-500  text-xl font-bold  ">
      <Navbar/>
             
      </div>
    
      <div className="flex p-2 w-full h-full">


      <Outlet/>





      </div>




         
      </div>

     </div>
     </div>
 )
}
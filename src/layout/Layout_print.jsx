import Encabezado from "./compent/Encabezado";
import Leftpanel from "./compent/Leftpanel";
import Navbar from "./compent/Navbar";

export default function Layout_print(){ 
return (
    <div className="w-full   h-screen overflow-hidden  flex flex-col bg-[rgb(34,37,42)]">

    <div className='w-full h-12  '>
       <Encabezado/>
       <Navbar/>

    </div>

    <div className="w-full h-full Flex flex-row bg-[rgb(34, 37, 42)]">

        <div className="h-full w-56 bg-[rgb(34, 37, 42)] border-r-2 border-r-gray-800">


          <Leftpanel/>


        </div>

        <div className="w-full h-full bg-neutral-800">

      


         </div>
    </div>
    
</div>


















)
}
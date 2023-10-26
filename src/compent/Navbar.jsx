import { Link } from "react-router-dom";
import use_navbarsuper from "../hook/use_navbarsuper";


export default function Navbar(){ 
  const {pantalla,setpantalla} = use_navbarsuper()


return (
    <nav className="flex flex-row justify-between  items-start text-sm text-zinc-400 font-bold  h-auto">  
      <div className="hidden md:block ">
         <div className="ml-10 flex items-baseline space-x-4 ">
              <p></p>
            {/*
             <Link to="/Home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm 
             font-medium "
             onClick={()=>setpantalla('Home')}
             >
              <p>Home</p> 
              </Link>
           */}
             <Link to="/clientes" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             onClick={()=>setpantalla('clientes')}
             >
             <p>Clientes</p> 
              </Link>
           {/*
             <Link to="/estadis" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             onClick={()=>setpantalla('estadis')} 
             >
              <p>Estadisticas</p>
             </Link>

             <Link to="/contactanos" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             onClick={()=>setpantalla('contactanos')}  
             >
              <p>Contactanos</p>
              </Link>
            
             <Link to="/Basic" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             >
              <p>Basic Rifa</p>
              </Link>
          
            <Link to="/PRO" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             >
              <p>Pro-rifa</p>
              </Link>

              <Link to="/comp" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             >
              <p>Pruebas</p>
              </Link>

              <Link to="/check" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             >
              <p>Check_pago</p>
              </Link>

              <Link to="/frifa" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 
             text-sm font-medium"
             >
              <p>Formulario rifas</p>
              </Link>
          */}
            </div>
   </div>


</nav> 
)
}
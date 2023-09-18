import { Link } from "react-router-dom";
import use_navbarsuper from "../hook/use_navbarsuper";

export default function Navbarleft(){ 

   const {pantalla,setpantalla} = use_navbarsuper()
   
return (
 
  <div className="flex flex-col ">
     
      <div className="flex flex-row items-center p-4 gap-3 text-sm text-[rgb(156,159,164)] font-bold ">
         <img src="/logos/log_1.png" alt="logo Duro herrajes" className=" w-auto h-auto flex flex-row gap-4 items-center" />
        
      </div> 
      <div className=" w-full h-2 border-b-2 border-b-[rgb(156,159,164)]"> 
     </div>


     <div className="flex flex-col p-4 items-center">
       <div className="flex flex-row items-center p-2 gap-3 text-sm text-[rgb(156,159,164)] font-bold ">
         <img src="/logos/avatar3.jpg" alt="logo Duro herrajes" className="rounded-xl w-16 h-auto flex flex-row gap-4 items-center" />
         <h1 className="flex text-sm "> Nombre usuario</h1>
    </div> 

         <div className="flex flex-col p-2 items-star text-sm text-zinc-400 font-bold">        
             
             <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 gap-2 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex flex-row"
             onClick={()=>setpantalla('Dashboard')}
             >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
               <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd" />
            </svg>
            <p>Dashboard</p></Link>
            
            <Link to="/Perfil" 
            className="flex flex-row  text-gray-300 hover:bg-gray-700
             hover:text-white rounded-md px-3 py-2 text-sm font-medium"
             onClick={()=>setpantalla('Perfil')}
             >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
               <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
             <p>Perfil</p> </Link>

            <Link to="/rifas" className="flex flex-row gap-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm 
            font-medium"
            onClick={()=>setpantalla('rifas')}
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
             <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 
             5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838
              0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
               clipRule="evenodd" />
             <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 
             005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
            </svg>
            <p>Rifas</p></Link>


            <Link to="/Config" className="flex flex-row gap-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md
             px-3 py-2 text-sm font-medium"
             onClick={()=>setpantalla('Config')}
             >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493
                 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 
                 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875
                1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277
                .228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-
                .165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-
                .095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 
                1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875
                1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
            </svg>  
             <p> Configuracion Pagos</p></Link>

            <Link to="" className="flex flex-row gap-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 
                 py-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0
                 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788
                  0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
            <p>Salir</p> </Link>

         </div>  
      </div>
  </div>
)
}
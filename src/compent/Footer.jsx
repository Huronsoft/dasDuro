import Mapa from "./Mapa";
import { Link } from "react-router-dom";

export default function Footer(){ 
return (
 <footer className=" flex flex-col w-full h-full ">

   <div className="flex flex-row w-full h-96 p-4 gap-4 bg-white">
      <div className="flex flex-col w-96 h-full items-center justify-center">
           <img src="/logos/log_1.png" alt="logo Duro herrajes" className=" w-auto h-auto flex flex-row gap-4 items-center" />
      </div>
      <div className="flex flex-row w-1 h-full  bg-gray-200">
      </div>
      <div className="flex flex-col w-96 h-full  items-start justify-start p-4 gap-8 ">
      <div className="flex items-center justify-center gap-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-helmet" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M12 4a9 9 0 0 1 5.656 16h-11.312a9 9 0 0 1 5.656 -16z" />
       <path d="M20 9h-8.8a1 1 0 0 0 -.968 1.246c.507 2 1.596 3.418 3.268 4.254c2 1 4.333 1.5 7 1.5" />
     </svg>
       <h4 className="flex text-3xl font-bold text-[rgb(215,0,24)] ">(310) 482 01 60 </h4>
     </div>

     <div className="flex flex-col ">
     <label className="flex flex-row text-lg font-normal text-gray-500">DUROHERRAJES</label>
     <label className="flex flex-row text-sm font-normal text-gray-500">Cra. 29 # 41 57, El Diamente, Cali, Valle del Cauca</label>
     <Link to="https://maps.app.goo.gl/6GMHpX4fqvPKFBqy6" className="flex flex-row gap-2 text-gray-300 hover:bg-gray-200 items-center hover:text-white rounded-md px-3 py-2 text-sm 
            font-medium"
             onClick={()=>setpantalla('clientes')}
             >
           <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-star" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.718 17.359l-.718 -.359l-6 3v-13l6 -3l6 3l6 -3v7.5" />
             <path d="M9 4v13" />
             <path d="M15 7v4" />
             <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>  
             <p>Visitanos</p> 
            </Link>
     </div>

      </div>
      <div className="flex flex-col w-96 h-full  items-center justify-center">
       
      </div>
      <div className="flex flex-row w-80 h-full items-center justify-center">
            <h4>Encuentranos en :</h4>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook-filled " width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
           <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" stroke-width="0" fill="currentColor" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
             <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
           <path d="M16.5 7.5l0 .01" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M16.083 2h-4.083a1 1 0 0 0 -1 1v11.5a1.5 1.5 0 1 1 -2.519 -1.1l.12 -.1a1 1 0 0 0 .399 -.8v-4.326a1 1 0 0 0 -1.23 -.974a7.5 7.5 0 0 0 1.73 14.8l.243 -.005a7.5 7.5 0 0 0 7.257 -7.495v-2.7l.311 .153c1.122 .53 2.333 .868 3.59 .993a1 1 0 0 0 1.099 -.996v-4.033a1 1 0 0 0 -.834 -.986a5.005 5.005 0 0 1 -4.097 -4.096a1 1 0 0 0 -.986 -.835z" stroke-width="0" fill="currentColor" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
             <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>

      </div>

   </div>

   <div className="flex flex-row w-full h-8 p-1 border-y-4">
    <label className="flex flex-row text-sm font-normal text-gray-500">© 2023 - Ecommerce software by HuronSoftware™</label>

   </div>

 </footer>
)
}
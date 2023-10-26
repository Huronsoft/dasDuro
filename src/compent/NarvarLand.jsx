import { Link } from "react-router-dom";
export default function Navbarland(){ 

return (
    <nav className="flex md:flex-row flex-col w-full md:h-48 h-auto items-center justify-center bg-[rgb(248,249,250)] fixed">  
     
     {/*logo */}
     <div className="flex flex-row  w-1/3 h-full items-center justify-center p-2  text-4xl">
        {/* <img src="/logos/log_1.png" alt="logo Duro herrajes" className=" w-auto h-auto flex flex-row items-center" /> */}
        <h1 className="flex  text-[rgb(76,83,90)] font-bold">Duro Herrajes</h1> 
        <h2 className="flex text-blue-600 text-6xl">.</h2> 
     </div>

     {/* Menu */}
      <div className="flex flex-col  w-3/5 h-full items-center justify-center text-xl">
         {/*marco */}
          <div className="flex flex-row rounded-xl border-2 justify-between items-center border-hover:bg-cyan-600 border-red-600 w-5/6  h-16 ">
            {/*lupa logo */}
           <div className="flex flex-row rounded-xl  items-center justify-center w-20  h-16 ">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
           </div>
           <div className="flex flex-row md:w-full w-18 h-14 bg-white ">
               <input
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Search"
                  ClassName="flex w-full h-full"
                />
            </div>
  
            <div className="flex flex-row rounded-xl border-2 bg-red-600 items-center justify-center w-28  h-14 ">
                <label className="flex flex-row items-end  text-xl text-white font-bold"> Buscar </label> 
            </div>
          </div>    
      
     </div> 
    
    {/* Mi cuenta */}
    <div className="flex flex-row  w-80 h-full gap-2 p-2 items-center justify-center  text-9xl">
       <div className="flex w-16 h-16  rounded-3xl hover:bg-[rgb(215,0,24)]  shadow-lg shadow-slate-200 justify-center items-center bg-white">       
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 hover:text-white   ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
       </svg>
       </div> 
       <div className="flex flex-col w-40 h-full gap-2 items-start justify-center">
       <label className="flex flex-row items-end text-xl text-black font-bold"> Mi Cuenta</label>
       <label className="flex flex-row items-end text-sm text-[rgb(113,117,125)] font-normal"> <p>Iniciar Seccion</p></label>
       </div>     
     </div>

     {/* carrilto */}
      <div className="flex flex-row  w-96 h-full items-center gap-3 md:justify-start justify-center p-2  text-9xl">
       <div className="flex w-16 h-16 rounded-3xl hover:bg-[rgb(215,0,24)]  shadow-lg shadow-slate-200 justify-center items-center bg-white">       
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10   hover:text-white " >
           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
       </div> 
       <div className="flex flex-col w-40 h-full gap-2 items-start justify-center">
       <label className="flex flex-row items-end text-xl text-black font-bold"> Mi carrito</label>
       <label className="flex flex-row items-end text-sm text-[rgb(113,117,125)] font-normal"> <p>$0000</p></label>
       </div>
     </div>


    </nav> 
)
}

import Scroll_num from "./Sroll_num";

export default function Esquema_rbasic ({arrayseleccion}){ 
return (
  <div className=" flex w-full h-full">
    
     <header className=" flex flex-col w-full h-full  md:flex-row justify-center items-center  ">

          {/* contenedor imagagen y panel pago  opacity-90*/}
          <div className=" flex flex-row w-5/6  h-5/6   p-3  bg-[rgb(18,2,62)] shadow-xl ">
          
          <div className="flex flex-row w-1/2 h-full  pr-2 gap-3">
       
         {/* contenedor imagen y carrusel*/}
           <div className="flex flex-col   gap-2 w-full h-full">
             {/* contenedor imagen  prncipal*/}
            <div className=" flex flex-col w-full h-full rounded-lg bg-[rgb(90,75,204)]   ">
                     <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_1.jpg" alt="" />
       
              </div>
               {/* contenedor  carrusel*/}
             <div className=" flex flex-col  p-2 w-full h-52 bg-[rgb(18,2,62)]">
                  {/* contenedor  botones*/}
              <div className="flex flex-row w-full h-full justify-between  gap-1 ">
                    {/* contenedor  boton flecha izq < */}
                    <div className=" flex flex-col w-10 h-full item-center justify-center  ">  
                        <button className="flex flex-col rounded-full bg-[rgb(90,75,204)] w-10 h-10
                         text-center items-center text-white font-bold justify-center"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
                        </svg>
                        </button>
                    
                    </div>  
                           {/* contenedor  imagenes */}                   
                           <div className=" flex flex-row w-11/12 h-full justify-between p-2 gap-2 ">
                        
                                <div className="flex flex-col w-36 h-full rounded-xl bg-slate-900 ">
                                  <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_2.jpg" alt="" />
                                </div>
       
                                <div className="flex flex-col w-36 h-full rounded-xl bg-slate-900 ">
                                   <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_3.jpg" alt="" />
                                </div>
                               
                                <div className="flex flex-col w-36 h-full rounded-xl bg-slate-900 ">   
                                  <img className="cover rounded-xl w-full h-full object-cover  " src="/boletas_img/basic/bas_4.jpg" alt="" />                        
                                </div>
       
                              {/* fin  contenedor  imagenenes*/}
                            </div>  
                   {/* contenedor  boton flecha derecha >*/}
                   <div className=" flex flex-col w-10 h-full item-center justify-center  ">  
                   <button className="flex rounded-full bg-[rgb(90,75,204)] w-10 h-10
                     text-center items-center text-white font-bold justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                        </svg>
                   </button>
       
                  </div>
              {/* fin  contenedor  imagenenes*/}
              </div>
          {/* fin  contenedor  imagenen y pago*/}
         </div>
          </div>
          </div>
            {/* contenedor  pago*/}
          <div className=" flex flex-col w-full h-full rounded-xl  bg-[rgb(18,2,62)]  p-5 gap-4">
           
                <div className="flex flex-col w-full h-auto gap-5">
                  <p className="flex w-full h-auto text-lg text-amber-600 font-bold ">
                    
                  </p>
                  <p className="flex w-full h-auto text-5xl text-white font-bold ">
                    Combo de Exploradoras y Maletero
                  </p>
                </div>

                <div className=" flex flex-row w-full h-auto ">
                  <p className="flex w-full h-auto text-lg text-white font-bold ">
                    Este concurso tiene un máximo de 99 Boletas.
                  </p>
                </div>

                <div className=" flex flex-row w-full h-auto items-center  ">
                    <p className="flex w-20 h-auto text-lg text-white font-bold ">
                      Rifa N°
                    </p>
                  <p className="flex w-full h-auto text-3xl text-red-600   font-bold ">
                    100 
                  </p>
                </div>

                <div className=" flex flex-row w-full h-auto justify-between  ">
                    <p className="flex  h-auto text-lg text-white font-bold ">
                       55 
                    </p>
                    <p className="flex  h-auto text-lg text-white  font-bold "> 
                      99 
                    </p>
                </div>
                {/* barra */}
                <div className=" flex flex-row w-full h-2 rounded-2xl bg-[rgb(32,14,84)]  shadow-sm shadow-lime-300 ">
                    <div className=" flex flex-row w-1/2  h-2 rounded-2xl bg-green-400 shadow-sm shadow-lime-300  ">

                    </div> 
                </div>

                <div className=" flex  w-full h-auto ">
                    <p className="flex w-full h-auto text-lg text-white font-bold ">
                      ¡Solo quedan 50!
                    </p>
                </div>


                <div className=" flex flex-row items-center w-full h-full gap-2">
                  <p className="flex h-auto text-4xl text-white font-bold ">
                    $35,000
                  </p>
                  <p className="flex  h-auto text-lg text-white  font-bold ">
                    Por boleta 
                  </p>
                </div>

                              

                 {/* este viene del contenedor  cargueboletas  */}
                <div className=" flex flex-row items-center w-full h-full gap-2">
                                  
                      <div className="w-full grid grid-cols-5 gap-1 items-center justify-center  overflow-auto">
                        { arrayseleccion.map(value=>
                      <div className=" h-auto w-8 rounded-full bg-sky-500 text-white  items-center justify-items-center font-bold p-1">
                      <p>{value}</p>      
                        </div>
                        )
                      }
                      </div>

                </div>

                <div className="flex flex-row w-full h-48 items-center  justify-center gap-5">

                 </div>   

             {/* este viene de componentes scroll_num  */}
             <div className="flex flex-row w-full h-full items-center  justify-center gap-5">

               <button className="flex text-xl w-56 h-16 font-bold items-center text-white 
                    bg-gradient-to-r from-indigo-500  to-cyan-400
                   rounded-2xl justify-center">
                  Comprar Boletas
                </button>          
             </div>        
          
                
            </div>
          </div>   
       
    </header>
   {/* fin contenedor principal*/}
 </div>  

)
}
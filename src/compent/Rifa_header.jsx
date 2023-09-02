// arrayseleccion esta variable viene del archivo Basic_r
export default function Rifa_header({arrayseleccion}){ 
return (
    <header className="w-full flex flex-row">
    {/* imagenes */}
    <div className="w-1/2 h-auto flex flex-row items-center gap-2 ">
        {/* imagen seleccionada o grande */}
        <div className="w-3/4 rounded-xl overflow-hidden">
         <img src="/boletas_img/img1.jpg" alt="" />
        </div>
        {/* listado de imagenes */}
        <div className="w-1/4 h-full overflow-hidden flex flex-col items-center justify-center gap-1">
            {/* imagen 1 */}
            <div className="overflow-hidden w-full h-24  rounded-xl flex items-center">
                <img className="cover rounded-xl " src="/boletas_img/img2.jpg" alt="" />
            </div>
            {/* imagen 2 */}
            <div className="overflow-hidden w-full h-24  rounded-xl flex items-center">
                <img className="cover rounded-xl " src="/boletas_img/img3.png" alt="" />
            </div>
            {/* imagen 3 */}
            <div className="overflow-hidden w-full h-24 rounded-xl flex items-center">
                <img className="object-cover rounded-xl " src="/boletas_img/img4.jpg" alt="" />
            </div>
            {/* imagen 4 */}
            <div className="overflow-hidden w-full h-24   flex items-center">
                <img className=" object-contain rounded-xl " src="/boletas_img/img5.jpg" alt="" />
            </div>
        </div>

    </div>
    {/* primera columna de informacion */}
    <div className="w-1/2 h-full text-white flex flex-col p-2">

    <h6 className="flex font-extrabold text-4xl text-cyan-200 p-2 item-center text-decoration-line: underline"
    >Rifa #5</h6>
    
    <h6 className="flex font-extrabold text-4xl text-cyan-200 p-6 item-center text-decoration-line: underline"
    >Combo exploradoras </h6>

     <div className="flex flex-col p-2 gap-1">
    
       <div className="flex flex-row  gap-4">
           <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
           </svg>
           <p>Juego exploradoras dual</p>                     
       </div>
           
       <div className="flex flex-row gap-4">
             <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="12" cy="12" r="11" />
               <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
             <p>Maletero koju 55 lts</p>
        </div>

           <div className="flex flex-row gap-4">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="12" cy="12" r="11" />
               <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
              <p>Juego de mantenimiento y limpieza de cadena</p>
           </div>


           <div className="flex flex-row gap-4">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="12" cy="12" r="11" />
               <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
              <p>Intercomincadores</p>
           </div>


           <div className="flex flex-row gap-4">
              <svg class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
               <circle cx="12" cy="12" r="11" />
               <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
              <p>Tank bag</p>
           </div>

         </div>




    </div>
    {/* segunda columna de informacion */}
    <div className="w-1/2 h-full text-white flex flex-col p-9 gap-2">
    <p className="flex te text-9xl p-5 text-cyan-300">$5000</p>
 
        <div className="w-full grid grid-cols-5 gap-1 overflow-auto">
            { arrayseleccion.map(value=>
                <div className=" h-auto w-8 rounded-full bg-sky-500 text-white font-bold p-1">
                  <p>{value}</p>      
                </div>
                )
            }
        </div>
    
       <button className="grow h-14 text-center rounded-md justify-center font-extrabold text-white bg-sky-500 hover:bg-sky-700
       ">
        Comprar
        </button> 
    </div>
 </header>
)
}
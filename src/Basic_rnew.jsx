
import { useState } from "react";
import Esquema_rbasic from "./compent/Esquema_rbasic";
import Navbar from "./compent/Navbar";

export default function Basic_rnew(){ 
    const [seleccion,setSeleccion] = useState([])   
    let array  = []
    let arrayseleccion = []
    for (let index = 0; index < 100; index++)
    {
        if(index < 10)
        {
            array.push('0' + index);
        }else{
            array.push(index);
        }
    }
    // asignamos los valores del stado en el arreglo 
    arrayseleccion = seleccion;
    const nuevoNumero = (number) =>
    {
        if(!(arrayseleccion.includes(number)))
        {
            // asignar nuevo valor al arreglo y exparcir el viejo
            setSeleccion([...arrayseleccion,number])

        }else{
            const newarray = arrayseleccion.filter(numero=> numero !== number)
            console.log(newarray)
            setSeleccion([...newarray])
        }
    }

return (

  <div className="flex flex-col w-full h-full bg-white ">
    <Navbar/>
     {/* Esto viene de componente Esquema_rpro   */}
  <Esquema_rbasic  arrayseleccion={arrayseleccion}/>
                {/* Panel de detalle   */}
    <div className="flex flex-col items-center w-full h-full justify-center" >
         
         
       <div className="flex flex-row w-full p-3 items-center justify-center  h-full bg-white">
      

        <div className="flex flex-col w-5/6 h-full p-3 gap-3 text-white font-bold text-lg justify-between ">

        <div className="border-b border-gray-200 dark:border-gray-700">
                      <ul clasclassNames="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                     <li className="mr-2">
                     <a href="#" className="inline-flex items-center justify-center p-4 text-xl text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                        <svg className="w-4 h-4 mr-2 text-blue-600  dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                           <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg> AQUI ESTA TU NUMERO DE LA SUERTE!!! 
                     </a>
                     </li>     
                   </ul>
         </div>    
           <div className="grid grid-cols-8 gap-2 place-items-center justify-center w-11/12 mt-5 h-auto ">
             { array.map(index=>
               <button className={`${arrayseleccion.includes(index) ? "bg-red-600" : ""} flex flex-col w-32  h-40  justify-items-center items-center rounded-xl border-4 
                        border-blue-950 hover:shadow-lg hover:border-blue-700 hover:shadow-white `} key={index} 
                        onClick={()=>nuevoNumero(index)}
                        >
                      <img src="/boletas_img/boleta_b.png" alt="rifas Duro herrajes" className="rounded-xl w-38 h-auto
                        flex flex-row gap-4 items-center"/> 
                    <div className="flex flex-col w-full h-full bg-blue-950 text-center justify-center font-bold text-cyan-300 ">
                                <h6 className=" text-4xl font-bold text-white">{index}</h6>
                                
                    </div>
              </button>
            )}
            </div>

         <p className=" flex text-xl">  </p> 

        </div>


       </div>
    </div>
             {/* esto es el footer  */}
    <div className="flex flex-col w-full h-full items-center justify-center  ">
   
          <div className="flex flex-col w-full h-full rounded-xl items-center justify-center
          ">
           <img className="flex flex-row w-1/3 h-40"    src="/logos/log_1.png" alt="logo Duro herrajes"  />
        
             

          </div>

    </div>


 </div>  

)
}
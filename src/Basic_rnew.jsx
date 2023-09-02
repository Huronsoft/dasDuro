
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

  <div className="flex flex-col w-full h-full  bg-[rgb(15,2,50)]  ">
    <Navbar/>
     {/* Esto viene de componente Esquema_rpro   */}
  <Esquema_rbasic  arrayseleccion={arrayseleccion}/>
                {/* Panel de detalle   */}
    <div className="flex flex-col items-center w-full h-full justify-center" >
         
         
       <div className="flex flex-row w-full p-3 items-center justify-center  h-full bg-[rgb(15,2,50)]">
      

        <div className="flex flex-col w-5/6 h-full p-3 gap-3 text-white font-bold text-lg ">

          <p className=" flex text-xl"> Escogue tu Numero aqui</p>

           <p className=" flex text-xl items-center w-full h-full justify-items-center"> 
           </p>

           <div className="grid grid-cols-8 gap-2 place-items-center justify-center w-11/12 mt-5 h-auto ">
             { array.map(index=>
               <button className={`${arrayseleccion.includes(index) ? "bg-red-500" : ""} flex flex-col w-32  h-40  justify-items-center items-center rounded-xl border-4 
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
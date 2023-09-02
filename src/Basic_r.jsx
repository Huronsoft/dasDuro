import { useState } from "react";
import Rifa_header from "./compent/rifa_header";

export default function Basic_r(){
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

    <div className=" w-full h-auto   bg-[rgb(34,37,42)]">   
    <div className="flex flex-col items-center justify-start w-full h-auto">
     {/* div contenedor de header / este se llama del componente Rifa_header */}

     <Rifa_header arrayseleccion={arrayseleccion}/>
    {/* fin div contenedor de header */}
     

        <div className="grid grid-cols-8 gap-2 place-items-start justify-end w-11/12 mt-5 h-auto ">
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
    </div>
    </div>




)
}
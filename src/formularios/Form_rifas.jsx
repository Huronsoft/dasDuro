import { useRef, useState } from "react"
import { use_rifa } from "../hook/use_rifa"
import { useNavigate } from "react-router-dom"



export default function Form_rifas(){ 
    const {registro} = use_rifa()
    const [mensajes,setmensajes] = useState()
    const navigate = useNavigate()
    const usuario = useRef ()
    const email = useRef ()
    const password  = useRef ()
    const telefono  = useRef ()
  
    if (mensajes){
  
     if(mensajes?.response?.data?.errors?.password){
      alert(mensajes?.response?.data?.errors?.password[0])
     }   
     if(mensajes?.id){
      alert('fue creado con exito')
      navigate('comp')
     }  
      setmensajes('')
    }
  
    const submitt =
    (e) => {
       e.preventDefault()
       
       const data = {
           usuario: usuario.current.value,
           email: email.current.value,
           telefono:telefono.current.value,
           password: password.current.value,
         
        }
       registro(data,setmensajes); 
  
   };
  
return (
    <div className=" flex flex-col w-5/6 h-full bg-[rgb(17,24,39)] ">
     
        <div className="flex flex-col w-full h-full bg-white items-center justify-center" >

            <div className="flex flex-col w-full h-full bg-[rgb(17,24,39)] p-6 gap-4">

                <form className=" flex flex-col w-full h-full p-3 gap-12">

                 <div className=" flex flex-row w-full h-full gap-5">
                    <div class="flex items-center">
                        <input checked id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                          dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                           dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rifa Basica</label>
                    </div>                  

                    <div class="flex items-center">
                        <input checked id="radio-2" type="radio" value="" name="default-radio" class="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                          dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                           dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rifa Pro</label>
                    </div>   

                    </div>
                   <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Ingrese Titulo" required/>
                  </div>                 

                   <div className=" flex flex-col w-16 h-10 ">
                   <label for="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consecutivo</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # rifa" required/>
                   </div>

                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" $ Valor" required/>
                   </div>

                   <div className=" flex flex-row w-full h-full gap-28">
                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="fechaini" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha inicio</label>
                    <input type="fecha" id="fechaini" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" dd/mm/yyy" required/>
                   </div>


                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="fechafin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Fin</label>
                    <input type="fecha" id="fechaini" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" dd/mm/yyy" required/>
                   </div>
                   </div>

                   <div className=" flex flex-row w-full h-full gap-28">
                    <div className=" flex flex-col w-20 h-10 ">
                    <label for="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Num Inicial</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # Inicial" required/>
                    </div>

                    <div className=" flex flex-col w-20 h-10 ">
                     <label for="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Num Final</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # final" required/>
                   </div>
                   </div>

                   <block >                   
                      <label for="message" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                       border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba aqui .."></textarea>
                  </block>          

                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple/>
                    </div>
                   </div>

                           {/*<!-- modal footer -->*/}
              <div class="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                 
                 <input type="submit" className="flex text-xl w-56 h-16 font-bold items-center text-white 
                         bg-gradient-to-r from-indigo-500  to-cyan-400
                         rounded-2xl justify-center"   value={'Guardar'}/> 
             </div>


             <div class="flex items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                 
                  <p></p>
             </div>

                </form>
            </div>
        </div>        
    </div>
)
}
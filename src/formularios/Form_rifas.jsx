import { useRef, useState } from "react"
import { use_rifa } from "../hook/use_rifa"
import { useNavigate } from "react-router-dom"

export default function Form_rifas(){ 
    const {registrorifa} = use_rifa()
    const [mensajes,setmensajes] = useState()
    const [estadoimg1,setestadoimg1] = useState()
    const [estadoimg2,setestadoimg2] = useState()
    const [estadoimg3,setestadoimg3] = useState()
    const [estadoimg4,setestadoimg4] = useState()
    const [estadoimg5,setestadoimg5] = useState()
    const [valdia,setvalida]= useState(1)
    const navigate = useNavigate()
    const titulo = useRef ()
    const Consecutivo = useRef ()
    const valor  = useRef ()
    const fecha_ini  = useRef ()
    const fecha_fin  = useRef ()
    const num_ini  = useRef ()
    const num_fin  = useRef ()
    const tipo_rifa1  = useRef ()
    const tipo_rifa2  = useRef ()
    const desc  = useRef ()



    const asignarimg1 = (e)=>{
        setestadoimg1(e.target.files[0]);
    }    
    const asignarimg2 = (e)=>{
        setestadoimg2(e.target.files[0]);
    }
    const asignarimg3 = (e)=>{
        setestadoimg3(e.target.files[0]);
    }
    const asignarimg4 = (e)=>{
        setestadoimg4(e.target.files[0]);
    }
    const asignarimg5 = (e)=>{
        setestadoimg5(e.target.files[0]);
    }
 

    if (mensajes){
  
     if(mensajes?.response?.data?.errors?.password){
      alert(mensajes?.response?.data?.errors?.password[0])
     }   
     if(mensajes?.id){
      alert('fue creado con exito')
      navigate('rifas')
     }  
      setmensajes('')
    }
  
    const submitt =
    (e) => {
       e.preventDefault()
    //    enviar archivos 
        const data2 = new FormData()
        data2.append('imagen1',estadoimg1)
        data2.append('imagen2',estadoimg2)
        data2.append('imagen3',estadoimg3)
        data2.append('imagen4',estadoimg4)
        data2.append('imagen5',estadoimg5)
        data2.append('titulo',titulo.current.value)
        data2.append('consecutivo',Consecutivo.current.value)
        data2.append('valor',valor.current.value)
        data2.append('fecha_ini',fecha_ini.current.value)
        data2.append('fecha_fin',fecha_fin.current.value)
        data2.append('num_ini',num_ini.current.value)
        data2.append('num_fin',num_fin.current.value)
        data2.append('desc',desc.current.value)
        if (valdia===1){
          data2.append('tipo_rifa',1)
         }
         else
         {
          data2.append('tipo_rifa',0)
         }
       registrorifa(data2,setmensajes); 


       console.log(setvalida)
  
   };
  
return (
    <div className=" flex flex-col w-5/6 h-full bg-[rgb(17,24,39)] ">
     
        <div className="flex flex-col w-full h-full bg-white items-center justify-center" >

            <div className="flex flex-col w-full h-full bg-[rgb(17,24,39)] p-6 gap-4">

                <form className=" flex flex-col w-full h-full p-3 gap-12">
                      {/* Input Tipo rifa basic */}
                 <div className=" flex flex-row w-full h-full gap-5">
                    <div class="flex items-center">
                        <input checked id="radio-1" type="radio" value="" name="default-radio" class="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                          dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                           dark:bg-gray-700 dark:border-gray-600"
                           ref={tipo_rifa1} 
                           onClick={()=>setvalida(0)}/>
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rifa Basica</label>
                    </div>                  
                        {/* Input Tipo rifa pro */}
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio"  className="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
                          dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
                           dark:bg-gray-700 dark:border-gray-600"
                           ref={tipo_rifa2}
                           onClick={()=>setvalida(1)}
                          /> 
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rifa Pro</label>
                    </div>   
                    </div>

                      {/* Input titulo  */}
                   <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Ingrese Titulo" required
                      ref={titulo} />
                  </div>                 
                    
                    {/* Input Consecutivo  */}
                   <div className=" flex flex-col w-16 h-10 ">
                   <label for="valor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consecutivo</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # rifa" required
                      ref={Consecutivo} />
                   </div>

                     {/* Input Valor  */}
                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="# rifa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" $ Valor" required
                      ref={valor} />
                   </div>

                     {/* Input fecha ini  */}
                   <div className=" flex flex-row w-full h-full gap-28">
                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="fechaini" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha inicio</label>
                    <input type="date" id="fechaini" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" dd/mm/yyy" required
                      ref={fecha_ini}/>
                   </div>

                         {/* Input fecha fin  */}
                   <div className=" flex flex-col w-20 h-10 ">
                   <label for="fechafin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Fin</label>
                    <input type="date" id="fechaini" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" dd/mm/yyy" required
                      ref={fecha_fin}/>
                   </div>
               
             
                   </div>
                     {/* Input numero inicial */}
                  
                   <div className=" flex flex-row w-full h-full gap-28">
                    {valdia===1? 
                    <div className=" flex flex-col w-20 h-10 ">                 
                      <label for="numeroini" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Num Inicial</label>
                      <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # Inicial" required
                      ref={num_ini}/>                  
                    </div>
                    :''
                    }  
                        {/* Input numero final*/}
                   {valdia===1?     
                    <div className=" flex flex-col w-20 h-10 ">
                   <label for="numerofin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Num Final</label>
                    <input type="numeric" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" # final" required
                      ref={num_fin}/>
                   </div>
                       :''
                      }    
                
                   </div>
                    {/* Input numero descripcion*/}
                   <block >                   
                      <label for="message" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                       border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba aqui .."
                       ref={desc}></textarea>
                  </block>          
                    
                    {/* Input numero img1*/}
                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" 
                      onChange={asignarimg1}
                      />
                    </div>
                   </div>

                     {/* Input numero img2*/}
                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" 
                      onChange={asignarimg2}
                      />
                    </div>
                   </div>
                     {/* Input numero img3*/}
                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" 
                      onChange={asignarimg3}
                      />
                    </div>
                   </div>

                     {/* Input numero img4*/}
                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" 
                      onChange={asignarimg4}
                      />
                    </div>
                   </div>

                    {/* Input numero img5*/}
                   <div className="flex flex-col w-96 h-10" >
                    <div id="file" className="">
                    <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Cargue aqui sus imagenes</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 
                      focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" 
                      onChange={asignarimg5}
                      />
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
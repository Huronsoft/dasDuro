import { useRef, useState } from "react"
import { use_login } from "../hook/use_login"

export default function Form_contacto(){ 

 const {registro} = use_login()
 const {nombre,setnombre} = useState('')
 const nombreCompleto = useRef ()
 const email = useRef ()
 const telefono  = useRef ()
 const direccion = useRef ()


    const submitt =
     (e) => {
        e.preventDefault()
        
        const data = {
            nombreCompleto: nombreCompleto.current.value,
            email: email.current.value,
            telefono: telefono.current.value,
            direccion: direccion.current.value,
        }
        registro(data);
        setnombre('') 


    };

return (
     <div className="flex  flex-col  relative w-full h-full items-center justify-center">

        <div className="flex flex-row w-full h-64  rounded-xl border-1 pl-52 bg-[rgb(34,37,42)]">
            {/* Inicio de relative imagen */}
           <div className="flex-none w-56 h-72 relative rounded-lg items-center justify-center bg-gray-200    border-4 ">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-white">
               <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
            </svg>
          </div>
           {/* fin de relative imagen */} 

           {/* Inicio de input */}
           <form className="flex items-center" onSubmit={submitt}>
            <div className="flex flex-col w-full h-full items-center p-4 gap-3">

                {/* Input Nombre */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6  text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>

                        <input type="text" placeholder="Ingrese Nombre completo"
                            className="flex w-96  h-10 rounded-lg "
                            ref={nombreCompleto}
                            defaultValue={nombre}
                            />              
                    </div>

                    {/* Input Email */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  text-white">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                        <input type="Email" placeholder="Ingrese Email"
                            className="flex w-96  h-10 rounded-lg " 
                            ref={email}
                            />              
                    </div>
                   
                    {/* Input Direccion  */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm18 3H3.75v9a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9zm-15-3.75A.75.75 0 004.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H5.25zm1.5.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V6zm3-.75A.75.75 0 009 6v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H9.75z" clipRule="evenodd" />
                    </svg>
                        <input type="text" placeholder="Ingrese Direccion"
                            className="flex w-96  h-10 rounded-lg " 
                            ref={direccion} />              
                    </div>

                    {/* Input Telefono  */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                        <input type="tel" placeholder="Ingrese Telefono"
                            className="flex w-96  h-10 rounded-lg " 
                            ref={telefono}/>              
                    </div>         
                {/* fin  de input */}
                <div className="flex flex-row w-full h-full items-center  justify-center p- gap-5">

                    <input type="submit" className="flex text-xl w-56 h-16 font-bold items-center text-white 
                        bg-gradient-to-r from-indigo-500  to-cyan-400
                        rounded-2xl justify-center"   value={'Guardar'}/>
                            
                </div>  
            
            </div>

           </form>


      
        </div>       
     
    </div>














)
}
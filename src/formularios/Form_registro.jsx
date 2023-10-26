import { useRef, useState } from "react"
import { use_login } from "../hook/use_login"
import { useNavigate } from "react-router-dom"

export default function Form_registro(){ 
 
  const {registro} = use_login()
  const [mensajes,setmensajes] = useState()
  const [pass,setpass] = useState(0)
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

  const  validapass = (e)=>{
     if (pass===1){
      setpass(0);
     }
    else
    {
      setpass(e);
    }   
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
  
 <div className=" flex flex-row w-full h-full  bg-[rgb(34,37,42)]">
  
   <div className="flex flex-col w-5/6 h-screen   bg-white ">
     <img className="cover  w-full h-full object-cover " src="/boletas_img/pro/pro1.jpg" alt="" />
   </div>
     <div className="flex flex-col w-auto h-full gap-5 pl-4  items-center justify-center">
        <div className="flex flex-col w-full h-full gap-4  pl-1 rounded-xl items-center justify-center
          ">
           <img className="flex flex-row w-auto h-32"    src="/logos/log_1.png" alt="logo Duro herrajes"  />    
        </div>
        <div className=" flex w-auto h-full">
           <form className="flex flex-col w-full h-full items-center justify-center p-1" onSubmit={submitt}>
                     <div className="flex flex-col w-full h-full items-center p-4 gap-3">

                {/* Input Nombre */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className="w-6 h-6  text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg>

                        <input type="text" placeholder="Ingrese Usuario"
                            id="usuario"
                            name="usuario"
                            autoComplete="usuario"
                            required
                            className="flex w-96  h-10 rounded-lg "
                            ref={usuario}
                           />              
                    </div>

                    {/* Input Email */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  text-white">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                        <input type="Email" placeholder="Ingrese Email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="flex w-96  h-10 rounded-lg " 
                            ref={email}
                            />              
                    </div>
          
                    {/* Input contraseña  */}
                    <div className="flex flex-row items-center gap-3 w-full h-full">
                      <div className="flex flex-row items-center "
                       onClick={()=>validapass(1)}
                      >

                     {pass===0?
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                      </svg>
                      :                       
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"
                    >
                         <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                      </svg>
                                  
                                
                       }

                      </div>
                      {pass===0?
                        <input type="password" placeholder="Ingrese password"
                             id="password"
                             name="password"
                             autoComplete="current-password"
                             required
                            className="flex w-96  h-10 rounded-lg " 
                            ref={password}/>    
                            :
                            <input type="text" placeholder="Ingrese password"
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            required
                           className="flex w-96  h-10 rounded-lg " 
                           ref={password}/>  

                      }   
                            

                    </div>  
                        {/* Input Telefono  */}
                        <div className="flex flex-row items-center gap-3 w-full h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ">
                          <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>

                        <input type="tel" placeholder="Ingrese telefono"
                             id="telefono"
                             name="telefono"
                             autoComplete="current-telefono"
                             required
                            className="flex w-96  h-10 rounded-lg " 
                            ref={telefono}/>              
                    </div>  
                   {/* fin  de input */}
                    </div>        
                

                   {/*<!-- modal footer -->*/}
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                 
                 <input type="submit" className="flex text-xl w-56 h-16 font-bold items-center text-white 
                         bg-gradient-to-r from-indigo-500  to-cyan-400
                         rounded-2xl justify-center"   value={'Guardar'}/> 
             </div>
          </form>  
        </div>

         
          
    </div>

  </div>
               

)
}
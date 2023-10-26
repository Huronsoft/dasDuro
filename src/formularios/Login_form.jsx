import { Link } from "react-router-dom";
import Encabezado from "../compent/Encabezado";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { use_validalogin } from "../hook/use_validalogin";


export default function Login_form(){ 

  const {validalogin} = use_validalogin()
  const [mensajes,setmensajes] = useState()
  const [pass,setpass] = useState(0)
  const navigate = useNavigate()
  const email = useRef ()
  const password  = useRef ()

  if (mensajes){

   if(mensajes?.response?.data?.errors?.password){
    alert(mensajes?.response?.data?.errors?.password[0])
   }   
   if(mensajes?.id){
    alert('fue creado con exito')
     if (mensajes.rol === 2){
       navigate('Basic')
     }
     else{
      navigate('dashboard')
     }
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
        email: email.current.value,
        password: password.current.value,
       
      }
      validalogin(data,setmensajes); 

    };
return (
 
  <div>
       <Encabezado/>

      <div className="grid place-items-center h-screen w-full overflow-hidden bg-[rgb(34,37,42)] ">    
      
       <div className="flex flex-col rounded-xl border-1
         border-[rgb(139,143,148)] 
         bg-[rgb(40,43,47)] 
          w-96 h-screnn
          overflow-hidden
          text-[rgb(139,143,148)] font-bold items-center">

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">       
        <div className="flex flex-col w-full h-full gap-4  pl-3 rounded-xl items-center justify-center
          ">
           <img className="flex flex-row w-auto h-auto"    src="/logos/log_1.png" alt="logo Duro herrajes"  />    
        </div>
         
        </div>
       
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-[rgb(139,143,148)]">
          <form className="space-y-6" onSubmit={submitt}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email 
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[rgb(139,143,148)]">
                <label htmlFor="password" className="block text-sm font-medium leading-6">
                  Contraseña
                </label>
                <div className="text-sm"
                 onClick={()=>validapass(1)}>
                 {pass===0?
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                      </svg>
                      :                       
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">                    
                         <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                        <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
                      </svg>                                      
                  }
                </div>
              </div>
              <div className="mt-2">
              {pass===0?
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={password}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               :
               <input
               id="password"
               name="password"
               type="text"
               autoComplete="current-password"
               required
               ref={password}
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
              placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             />
              }
              </div>
            </div>

            <div>
              <input
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6
                 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-indigo-600"
                 value={'Iniciar'}/> 
              </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          No es un miembro?{' '}
            <Link to="/registro" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Registrate
            </Link>
          </p>
        </div>
      </div>
         </div>


        </div>

   </div>







)

}
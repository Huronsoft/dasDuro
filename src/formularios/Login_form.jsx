import { Link } from "react-router-dom";
import Encabezado from "../compent/Encabezado";
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { use_validalogin } from "../hook/use_validalogin";


export default function Login_form(){ 

  const {validalogin} = use_validalogin()
  const [mensajes,setmensajes] = useState()
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
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
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
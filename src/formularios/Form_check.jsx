export default function form_check(){ 
return (


    <div className="flex flex-col w-full h-screen overflow-hidden">
    <form className="flex flex-row w-full - h-full">    
     <div className="flex flex-col h-full w-4/6  items-center justify-center">
        {/* contenedor segundario datos car   */}
        <div className="flex flex-col w-5/6  h-5/6 gap-3 p-2  bg-gray-200 ">
            {/* contenedor principal datos car   */}
            <div className="flex flex-col w-full h-full p-2 gap-2  ">
                  
                  {/* Input Nombre */}
                  <div className="flex flex-col p-2 gap-4 w-full h-full">
                    <label className="flex text-lg text-black font-semibold ">Nombre de tarjeta</label>
                    <input type="text" placeholder=" Ingrese Nombre Tarjeta"
                            id="usuario"
                            name="usuario"
                            autoComplete="usuario"
                            required
                            className="flex w-4/6  h-10 rounded-lg "
                            //ref={usuario}
                           /> 

                      <div className=" flex border-y-2 border-gray-300"></div>  
                    
                     </div>

                    {/* Input imagen tarjetas */}
                    <div className="flex flex-col w-4/6 h-96 bg-gray-300">
                    <img className="flex flex-row w-auto h-32"    src="/logos/pago.png" />    

                    </div>
                       {/* Input tarjeta */}
                      <div className="flex flex-row gap-5 w-full h-full">

                        <input type="card" placeholder=" Ingrese numero de tarjeta"
                              id="card"
                              name="usuario"
                              autoComplete="usuario"
                              required
                              className="flex w-4/6  h-10 rounded-lg "
                              //ref={usuario}
                            />                         
                        </div>

                    {/* Input fecha y cvc */}
                    <div className="flex flex-row gap-5 w-full h-full">

                      <input type="fecha" placeholder=" Fecha de vencimiento (MM/YY)"
                            id="fecha"
                            name="fecha"
                            autoComplete="fecha"
                            required
                            className="flex w-96  h-10 rounded-lg "
                            //ref={usuario}
                           />  
                      <input type="text" placeholder=" CVC"
                            id="cv"
                            name="cv"
                            autoComplete="cv"
                            required
                            className="flex w-32 h-10 rounded-lg "
                            //ref={usuario}
                           />     

                    </div>
                   {/* Input Direccion */}
                  <div className="flex flex-col w-full h-full">
                  <label className="flex text-lg text-black font-semibold ">Direccion</label>
                    <input type="direccion" placeholder="  Ingrese direccion"
                            id="direccion"
                            name="direccion"
                            autoComplete="direccion"
                            required
                            className="flex w-4/6  h-10 rounded-lg "
                            //ref={usuario}
                           />                                 
                    </div>
                   {/* Input telefono */}
                   <div className="flex flex-col w-full h-full">
                   <label className="flex text-lg text-black font-semibold ">Telefono</label>
                    <input type="telefono" placeholder="  Ingrese telefono"
                            id="telefono"
                            name="telefono"
                            autoComplete="telefono"
                            required
                            className="flex w-4/6  h-10 rounded-lg "
                            //ref={usuario}
                           />          
                    </div>
          </div>  
       </div>
    </div>

        <div className="flex flex-col h-full w-1/3 items-center justify-center">

              {/* contenedor input datos resumen de pago    */}
             <div className="flex flex-col w-5/6 h-5/6  gap-1 p-2 bg-gray-200">

                    <div className="flex flex-col w-full h-full  ">
                        <div className="flex flex-col gap-4 ">
                            <label className="flex text-xl text-gray-400 font-semibold ">Resumen de pago</label>
                            <div className=" flex border-y-2 border-gray-300"></div>             
                            </div>
                            <label className="flex text-2xl  text-gray-500 font-semibold justify-end">X3</label>   
                            <label className="flex text-2xl  text-gray-500 font-semibold justify-end">2000</label> 
                            <div className=" flex border-y-2 border-gray-300"></div>     
                            <div className="flex flex-row justify-between p-3">                                
                                <label className="flex text-3xl  text-gray-500 font-semibold justify-end">Pagas</label>
                                <label className="flex text-3xl  text-gray-500 font-semibold justify-end">6000</label>          
                           </div>                                                
                        </div>
                       <input type="submit" className="flex text-xl w-full h-32 font-bold items-center text-white 
                         bg-gradient-to-r from-indigo-500  to-cyan-400
                         rounded-2xl justify-center"   value={'Pagar'}/>     


                        </div>

            
       </div>
     </form>
   </div>
)
}
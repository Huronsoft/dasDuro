import Esquema_rpro from "./compent/Esquema_rpro";
import Navbar from "./compent/Navbar";

export default function Pro_rifa(){ 
return (

  <div className="flex flex-col w-full h-full bg-white ">
    <Navbar/>
     {/* Esto viene de componente Esquema_rpro   */}
  <Esquema_rpro/>   
                {/* Panel de detalle   */}
    <div className="flex flex-col items-center w-full h-full justify-center" >       
       <div className="flex flex-row w-full p-3 items-center justify-center  h-full bg-white">      

        <div className="flex flex-col w-5/6 h-full p-3 gap-1 text-white font-bold text-lg ">
            {/*aqui codigo prestaña detalle  */}
            <div className="border-b border-gray-200 dark:border-gray-700">
            <ul clasclassNames="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
               <li className="mr-2">
                     <a href="#" className="inline-flex items-center justify-center p-4 text-xl text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                        <svg className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                           <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                        </svg>Detalle
                     </a>
               </li>     
               </ul>
            </div>                        
           
               <p className="flex text-lg text-black font-bold bg-slate-200 rounded-lg justify-center p-1 gap-2 ">
                ¡Participa en nuestra emocionante rifa y ten la oportunidad de ganar una espectacular moto V-Strom 650 ABS, completamente equipada con todos los accesorios que necesitas para disfrutar al máximo de tus aventuras en carretera! Esta es tu ocasión de convertirte en el afortunado propietario de una moto diseñada para la aventura y la libertad.
                  La V-Strom 650 ABS es la compañera perfecta para explorar nuevos horizontes, ya sea en largos viajes por carretera o en emocionantes escapadas fuera de la ciudad. Sus características de seguridad, como el sistema de frenos ABS, te brindarán la tranquilidad que necesitas mientras recorres kilómetros y kilómetros de paisajes impresionantes.
                  Pero eso no es todo, porque también te entregaremos todos los accesorios necesarios para que personalices tu moto a tu gusto y la adaptes a tus necesidades. Desde maletas y soportes para equipaje hasta protectores y otros detalles que harán que tu V-Strom 650 ABS sea única.

                  ¿Cómo participar en esta emocionante rifa? Es fácil. Solo sigue estos pasos:

                  Adquiere tus boletos de rifa en línea o en nuestro punto de venta autorizado.
                  Completa tus datos de contacto en el boleto.
                  Cruza los dedos y espera al sorteo, donde podrías convertirte en el orgulloso dueño de esta moto de ensueño y todos sus accesorios.
                  No pierdas la oportunidad de vivir la emoción de tener una V-Strom 650 ABS y la libertad de explorar nuevos caminos. ¡Compra tus boletos de rifa ahora y prepárate para un viaje inolvidable!

                </p>      

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
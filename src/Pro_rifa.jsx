import Esquema_rpro from "./compent/Esquema_rpro";
import Navbar from "./compent/Navbar";

export default function Pro_rifa(){ 
return (

  <div className="flex flex-col w-full h-full  bg-[rgb(15,2,50)]  ">
    <Navbar/>
     {/* Esto viene de componente Esquema_rpro   */}
  <Esquema_rpro/>   
                {/* Panel de detalle   */}
    <div className="flex flex-col items-center w-full h-full justify-center" >
         
          <button className="flex flex-col w-48 h-16 rounded-xl 
           bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... 
           text-center text-xl font-bold text-white justify-center items-center  ">
            DETALLES 
          </button>    
       <div className="flex flex-row w-full p-3 items-center justify-center  h-full bg-[rgb(15,2,50)]">
      

        <div className="flex flex-col w-5/6 h-full p-3 gap-3 text-white font-bold text-lg ">

          <p className=" flex text-xl"> Descripción general </p>

           <p className=" flex text-xl items-center w-full h-full justify-items-center"> 
           🔥 ¡Prepárate para la aventura definitiva! 🔥</p>


           <p>  ¿Sientes la emoción de cabalgar en una VStrom 650 XT 2014? 🏍️ ¡Ahora puedes hacerlo realidad! Estamos rifando esta 
                 joya del mundo de las motos, equipada con todos los accesorios de tus sueños. 😍 </p>

            <p> ✨ Accesorios incluidos:</p>
            <p>🧳Maleteros laterales marca Koju</p>
            <p>🎒 Maletero principal marca Givi</p>
            <p> 💡 Juego de 6 exploradoras para iluminar tus caminos</p>
            <p> 🌟 Tank bag marca Givi para llevar tus objetos de valor</p>
            <p> 🚿 ¡Incluso incluye jabones marca Givi para mantenerla reluciente!</p>
            <p> 🏁 Llantas Metzeler para un agarre excepcional</p>
            <p> 🌐 GPS incorporado para que nunca te pierdas</p>
            <p>🔧 Mantenimiento preventivo al día</p>
            <p>📜 Soat y tecnomecánica vigentes</p>
            <p>🌟 ¡Y solo 102,000 kilómetros de pura emoción!</p>

            <p> ¿Listo para ser el afortunado dueño de esta belleza sobre ruedas? </p>
            <p> 🌟 Participa en nuestra rifa y lleva esta VStrom 650 XT a tu garaje. 🏆</p>

            <p>🎟️ ¡Compra tu boleto ahora y aumenta tus posibilidades de ganar 
            esta moto de alto cilindraje y accesorios de ensueño! 🎟️</p>

            <p> 📅 Fecha del sorteo: [Inserta la fecha del sorteo]</p>

            <p>¡No pierdas esta oportunidad única de vivir la emoción en cada kilómetro recorrido!</p>
 
            <p>🛣️🌟 Participa y comparte la noticia con tus amigos. ¡La aventura te espera! 🌍🏍️ #DuroHerrahes </p>

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
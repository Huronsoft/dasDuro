import Banner_aliodos from "./compent/Banner_aliados";
import Banner_print from "./compent/Banner_print";
import Navbarland from "./compent/NarvarLand";
import PanelRifas from "./compent/PanelRifas";
import Footer from "./compent/footer";

export default function Landing(){ 

return (

   <div className="flex flex-col w-full h-auto overflow-auto bg-white">

     <Navbarland/>
     <Banner_print/>

     <div className="flex flex-row w-full h-auto p-8 bg-[rgb(248,249,250)] " onFocus={()=>alert('hola')}>
       <PanelRifas/>
     </div>
     <Banner_aliodos/>
      <Footer/>




   </div>







)
}
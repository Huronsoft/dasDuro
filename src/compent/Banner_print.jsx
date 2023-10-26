import 'animate.css';
export default function Banner_print(){ 
return (
  <div className="flex flex-row w-full h-4/5 bg-slate-700 border-2 border-spacing-7 mt-48">

     <div className=" flex flex-col w-3/6 h-full p-3 bg-[rgb(248,249,250)] ">
       <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_1.jpg" alt="" />
     </div>

     <div className=" flex flex-col w-3/6 h-full p-3 bg-[rgb(248,249,250)]  ">
       <img className="cover rounded-xl w-full h-full object-cover" src="/boletas_img/basic/bas_1.jpg" alt="" />

     </div>

     <div className=" flex flex-col w-3/6 h-full p-3 bg-[rgb(248,249,250)] ">
       <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_1.jpg" alt="" />

     </div>
  </div>
)
}
export default function Banner_aliodos(){ 
return (

    <div className=" flex flex-row w-full h-96 p-8 gap-4 bg-[rgb(248,249,250)]  ">

       <div className="flex flex-row w-full h-72  ">
         

         <div className="flex flex-col w-96 h-full p-4 justify-center ">
            <img className="cover rounded-xl w-full h-full object-cover " src="/logos/logkoju.jpg" alt="" />
         </div>
         <div className="flex flex-col w-96 h-full p-4 ">
         <img className="cover rounded-xl w-full h-full object-cover " src="/logos/fplogo.png" alt="" />

         </div>

         <div className="flex flex-col w-96 h-full p-4 ">
            <img className="cover rounded-xl w-full h-full object-cover " src="/logos/givilogo.png" alt="" />

         </div>
         <div className="flex flex-col w-96 h-full p-4 ">
           <img className="cover rounded-xl w-full h-full object-cover " src="/logos/osram.png" alt="" />

         </div> 

         <div className="flex flex-col w-96 h-full p-4">
           <img className="cover rounded-xl w-full h-full object-cover " src="/logos/aozoom.png" alt="" />

         </div> 


       </div>


    </div>






)
}
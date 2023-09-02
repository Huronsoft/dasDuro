export default function Scroll_num(){ 
return (
   <div className=" flex w-36 h-12 p-1 rounded-2xl items-center justify-center
     border-2 border-[rgb(41,27,81)]">
            <div className=" flex flex-col w-10 h-hidden  ">  
                   <button className="flex rounded-full bg-[rgb(90,75,204)] w-8 h-8 text-center justify-center
                    text-white text-2xl  items-center font-bold               
                   "                  
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                     <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                    </svg>

                    </button>
       
             </div>
           <div className=" flex flex-col w-full h-full justify-stard items-center  ">
                        
                        <div className="flex flex-col  w-full h-full rounded-xl 
                        text-center  justify-center items-center 
                        text-white text-2xl font-bold                        
                        ">
                        <p>1</p>
                      </div>
                      {/* fin  contenedor  imagenenes*/}
            </div>  
            <div className=" flex flex-col w-10  h-hidden item-center justify-center  ">  
                   <button className="flex rounded-full bg-[rgb(90,75,204)] w-8 h-8
                    text-center justify-center items-center
                    text-white text-2xl font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                   <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                  </svg>

            </button>
       
        </div>
        
   </div>
)
}
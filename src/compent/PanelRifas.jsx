export default function PanelRifas(){ 
return (
  <div className="flex flex-col w-72 h-auto p-2 rounded-lg   bg-white    border-2 border-white  items-center justify-between  
  hover:shadow-xl hover:shadow-slate-400 ">
             <label  className="Flex text-xl font-extrabold text-[rgb(146,144,144)] ">Rifa # 45</label>
         <div className="flex flex-col w-full h-3/4 p-2 rounded-lg ">
            <div className="flex flex-col w-full h-72 rounded-lg bg-white">      
                <img className="cover rounded-xl w-full h-full object-cover " src="/boletas_img/basic/bas_1.jpg" alt="" />        
             </div>
         </div>
       <div className="flex flex-col w-full h-auto rounded-lg  p-2 gap-2 ">
             <label  className="Flex text-xl font-normal text-[rgb(146,144,144)] ">Vstrom 650 ABS Full-Equipada</label>
       </div>
       <div className="flex flex-col w-full h-auto rounded-lg  ">
             <label  className="Flex text-lg font-normal text-[rgb(146,144,144)] ">Fecha Inicio : 12/09/2023</label>
       </div>
       <div className="flex flex-col w-full h-auto rounded-lg animate-pulse justify-center  ">
             <label  className="Flex text-lg font-bold text-[rgb(159,247,108)] ">Fecha Fin : 29/09/2023</label>
       </div>
      <div className="flex flex-row w-full h-auto items-center justify-between p-2 ">
         <div className="flex flex-row w-full">
            <label className="flex text-xl font-bold text-red-600">$ 30.000</label>
         </div>        
           <div className="flex w-24 h-16  rounded-2xl hover:bg-[rgb(215,0,24)] shadow-lg shadow-slate-200 justify-center items-center bg-[rgb(233,236,239)] ">       
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-white text-gray-500    ">
           <path fill-rule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
           </svg>
        </div>   
      </div>
  </div>
)
}
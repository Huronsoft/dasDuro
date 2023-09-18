export default function Das(){ 

return (
    <div className="w-full h-full bg-green-500 text-2xl text-white overflow-auto ">
        <h1>Aqui van los reportes </h1>
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <img src="/boletas_img/fondos/boder2.png" alt="" loading="lazy"/>
  </div>
  <div class="col-start-3">
    <img src="/boletas_img/fondos/boder2.png" alt="" loading="lazy"/>
  </div>
  <div>
    <img src="/boletas_img/fondos/boder2.png" alt="" loading="lazy"/>
  </div>
  <div>
    <img src="/boletas_img/fondos/boder2.png" alt="" loading="lazy"/>
  </div>
  <div class="row-start-1 col-start-2 col-span-2">
    <img src="/boletas_img/fondos/boder2.png" alt="" loading="lazy"/>
  </div>
</div>




   
<div className="mt-10 grid grid-cols sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" 
            class="block w-full rounded-md border-0 py-1.5
             text-gray-900 shadow-sm ring-1 ring-inset
              ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-indigo-600 
              sm:text-sm sm:leading-6"/>
          </div>

          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" 
            class="block w-full rounded-md border-0 py-1.5
             text-gray-900 shadow-sm ring-1 ring-inset
              ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-indigo-600 
              sm:text-sm sm:leading-6"/>
          </div>
       </div>   
     </div>
   
     <div className=" flex flex-row w-full h-full justify-center items-center">

<div className="flex flex-col w-full h-full ">
   <label For="first-name" className=" block text-lg font-bold   text-white"> Nombre </label>
   <input type="text" name="first-name" id="first-name" autocomplete="given-name" 
   className="block w-full rounded-md border-0 py-1.5
    text-gray-900 shadow-sm ring-1 ring-inset
     ring-gray-300 placeholder:text-gray-400 
     focus:ring-2 focus:ring-inset focus:ring-indigo-600 
     sm:text-sm sm:leading-6"/>
</div>




</div>

       
    </div>
)
}
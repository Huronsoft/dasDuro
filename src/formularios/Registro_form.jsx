export default function Registro_form(){ 
return (
 <div>
    <form className="flex flex-col items-center pe-5 justify-between bg-[rgb(34,37,42)] text-cyan-500 ">
         
  <div className="mt-6 flex items-center justify-between gap-x-4">
    <button type="button" className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      Cancel
    </button>
    <button
      type="submit"
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Guardar
    </button>
  </div>
</form>
</div>
)
}
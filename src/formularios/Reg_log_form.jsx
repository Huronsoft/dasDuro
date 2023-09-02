export default function Reg_log_form(){ 
    return (
     <div>
        <form className="flex flex-col items-center justify-between h-full bg-[rgb(34,37,42)] text-cyan-500 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h5 className="flex flex-col text-xl font-bold leading-7 text-orange-600 items-center">REGISTRO DE USUARIO</h5>
          <p className="mt-1 flex flex-col items-center text-sm leading-6 text-gray-600">Use este formulario para el registro de un nuevo Usuario</p>
    
          <div className="mt-10 grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-3">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 ">
                Apellidos
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
    
            <div className="sm:col-span-4">
              <label htmlFor="Password" className="block text-sm font-medium leading-6">
                Contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
    
            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6">
                Telefono
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Telefono"
                  id="Telefono"
                  autoComplete="Telefono"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
                  <input
                    id="admin_ctrl"
                    name="admin"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="admin-control" className="block text-sm font-medium leading-6">
                    Administrador
                  </label>

                  <input
                    id="Auxiliar_ctrl"
                    name="Aux"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Axiliar-control" className="block text-sm font-medium leading-6">
                    Auxiliar
                  </label>

                  <input
                    id="Consultor_ctrl"
                    name="Consult"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="Consultor-control" className="block text-sm font-medium leading-6">
                    Consultor
                  </label>

        </div>
            
    
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
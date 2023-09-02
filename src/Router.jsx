import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Rifa from './Rifa'
import Das from './Das'
import Clientes from './Clientes'
import Conf from './config_money/Conf'
import Contacto from './Contacto'
import Estadistica from './Estadisticas'
import Perfil from './Perfil'
import Home from './Home'
import Pro_rifa from './Pro_rifa'
import Scroll_num from './compent/Sroll_num'
import Basic_rnew from './Basic_rnew'


 const router = createBrowserRouter(
    [    
        {
            path:'/',
            element: <App/>,
            children:[{
                          path:'/dashboard',
                          element:<Das/>
                      },
                      {
                        path:'/Perfil',
                        element:<Perfil/>
                      },          
                      {
                          path:'/rifas',
                          element:<Rifa/>
                      },
                      {
                        path:'/Config',
                        element:<Conf/>
                      },
                      {
                        path:'/Home',
                        element:<Home/>
                      },
                      {
                        path:'/clientes',
                        element:<Clientes/>
                      },
                      {
                        path:'/estadis',
                        element:<Estadistica/>
                      },
                      {
                        path:'/contactanos',
                        element:<Contacto/>
                      },            
             ],        
        }, 
        {
          path:'/Basic',
          element: <Basic_rnew/>
        },
        {
          path:'/PRO',
          element: <Pro_rifa/>
        },
        {
          path:'/comp',
          element: <Scroll_num/>
        }
    ]

 )

 export default router
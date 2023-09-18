import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Das from './Das'
import Clientes from './Clientes'
import Conf from './config_money/Conf'
import Estadistica from './Estadisticas'
import Home from './Home'
import Pro_rifa from './Pro_rifa'
import Basic_rnew from './Basic_rnew'
import Login_form from './formularios/Login_form'
import Form_registro from './formularios/Form_registro'
import Form_check from './formularios/Form_check'
import Form_rifas from './formularios/Form_rifas'
import Rifa from './Rifa'
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
                        element:<Form_registro/>
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
                        element:<Clientes/>
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
          element: <Login_form/>
        },
        {
          path:'/registro',
          element: <Form_registro/>
        },
        {
          path:'/check',
          element: <Form_check/>
        },
        {
          path:'/frifa',
          element: <Form_rifas/>
        }
        
    ]

 )

 export default router
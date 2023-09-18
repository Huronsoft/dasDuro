import clienteAxios from "../config/axios"

export const use_login=()=>{
  
    const registro= async(datas,setmensajes)=>{

     try {
        const {data}= await clienteAxios.post('registro',datas)
        await setmensajes(data)
     } catch (error) {
       setmensajes(error)
     }


    }


  return {registro}  
}
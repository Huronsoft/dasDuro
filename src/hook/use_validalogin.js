import clienteAxios from "../config/axios"

export const use_validalogin=()=>{
  
    const validalogin= async(datas,setmensajes)=>{

     try {
        const {data}= await clienteAxios.post('validalogin',datas)
        await setmensajes(data)
     } catch (error) {
       setmensajes(error)
     }


    }


  return {validalogin}  
}
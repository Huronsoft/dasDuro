import clienteAxios from "../config/axios"

export const use_rifa=()=>{
  
    const registrorifa= async(datas,setmensajes)=>{

     try {
        const {data}= await clienteAxios.post('registrorifa',datas)
        await setmensajes(data)
     } catch (error) {
       setmensajes(error)
     }


    }


  return {registrorifa}  
}
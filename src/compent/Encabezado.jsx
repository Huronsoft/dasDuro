import { Link } from "react-router-dom";

export default function Encabezado(){ 
return (
   <div className="flex flex-row animate-pulse">
      <div className="flex flex-col col-6 bg-[rgb(252,60,95)] w-80 h-1">          
      </div>
      <div className="flex flex-col col-10 bg-[rgb(153,60,252)] w-80  h-1">               
      </div>
      <div className="flex flex-col col-10 bg-[rgb(60,169,252)] w-80  h-1">      
      </div>
      <div className="flex flex-col col-10 bg-[rgb(60,292,95)] w-72  h-1">               
      </div>
      <div className="flex flex-col col-10 bg-[rgb(252,223,60)] w-72  h-1">               
      </div>
   </div>
)
}
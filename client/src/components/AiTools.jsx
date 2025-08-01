import React from 'react'
import { AiToolsData } from '../assets/assets'
import {useUser} from '@clerk/clerk-react'
import {useNavigate} from 'react-router-dom'
import Prop from './Prop.jsx';

function AiTools() {
  const {user}=useUser();
  const navigate=useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 ">
        <div className="text-center ">
            <h2 className="text-slate-700 text-[42px] font-semiblold "> Powerful AI Tools</h2>
            <p className="text-gray-500 mx-w-lg mx-auto ">Everything you need to create, enhance, and optimize your content with cutting-edge AI technology. </p>

        </div>
        <div className="flex flex-wrap mt-10 justify-center">
        {
          AiToolsData.map((tool,index)=>(
           
            <Prop 
            title={tool.title}  path={tool.path} description={tool.description} Icon={tool.Icon} bg={tool.bg} key={index}
            //tool={tool} key={index}
             />
              
              
              
              


            // </div>
          ))
        }
        </div>
       
      
    </div>
  )
}

export default AiTools
 // <div key={index} className="p-8 m-4 max-w-xs rounded-lg bg-[#fdfdfe] shadow-lg-border border-gray-100 hover:translate-y-1 transition-all duration-300 cursor-pointer"
            // onClick={()=>user&&navigate(tool.path)}>
            //   <tool.Icon className="w-12 h-12 p-3 rounded-xl" style={{background:`linear-gradient(to bottom ,${tool.bg.from},${tool.bg.to})`}}/>
            //   <h3 className="wt-6 mb-3 text-lg font-semibold ">{tool.title}</h3>
            //   <p className="text-gray-400 text-sm max-w-[95%]">{tool.description}</p>

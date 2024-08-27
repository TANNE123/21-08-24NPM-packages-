import { FaDownload } from "react-icons/fa";

import { DiAngularSimple } from "react-icons/di";


export const IconsComponent=({width,height})=>{
  return(<>
    <FaDownload style={ {width:width, height:height}}/>

    <DiAngularSimple style={ {width:width, height:height}}/>

    </>
  )
}


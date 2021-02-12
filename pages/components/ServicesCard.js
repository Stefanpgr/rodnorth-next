import { useState } from "react";

const Services = ({text, summary}) => {
    const [readMore,setReadMore]=useState(false);

  
 
    return ( 
       <>
         {!readMore ? <p className="card-text">{summary}...<span onClick={()=> setReadMore(true)}>Show More</span></p> :
            <p className="card-text">
             {text} <br/> <span onClick={()=> setReadMore(false)} >Show less</span>
            </p>}
      
       </>
     );
}
 
export default Services;
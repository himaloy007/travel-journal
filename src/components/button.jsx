import { useNavigate } from 'react-router-dom';
import React from 'react';


export default function Button(props){
    const navigate = useNavigate();
    return(
           <button className="add" type="button" onClick={()=>navigate(props.route)}>
                    <img src={props.image} alt={props.title} className="add-more"/>                       
                         <small>{props.title}</small>
                    </button>
    )
}



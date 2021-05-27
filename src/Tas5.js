import React, { useEffect, useState } from 'react';

const Tas5 = () => {
    const [arr2,setArr2]=useState([])
    const dictionary=[
        {id:4,"name":"abc"},
        {id:10,"name":"abc2"},
        {id:5,"name":"abc3"},
        {id:6,"name":"abc5"},
        {id:1,"name":"abc1"},
    ]

    useEffect(()=>{
    const res = dictionary.sort((a,b)=>{
        return(
         (a.id)-(b.id)
        )
    
    })
   setArr2(res);
   
    },[])

    return (
        <div>
            <h1>Task 5 Sorting Objuect</h1>
            {
                arr2.map((id)=>{
                    return(
                        <li>{id.id}{id.name}</li>
                        
                    )
                })
            }
        </div>
    );
};

export default Tas5;
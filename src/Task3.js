import React, { useEffect, useState } from 'react';

const Task3 = () => {

    const [arr2,setArr2]=useState([])

   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5,11, 14, 12, 17, 13];


    useEffect(()=>{
        let repeated=arr.filter((ele,index)=>{
            return(
                 arr.indexOf(ele) !==index
            )
          
        })
        setArr2((repeated))
    },[])
    return (
        <div>
            <h1>Task 3 of Repeating Element Of Array</h1>
            <h4>List Of Array:-{arr}</h4>
            <h3>output of repeated Element:-{arr2}</h3>
        </div>
    );
};

export default Task3;
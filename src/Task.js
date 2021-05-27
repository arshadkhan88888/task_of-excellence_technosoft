import React, { useEffect, useState } from 'react';

const Task = () => {
const [arr1,setArr1]=useState([])
const [arr2,setArr2]=useState([])
    const arr = [1, 2, 3, 4, 5,5, 6, 7, 8, 9, 11, 14, 12, 17, 13];
    

    useEffect(()=>{
        let evenOutput = arr.filter(number => number % 2 === 0);
        setArr1(evenOutput)


        
       
    },[])
    return (
        <div>
            <h1>Task 1 of Array</h1>
            <h5>Complete Array:-{arr}</h5>
            <h4>Output of Even No:-{arr1 +","}</h4>
            <h5>{arr2}</h5>
        </div>
    );
};

export default Task;
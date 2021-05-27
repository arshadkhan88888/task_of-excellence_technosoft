import React, { useEffect, useState } from 'react';

const Task2 = () => {
    const [arr1,setArr1]=useState([])
    const [arr2,setArr2]=useState([])

    let count = 0; 
    let result = 0;
    let result1 = 0;

    let arr=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
    let array=[1,0,0,0,0,1,0,0,0,1];


    
    
    useEffect(()=>{
       
        for (let i = 0; i < arr.length ; i++) 

        { 
            if (arr[i] == false) 
    
                count = 0; 
    
            else{ 
    
                count++;
    
                result = Math.max(result, count); 
    
            } 
          
        } 
    
        setArr1(result)

        for (let j = 0; j < array.length ; j++) 

        { 
            if (array[j] == false) 
    
                count = 0; 
    
            else{ 
    
                count++;
    
                result1 = Math.max(result1, count); 
    
            } 
          
        } 
    
        setArr2(result1)

            },[])


    return (
        <div>
            <h1>Task 2 Of Consecutive</h1><br/>
            <h4>Consecutive Array 1:-{arr}</h4>
            <h3>Consecutive Output 1:- {arr1}</h3><br/>
            <h4>Consecutive Array 2:-{array}</h4>
            <h3>Consecutive Output 2:- {arr2}</h3>
        </div>
    );
};

export default Task2;
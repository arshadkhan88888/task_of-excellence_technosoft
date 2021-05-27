import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Task4 = () => {

    const [getReq,setGetReq]=useState([])

    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/typicode/demo/posts")
        .then((res)=>{
            setGetReq(res.data);
        })
    })

    return (
        <div>
            <h1>Task 4 OF Api Integration</h1>
            <table className="table table-bordered table-info">
            <thead>
            <tr>
            <th>ID</th>
            <th>TITLE</th>
            </tr>
            </thead>
            <tbody>
            {
                getReq.map((list)=>
                <tr key={list.id}>
                <td>{list["id"]}</td>
                <td>{list["title"]}</td>
                </tr>
                )
            }
            </tbody>
            </table>
        </div>
    );
};

export default Task4;
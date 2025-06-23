import React, { useState } from "react";

export default function AddStudent({StudentArray}) {
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(0);
  const [Marks, setMarks] = useState(0);
  return (
    <div>
      <div className="card">
        <h2>➕ Add Student</h2>
        <form onSubmit={function(e){
              e.preventDefault();
              

              StudentArray((pre)=>{
                  return [...pre,{
                studName:Name,
                studAge:Age,
                studMark:Marks
            }]        
              })
            
               setAge(""); 
               setMarks("");
               setName("");
            //  console.log(StudentArray) 
              
        }}>

          <input
            type="number"
            placeholder="Age"
            value={Age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Marks"
            value={Marks}
            onChange={(e) => {
              setMarks(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";

export default function StudentList({ stud }) {
  console.log(stud);
  return (
    <div className="student-list">
      <h2>📋 Student List</h2>
         <div className="Head">
      {
        stud.length==0?(<h3>No student ? Are Exiset.....</h3>):(
        stud.map((studentDetail,idx)=>(
          
            <div className="student-item " key={idx}>
        <span>
          <strong>{studentDetail.studName}</strong>
        </span>
        <span>Age: {studentDetail.studAge}</span>
        <span>Marks: {studentDetail.studMark}</span>
      </div>
        ))
     ) }
     </div>
      
    </div>
  );
}

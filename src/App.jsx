import { useState } from "react";
import "./App.css";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import Stats from "./components/Stats";
const App = () => {
  const [StudentArray, setStudentArray] = useState([]);
  console.log(StudentArray);
  return (
    <div className="hole">
      <h1>Student Performance Tracker 🎓</h1>
      <AddStudent StudentArray={setStudentArray} />

      <StudentList stud={StudentArray} />
      <Stats state={StudentArray} />
    </div>
  );
};

export default App;

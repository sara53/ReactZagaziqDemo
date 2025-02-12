import { useState } from "react"
import { Login } from "./components/Login"
import { StudentForm } from "./components/StudentForm"
import { StudentTable } from "./components/StudentTable"


function App() {



  let [ studentList, setStudentList ] = useState( [] )
  // 
  return (
    <div className="container mt-5">
      <StudentForm studentList={studentList} setStudentList={setStudentList} />

      <StudentTable studentList={studentList} />
    </div>
  )
}

export default App

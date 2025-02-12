import { useState } from "react"
import { Counter } from "./components/Counter"
import { Login } from "./components/Login"
import UserProfile from "./components/UserProfile"


function App() {

  let [ tempUser, setTempUser ] = useState( "" )

  let getData = ( x ) => {
    setTempUser( x )
  }


  return (
    <div className="container mt-5 bg-light p-5 rounded">
      <h1>App Component</h1>
      <p className="lead fs-2 mt-4">your  username : <strong>{tempUser}</strong></p>
      <UserProfile getData={getData} />

    </div>
  )
}

export default App

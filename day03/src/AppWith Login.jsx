import { useState } from "react"
import { Login } from "./components/Login"


function App() {


  const [ isLoggedIn, setIsLoggedIn ] = useState( false )

  const loginHandler = () => {
    setIsLoggedIn( true )
  }

  const logout = () => {
    setIsLoggedIn( false )
  }


  // 
  return (
    <div className="container mt-5">

      {console.log( "Render at App component" )}
      {
        !isLoggedIn &&
        <button onClick={loginHandler} className="btn btn-dark m-4">Login</button>
      }
      {/* parent to child */}
      {isLoggedIn && <Login logout={logout} />}
    </div>
  )
}

export default App

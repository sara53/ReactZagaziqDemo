import { Counter } from "./components/functionComponent/2 Counter with Function"
import { Navbar } from "./components/functionComponent/Navbar"
import { Products } from "./components/functionComponent/Products"

function App() {


  let trackDetails = {
    name: "Front",
    students: 16,
    bgColor: "bg-success"
  }
  return (
    <>
      <Products />
      {/* <Counter /> */}
      {/* props */}
      {/* <Navbar {...trackDetails} /> */}

    </>
  )
}

export default App


import { Counter } from "./components/ClassComponents/Counter"
import { Header } from "./components/ClassComponents/Header"

function App() {

  let name = "mona Ahmed"
  let title = "python track"

  let trackDetailsObj = {
    name: "Python",
    supervisorName: "Mona Ali",
    startedDate: "12 Oct",
    studentsNumbers: 26,
    bgColor: "bg-light"
  }
  return (
    <>

      <Header trackDetails={trackDetailsObj}>
        <p className="bg-info p-2 m-3 rounded">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate recusandae quos, voluptates autem reprehenderit animi, aut, tempore consequuntur saepe commodi neque officia doloribus alias quaerat quas! Possimus perspiciatis iusto error?</p>
        <p className="bg-danger p-2 m-3 rounded">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate recusandae quos, voluptates autem reprehenderit animi, aut, tempore consequuntur saepe commodi neque officia doloribus alias quaerat quas! Possimus perspiciatis iusto error?</p>
      </Header>

      {/* <Header trackDetails={trackDetailsObj} /> */}
      <Counter />
      <Header trackDetails={trackDetailsObj} />
      {/* <Header trackDetails={{ name: "Front Track", bgColor: "bg-dark" }} /> */}

      {/* <Header supervisorName={name} title={title} /> */}
      {/* <Header title="Front End Track" /> */}
    </>
  )
}

export default App
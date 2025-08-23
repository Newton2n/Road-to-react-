import Chai from './chai'



function App() {
  const date = new Date();// date cannot be direct expression in react var output
   const today = date.getDate()
  const name = "newton";

  return (
  <>
    <Chai />
   <h1>i am today date {today}</h1>
   </>
  )
}

export default App

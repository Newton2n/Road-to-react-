
import Login from "./components/login";
import Profile from "./components/Profile";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
function App() {


  return (
    <>
    <UserContextProvider>
      <div>
        <h1>Newton Dev</h1>
        <Login/>
        <Profile/>
      </div>
      </UserContextProvider>
    </>
  );
}

export default App;

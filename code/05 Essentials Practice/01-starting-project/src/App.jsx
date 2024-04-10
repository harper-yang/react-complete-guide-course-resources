import {UserInput} from "./components/UserInput.jsx";
import {Result} from "./components/Result.jsx";
import {Header} from "./components/Header.jsx";
import {useState} from "react";

function App() {

  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const handleInputChange = (key, value) => {
    setUserData((preUserData) => {
      const newUserData = {...preUserData};
      newUserData[key] = +value;
      return newUserData;
    })
  }

  return (
      <main>
        <Header/>
        <UserInput onInputChange={handleInputChange} inputData={userData}/>
        <Result userData={userData}/>
      </main>
  )
}

export default App

import { ChangeEvent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Record {
  Name: string | undefined;
  Age: number | undefined;
}

interface Data {
  [key: number]: Record;
}

function App() {
  const [record, setRecord] = useState<Record>({Name: '', Age: 0});
  const [userData, setUserData] = useState<Data>({});
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecord(input => ({
      ...input,
      [e.target.name]: e.target.value
    }));
  }
  const accept = () => {
    if (!record["Name"] || !record["Age"]) return alert("Please fill in all the fields");
    if (Object.values(userData).filter(data => data["Name"] === record["Name"]).length > 0) return alert("Record already exists");
    setUserData(data => ({
      ...data,
      [Math.floor(Date.now() / 1000)]: record
    }));
  }

  useEffect(() => {
    console.log(userData) 
  }, [userData])
  
  return (
    <main className="App">
      <h1>Practice list</h1>
      <div className="card">
        <input type="text" name="Name" key="Name" placeholder="Please enter name here" required onChange={handleInput} />
        <input type="number" name="Age" key="Age" placeholder="Please enter a valid age" required onChange={handleInput} />
        <p className='hint'>
          Add User with the btn below if filled in completely
        </p>
        <button onClick={accept}>
          Add User
        </button>
      </div>
    </main>
  )
}

export default App

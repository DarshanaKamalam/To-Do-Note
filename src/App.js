import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/card";
import Header from "./components/header";
import Todocontainer from "./components/todocontainer";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Landing from "./components/pages/landing";
import { useState } from "react";

function App() {
  const [users,setusers]=useState([
    {username:"John",password:"123"    }])
    
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
        <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
        <Route path='/Landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

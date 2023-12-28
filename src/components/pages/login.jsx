import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props)
{   
    const navigate = useNavigate()
    //getting user input
    const [eusername,seteusername]=useState()
    const [epassword,setepassword]=useState()
    //checking if the user is registered
    const [ruser,setruser]=useState(true)
    //getting user register array value from App.js
    const users=props.users

    function checkUser()
    {
        var userfound=false
        users.forEach(function(item)
        {
            if(item.username===eusername && item.password===epassword)
            {
                console.log("Login sucess")
                userfound=true
                navigate("/Landing",{state:{user:eusername}})
            }
        })
        if(userfound===false)
        {
            console.log("Login failed")
            setruser(false)
        }
    }
    function handleuinput(evt)
    {
        seteusername(evt.target.value)
    }
    function handlepinput(evt)
    {
        setepassword(evt.target.value)
    }
        
    return(
        <>
            <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser?<p>I help you to manage your acyivities after you login:)</p>:<p className="text-red-800 ">Please Signup before you login</p>}
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" 
                    className="w-52 border-black p-1 bg-tranparent border rounded-md" 
                    placeholder="username" onChange={handleuinput}/>
                    <input type="text" 
                    className="w-52 border-black p-1 bg-tranparent border rounded-md" 
                    placeholder="password" onChange={handlepinput}/>
                    <button className="bg-[#8272DA] w-24 p-1 border rounded-md" onClick={checkUser}>Login</button>
                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
                </div>

            </div>

        </div>
        </>
    )
}
export default Login

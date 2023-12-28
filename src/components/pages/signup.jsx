import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup(props) 
{
    const navigate = useNavigate()
    //getting user register array value from App.js
    const users = props.users
    const setusers = props.setusers
    //getting user input
    const [eusername, seteusername] = useState()
    const [epassword, setepassword] = useState()
    //get user values from inout
    function handleuinput(evt)
    {
        seteusername(evt.target.value)
    }
    function handlepinput(evt)
    {
        setepassword(evt.target.value)
    }
    //add input users 
    function adduser()
    {
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/" ,{state:{user:eusername}})
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Signup here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-tranparent border rounded-md"
                        placeholder="username" onChange={handleuinput} />
                    <input type="text"
                        className="w-52 border-black p-1 bg-tranparent border rounded-md"
                        placeholder="password" onChange={handlepinput} />
                    <input type="text"
                        className="w-52 border-black p-1 bg-tranparent border rounded-md"
                        placeholder="confirm password" />
                    <button className="bg-[#FCA201] w-24 p-1 border rounded-md" onClick={adduser}>Signup</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>

            </div>

        </div>
    )
}
export default Signup
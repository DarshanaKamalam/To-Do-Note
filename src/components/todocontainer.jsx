import { useState } from "react"
import Addtodoform from "./addtodoform"
import Todolist from "./todolist"

function Todocontainer()
{   
    const [activityArr,setActivityArr]= useState ([
        {id:1, activity:"Go for a walk"},
        {id:2, activity:"Have a breakfast"}
    ])
    return(
        <div>
            <div className="flex gap-5 flex-wrap" >
                <Addtodoform activityArr={activityArr} setActivityArr={setActivityArr} />
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr} />
            </div>
        </div>
        
    )
}
export default Todocontainer
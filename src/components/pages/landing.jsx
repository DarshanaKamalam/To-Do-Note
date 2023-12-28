import Card from "../card";
import Header from "../header";
import Todocontainer from "../todocontainer";

import { useLocation } from "react-router-dom";
import TimeUpdater from "./timeupdated";
import DateUpdater from "./date";

function Landing() 
{ 
    const data = useLocation()
    console.log(data)

    return (
        <div className="bg-black lg:p-16 md:p-10 p-5">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header  username={data.state.user}/>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"} />
                    <Card bgcolor={"#FD6663"} title={<DateUpdater/>} subtitle={ <TimeUpdater/> } />
                    <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"} />
                </div>
                <Todocontainer />


            </div>
        </div>
    )
}
export default Landing
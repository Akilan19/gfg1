import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import { useState } from "react";

function App() {
  const [YearClickVisible,setYearClickVisible]=useState(false);
 
  return (
    <div className="App">
      <SideBar yearClick1={()=>setYearClickVisible(false)} yearClick={()=>setYearClickVisible(true)}/>
      <Dashboard YearClickVisible={YearClickVisible}/>
    </div>
  );
}

export default App;
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./App.css";
import getCallHook from "./hooks/getCallHook.js";

function App() {
    const jobsUrl = "http://localhost:3000/jobs/";
    const params = {
        headers: {
            Accept: "application/json"
        },
        params: {
            "tableName": "jobs"
        }
    };

    const x = getCallHook(jobsUrl, params);
    console.log('Connelly')
    console.log(x)

    return <div className = "App">
    </div>
}


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>
    </StrictMode>
)



//function App() {
//  return (
//    <div className="App">
//      <JobTable/>
//      <JobInput/>
//    </div>
//  )
//}

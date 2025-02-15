import {useState, useEffect, useContext, createContext} from 'react'
import './index.css'
import "./App.css";
import JobTable from "./components/JobTable.jsx";
import JobInput from "./components/JobInput.jsx";
import {JobContext, JobProvider} from "./contexts/JobContext.jsx"
import axios from "axios";

const jobsUrl = "http://localhost:3000/jobs/";
const params = {
    headers: {
        Accept: "application/json"
    },
    params: {
        "tableName": "jobs"
    }
};

const App = () => {
    const {jobList, updateJobList} = useContext(JobContext);
    const [updated, setUpdated] = useState(false);

    if (updated) {
        console.log('brendan')
        setUpdated(false)
        return (
            <div>
                <JobTable jobList = {jobList}/>
                <JobInput setUpdated = {setUpdated}/>
            </div>
        )
    }

    return (
        <div>
            <JobTable jobList = {jobList}/>
            <JobInput setUpdated = {setUpdated}/>
        </div>
    )


};

export default App;
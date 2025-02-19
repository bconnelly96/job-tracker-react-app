import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";
import JobTable from "./components/JobTable.jsx";
import JobInput from "./components/JobInput.jsx";
import DonutChart from "./components/DonutChart.jsx";
import BarChart from "./components/BarChart.jsx";

const App = () => {
    // Keep list of jobs as shared staet variable
    const [jobList, setJobList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function updateJobList(newJob) {
        setJobList([...jobList, newJob]);

        return (
            <div>
                <JobTable jobList = { jobList }/>
                <JobInput updateJobList = { updateJobList }/>
                <DonutChart jobList = { jobList } />
                <BarChart jobList = { jobList } />
            </div>
        )
    };

    // Get data initially from the database
    useEffect(() => {
        const jobsUrl = "http://localhost:3000/jobs/";
        const params = {
            headers: {
                Accept: "application/json"
            },
            params: {
                "tableName": "jobs"
            }
        };
        const fetchData = async() => {
            try {
                const response = await axios.get(jobsUrl, params);
                setLoading(false);
                setJobList(response.data);
            } catch(error) {
                console.log(error);
                setError(true);
            }
        };
        fetchData();
        }, []);
    
    if (loading) {
        return (<div>Loading Job Data...</div>);
    }

    if (error) {
        return(<div>Error retrieving job data. Error: { error }</div>);
    }

    if (jobList) {
        return (
            <div>
                <JobTable jobList = { jobList }/>
                <JobInput updateJobList = { updateJobList }/>
                <DonutChart jobList = { jobList } />
                <BarChart jobList = { jobList } />
            </div>
        )
    }
};

export default App;
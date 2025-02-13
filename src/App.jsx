import {useState, useEffect} from 'react'
import './index.css'
import "./App.css";
import JobTable from "./components/JobTable.jsx";
import JobInput from "./components/JobInput.jsx";
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
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await axios.get(jobsUrl, params);
                setData(response.data);
                setLoading(false);
            } catch(error) {
                setError("Error getting data");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (data) {
        console.log('BILLY')
        return (
            <div className ="App">
                <JobTable jobData = {data}/>
                <JobInput jobData = {data} setData = {setData}/>
            </div>
        )
    }
};

export default App;
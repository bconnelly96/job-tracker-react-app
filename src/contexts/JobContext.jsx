import {createContext, useState, useEffect} from "react";
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

export const JobContext = createContext();

export const JobProvider = ({children}) => {
    const [jobList, setJobList] = useState([]);

    const updateJobList = (jobs) => {
        setJobList(jobs)
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(jobsUrl, params);
                setJobList(response.data);
                console.log(response.data)
            } catch(error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);

    return (
        <JobContext.Provider value = {{jobList, updateJobList}}>
            {children}
        </JobContext.Provider>
    )
};
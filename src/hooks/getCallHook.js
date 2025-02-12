import {useEffect} from "react";
import useJobDataStore from "../JobDataStore.js";
import axios from "axios";

const getCallHook = (url, params) => {
    const setJobList = useJobDataStore((state) => state.setJobList);
    //const getJobList = useJobDataStore((state) => state.getJobList);
    const jobList = useJobDataStore((state) => state.jobList);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(url, params);
                //console.log('BRENDAN')
                //console.log(response.data)
                setJobList(response.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, []);
    return jobList;
}
export default getCallHook;
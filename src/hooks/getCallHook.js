import {useState, useEffect} from "react";
import axios from "axios";

const getCallHook = (url, params) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await axios.get(url, params);
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            } catch(error) {
                setError("Error getting data");
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return {data, loading, error};
};

export default getCallHook;
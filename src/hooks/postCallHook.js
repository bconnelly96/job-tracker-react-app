import {useState, useEffect} from "react";
import axios from "axios";

const postCallHook = (url, params) => {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const postData = async() => {
            try {
                setLoading(true);
                const response = await axios.post(url, params);
                console.log(response.status);
                setStatus(response.status);
                setLoading(false);
            } catch(error) {
                setError("Error adding job");
                setLoading(false);
            }
        };
        postData();
    }, []);

    return {status, loading, error};
};

export default postCallHook;
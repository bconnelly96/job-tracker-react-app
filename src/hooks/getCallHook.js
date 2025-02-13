
import axios from "axios";

function getCallHook(url, params) {
    var jobList = undefined;
    const fetchData = async() => {
        try {
            const response = await axios.get(url, params);
            //console.log('BRENDAN')
            //console.log(response.data)
            jobList = response.data
        } catch (error) {
            console.log(error)
        }
    };
    fetchData();
    return jobList;
}
export default getCallHook;
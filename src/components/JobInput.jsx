import { useState } from "react";
import axios from "axios";
import "../style/JobInput.css";

const JobInput = ({ updateJobList }) => {
    const [inputVals, setInputVals] = useState([]);

    const onButtonClick = () => {
        if (!inputVals.title_input || !inputVals.company_input || !inputVals.status_input || !inputVals.date_applied_input) {
            alert("Missing data values. Must include Job Title, Company, Status, and Date Applied to add a job to job list.");
        } else {
            const jobsUrl = "http://localhost:3000/jobs/";
            const tableData = {
                "title": inputVals.title_input,
                "company": inputVals.company_input,
                "status": inputVals.status_input,
                "date_applied": inputVals.date_applied_input,
                "date_status_updated": inputVals.date_changed_input,
                "job_link": inputVals.link_input
            };
            const params = {
                headers: {
                    Accept: "application/json"
                },
                params: {
                    "tableName": "jobs",
                    "tableData": tableData
                }
            };
            
            const postData = async() => {
                try {
                    const response = await axios.post(jobsUrl, params);
                    if (response.status === 200) {
                        // Pass new job to Parent component
                        updateJobList(tableData);

                        var newInputVals = {};
                        for (const [key, value] of Object.entries(inputVals)) {
                            newInputVals[key] = "";
                        }
                        setInputVals(newInputVals);
                    } else {
                        alert(`Job was not added successfully. HTTP status code: ${response.status}`);
                    }
                } catch(error) {
                    console.log(error);
                }
            };
            postData();
        }

    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputVals(prevVals => ({...prevVals, [name]: value }));
    }

    return(
        <div className="JobInput">
        <table>
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Date Applied</th>
                    <th>Date Status Changed</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="text"
                            id="title_input" 
                            name="title_input" 
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.title_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="company_input" 
                            name="company_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.company_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="status_input" 
                            name="status_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.status_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="date_applied_input" 
                            name="date_applied_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.date_applied_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="date_changed_input" 
                            name="date_changed_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.date_changed_input}
                        />
                    </td>
                    <td>
                        <input 
                            type="text" 
                            id="link_input" 
                            name="link_input"
                            placeholder=""
                            onChange={handleInputChange} 
                            value={inputVals.link_input}
                        />
                    </td>
                    <td>
                    <button type="button" onClick={onButtonClick}>Add Job</button> 
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default JobInput;
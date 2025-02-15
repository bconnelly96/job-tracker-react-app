import "../style/JobTable.css";
import {useContext} from "react";
import {JobContext} from "../contexts/JobContext.jsx"

const JobTable = ({jobList}) => {
    //const {jobList} = useContext(JobContext)

    if (!jobList) {
        return (
            <div className="JobTable">Loading...</div>
        )
    }

    return (
        <div className="JobTable">
        <table>
            <thead >
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
                {
                    jobList.map(job =>
                        <tr>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.status}</td>
                            <td>{job.date_applied}</td>
                            <td>{job.date_status_updated}</td>
                            <td>{job.job_link}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default JobTable;
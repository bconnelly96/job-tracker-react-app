import "../style/JobTable.css";
import moment from "moment";

const JobTable = ({ jobList }) => {
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
                            <td>{moment(job.date_applied).format("M-D-YYYY")}</td>
                            <td>{job.date_status_updated ? moment(job.date_status_updated).format("M-D-YYYY"): ""}</td>
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
import getCallHook from "../hooks/getCallHook_archive.js";
import "../style/JobTable.css";

const JobTable = () => {
    const jobsUrl = "http://localhost:3000/jobs/";
    const params = {
        headers: {
            Accept: "application/json"
        },
        params: {
            "tableName": "jobs"
        }
    };
    const {data, loading, error} = getCallHook(jobsUrl, params);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (data) {
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
                        data.map(job =>
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
    }

    return null;
};

export default JobTable;

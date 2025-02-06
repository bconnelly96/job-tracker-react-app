import React from 'react'
import axios from 'axios'

export default class JobList extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        console.log('BRENDAN')
        const jobsUrl = "http://localhost:3000/jobs/"
        const tableName = "jobs"
        const tableColumns = ["title", "company", "status"]
        axios.get(
            jobsUrl,
            {
                headers: {
                    Accept: 'application/json'
                },
                params: {
                    'tableName': tableName,
                    'tableColumns': tableColumns
                }
            }
        )
        .then(res => {
            const jobs = res.data
            this.setState({ jobs })
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        console.log('CONNELLY')
        console.log(this.state.jobs)
        return (
            <table>
                <tr>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Status</th>
                </tr>
                {
                    this.state.jobs.map(job =>
                        <tr>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.status}</td>
                        </tr>
                    )
                }
            </table>
        )
    }
}
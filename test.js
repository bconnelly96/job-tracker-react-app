import moment from "moment";

function getChartData(jobList) {
    var datesApplied = {}
    var chartData = [];

    for (const job of jobList) {
        const dateApplied = moment(job.date_applied).format("M-D-YYYY")
        if (dateApplied in datesApplied) {
            datesApplied[dateApplied] += 1;
        } else {
            datesApplied[dateApplied] = 1;
        }
    }

    console.log('TESTDATA')
    console.log(datesApplied)

    for (const [key, value] of Object.entries(datesApplied)) {
        chartData.push({
            "Date Applied": key,
            "Jobs Applied": value,
            "Jobs AppliedColor": "hsl(345, 70%, 50%)"
        })
    }

    console.log(chartData)

}

const jobList = [
    {
        "title": "Appian Application Engineer III",
        "company": "Vanguard",
        "status": "Rejected",
        "date_applied": "2024-11-21T05:00:00.000Z",
        "date_status_updated": "2024-11-29T05:00:00.000Z",
        "job_link": null
    },
    {
        "title": "Appian Application Engineer III",
        "company": "Vanguard",
        "status": "Rejected",
        "date_applied": "2024-11-22T05:00:00.000Z",
        "date_status_updated": "2024-11-29T05:00:00.000Z",
        "job_link": null
    },
    {
        "title": "Appian Application Engineer III",
        "company": "Vanguard",
        "status": "Rejected",
        "date_applied": "2024-11-23T05:00:00.000Z",
        "date_status_updated": "2024-11-29T05:00:00.000Z",
        "job_link": null
    },
    {
        "title": "Appian Application Engineer III",
        "company": "Vanguard",
        "status": "Rejected",
        "date_applied": "2024-11-23T05:00:00.000Z",
        "date_status_updated": "2024-11-29T05:00:00.000Z",
        "job_link": null
    }
]


getChartData(jobList)
const b = [1,2,3]
const newJob = 4
console.log(b)
console.log([...b, newJob])
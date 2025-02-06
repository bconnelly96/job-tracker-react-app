const data = [
    {title: "sde1", company: "vanguard", status: "Rejected"},
    {title: "sde dev", company: "vanguard", status: "Applied"},
    {title: "sde3", company: "Oracle", status: "Accepted"}
]

data.map(job => {
    console.log(job.title)
    console.log(job.company)
    console.log(job.status)
})
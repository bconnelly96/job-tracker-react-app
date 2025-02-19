import { ResponsiveBar } from "@nivo/bar";
import "../style/BarChart.css";
import moment from "moment";

function getChartData(jobList) {
    var datesApplied = {};
    var chartData = [];

    for (const job of jobList) {
        const dateApplied = moment(job.date_applied).format("M-D-YYYY")
        if (dateApplied in datesApplied) {
            datesApplied[dateApplied] += 1;
        } else {
            datesApplied[dateApplied] = 1;
        }
    }

    for (const [key, value] of Object.entries(datesApplied)) {
        chartData.push({
            "Date Applied": key,
            "Jobs Applied": value
        });
    }

    chartData.sort((a,b) => moment(a["Date Applied"]).valueOf() - moment(b["Date Applied"]).valueOf())
    return chartData;
}


const BarChart = ({ jobList }) => {
    const chartData = getChartData(jobList);

    return(
        <div className = "BarChart">
        <h2>Jobs Applications by Date</h2>
        <ResponsiveBar
        data={chartData}
        theme={
            {
                axis: {
                    legend: {
                        text: {
                            fill: "#FFFFFF"
                        }
                    },
                    ticks: {
                        text: {
                            fill: "#FFFFFF"
                        }
                    }
                }
            }
        }
        keys={[
            "Jobs Applied"
        ]}
        indexBy="Date Applied"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#6C809A"]}
        colorBy="index"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Date",
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Number of Jobs Applied",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="#FFFFFF"
        legends={[
            {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                itemTextColor: "#FFFFFF",
                symbolSize: 20,
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
    />
        </div>
    );
};

export default BarChart;
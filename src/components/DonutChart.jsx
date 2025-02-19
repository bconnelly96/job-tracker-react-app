import { ResponsivePie } from "@nivo/pie";
import "../style/DonutChart.css";

function getChartData(jobList) {
    var appliedItems = 0;
    var rejectedItems = 0;
    var interviewItems = 0;
    
    for (const job of jobList) {
        if (job.status == "Applied") {
            appliedItems ++;
        } else if (job.status == "Rejected") {
            rejectedItems++;
        } else if (job.status == "Interview") {
            interviewItems++;
        }
    }

    const chartData = [
        {
            "id": "Applied",
            "label": "Applied",
            "value": appliedItems,
            "color": "hsl(282, 15.20%, 29.60%)"
        },
        {
            "id": "Rejected",
            "label": "Rejected",
            "value": rejectedItems,
            "color": "hsl(150, 63.10%, 47.80%)"
        },
        {
            "id": "Interview",
            "label": "Interview",
            "value": interviewItems,
            "color": "hsl(39, 70.20%, 50.00%)"
        }
    ];
    return chartData;
}

const DonutChart = ({ jobList }) => {
    const chartData = getChartData(jobList)
    return (
        <div className = "DonutChart">
        <ResponsivePie 
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: "color",
            modifiers: [
                [
                    "darker",
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: "color",
            modifiers: [
                [
                    "darker",
                    2
                ]
            ]
        }}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000"
                        }
                    }
                ]
            }
        ]}
        />
        </div>
    );
};

export default DonutChart;
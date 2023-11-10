import * as React from "react";

import ReactApexChart from "react-apexcharts";

interface ChartBasicAreaProps {
  title: string;
  values: { name: string; data: number }[];
  unit: string;
  colors: string[];
}

const ChartBasicArea: React.FC<ChartBasicAreaProps> = ({
  title,
  values,
  unit,
  colors,
}) => {
  return (
    <div>
      <ReactApexChart
        options={{
          chart: {
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },

          title: {
            text: title,
            align: "left",
          },
          labels: values.map((item) => item.name),
          xaxis: {
            labels: {
              // formatter: (value) => {
              //     return formatNumber(value);
              // },
              formatter: (value) => {
                return value;
              },
            },
          },
          yaxis: {
            opposite: true,
          },
          legend: {
            horizontalAlign: "left",
          },
          colors: colors,
        }}
        series={[
          {
            name: unit,
            data: values.map((item) => item.data),
          },
        ]}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ChartBasicArea;

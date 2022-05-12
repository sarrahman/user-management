import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";
import { fShortenNumber } from "../../../utils/formatNumber";
  
  const BarChartComp = (props) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={props.data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey={props.keyNama} />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("id", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
          />
          <Tooltip formatter={(value) => fShortenNumber(value)} />
          <Legend />
          <Bar dataKey={props.keyValue} fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarChartComp;
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
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={props.data}>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis 
        tickFormatter={(value) =>
          new Intl.NumberFormat("id", {
            notation: "compact",
            compactDisplay: "short",
          }).format(value)
        }
        />
        <Tooltip formatter={(value) => fShortenNumber(value)}/>
        <Legend />
        <Bar dataKey="pengaduan" fill="#8884d8" />
        <Bar dataKey="pekerjaan" fill="#82ca9d" />
        <Bar dataKey="rekanan" fill="#aacc33" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComp;
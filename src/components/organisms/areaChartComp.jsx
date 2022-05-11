import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
  
  const AreaChartComp = (props) => {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart width={730} height={250} data={props.data}>
          <defs>
            <linearGradient id="warnaKunjungan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={props.keyName} />
          <YAxis
            tickFormatter={(value) =>
              new Intl.NumberFormat("id", {
                notation: "compact",
                compactDisplay: "short",
              }).format(value)
            }
          />
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={props.keyValue}
            stroke="#82ca8b"
            fillOpacity={1}
            fill="url(#warnaKunjungan)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };
  
  export default AreaChartComp;
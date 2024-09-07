import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

type SparkLine = {
  id: string;
  height: string;
  width: string;
  color: string;
  data: any[];
  type: "Area" | "Column" | "Line"| "Pie" | "WinLoss" ;
  currentColor: string;
};

const SparkLine = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}: SparkLine) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      dataSource={data}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "(${x}, ${yval})",
        trackLineSettings : {visible : true}
      }}
      type={type}
      enableRtl={true}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;

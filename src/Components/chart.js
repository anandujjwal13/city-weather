import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars  } from 'react-sparklines';

export default ({data,units,color}) => {
  return (
    <div>
      <Sparklines height={90} width={150} data={data}>
        <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".80" }} />
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="min" />
        <SparklinesReferenceLine type="avg" />
        <SparklinesReferenceLine type="max" />
      </Sparklines>
      <div>min :{_.min(data)}<sup>{units}</sup></div>
      <div>mean :{_.round(_.mean(data))}<sup>{units}</sup></div>
      <div>max :{_.max(data)}<sup>{units}</sup></div>
      
    </div>
  );
}

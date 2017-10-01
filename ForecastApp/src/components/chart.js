import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = data => _.round(_.sum(data) / data.length);

export default props => <div>
  <Sparklines data={props.data} width={180} height={120}>
    <SparklinesLine color={props.color} />
    <SparklinesReferenceLine type="avg" />
  </Sparklines>

  <div>{average(props.data)} {props.units}</div>
</div>

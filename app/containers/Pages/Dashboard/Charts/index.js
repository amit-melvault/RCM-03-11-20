import React, { Component } from 'react';
import './style.css';
import {
  Chart,
  ChartBar,
  ChartVoronoiContainer,
} from '@patternfly/react-charts';

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="chartBar">
          <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Bar chart example"
            containerComponent={
              <ChartVoronoiContainer
                labels={({ datum }) => `${datum.name}: ${datum.y}`}
                constrainToVisibleArea
              />
            }
            domain={{ y: [0, 9] }}
            domainPadding={{ x: [50, 40] }}
            height={300}
            padding={{
              bottom: 50,
              left: 50,
              right: 200, // Adjusted to accommodate legend
              top: 50,
            }}
            width={900}
          >
            <ChartBar
              data={[
                { name: 'Cats', x: '2015', y: 1 },
                { name: 'Cats', x: '2016', y: 2 },
                { name: 'Cats', x: '2017', y: 5 },
                { name: 'Cats', x: '2018', y: 3 },
                { name: 'Cats', x: '2019', y: 4 },
                { name: 'Cats', x: '2020', y: 2 },
              ]}
            />
          </Chart>
        </div>
      </React.Fragment>
    );
  }
}
export default Charts;

// import React from 'react';
// import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

// import { Container } from './styles';

// const data = [
//   { x: 1, y: 13000 },
//   { x: 2, y: 16500 },
//   { x: 3, y: 14250 },
//   { x: 4, y: 19000 },
// ];

// class TestingChart extends React.Component {
//   render() {
//     return (
//       <Container>
//         <VictoryChart width={350} theme={VictoryTheme.material}>
//           <VictoryLine data={data} />
//         </VictoryChart>
//       </Container>
//     );
//   }
// }

// export default TestingChart;

import React from 'react';

import { Container } from './styles';

import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native';

interface iData {
  data?: [
    {
      x: number;
      y: number;
    },
  ];
}

const TestChart: React.FC<iData> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryLine data={data} />
      </VictoryChart>
    </Container>
  );
};

export default TestChart;

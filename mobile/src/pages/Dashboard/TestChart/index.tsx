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
  return (
    <Container>
      <VictoryChart width={300} height={300} theme={VictoryTheme.material}>
        <VictoryLine
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          data={data}
        />
      </VictoryChart>
    </Container>
  );
};

export default TestChart;

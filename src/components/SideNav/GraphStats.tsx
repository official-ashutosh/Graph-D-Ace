import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  adjacencyList: Array<Array<number>>;
  nodeKeys: Array<string>;
}

const StatsContainer = styled.div`
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 8px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(79, 172, 254, 0.2);
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #4facfe;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 11px;
  color: ${(props) => props.theme.sidebar.foreground};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const GraphStats: React.FC<Props> = (props: Props): ReactElement => {
  const nodeCount = props.adjacencyList.length;
  const edgeCount = props.adjacencyList.reduce((sum, neighbors) => sum + neighbors.length, 0);
  const density = nodeCount > 1 ? ((edgeCount / (nodeCount * (nodeCount - 1))) * 100).toFixed(1) : '0';
  const avgDegree = nodeCount > 0 ? (edgeCount / nodeCount).toFixed(1) : '0';

  return (
    <StatsContainer>
      <StatsGrid>
        <StatCard>
          <StatValue>{nodeCount}</StatValue>
          <StatLabel>Vertices</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{edgeCount}</StatValue>
          <StatLabel>Edges</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{density}%</StatValue>
          <StatLabel>Density</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{avgDegree}</StatValue>
          <StatLabel>Avg Degree</StatLabel>
        </StatCard>
      </StatsGrid>
    </StatsContainer>
  );
};

export default GraphStats;

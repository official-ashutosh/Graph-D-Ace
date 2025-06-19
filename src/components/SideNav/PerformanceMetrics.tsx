import React, { ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
  algorithmName: string;
  nodeCount: number;
  edgeCount: number;
  executionTime?: number;
}

const metricsAnimations = css`
  @keyframes countUp {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

const MetricsContainer = styled.div<{ isVisible: boolean }>`
  ${metricsAnimations}
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1500;
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.4);
  border-radius: 16px;
  padding: 20px;
  min-width: 300px;
  
  opacity: ${(props) => props.isVisible ? 1 : 0};
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  
  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    pointer-events: none;
    z-index: -1;
    border-radius: inherit;
  }
`;

const MetricsTitle = styled.h3`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-align: center;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const MetricCard = styled.div`
  text-align: center;
  padding: 12px;
  background: rgba(79, 172, 254, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(79, 172, 254, 0.2);
  animation: countUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const MetricValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #4facfe;
  margin-bottom: 4px;
  animation: pulse 2s ease-in-out infinite;
`;

const MetricLabel = styled.div`
  font-size: 11px;
  color: ${(props) => props.theme.sidebar.foreground};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PerformanceMetrics: React.FC<Props> = (props: Props): ReactElement => {
  const [animatedNodeCount, setAnimatedNodeCount] = useState(0);
  const [animatedEdgeCount, setAnimatedEdgeCount] = useState(0);

  useEffect(() => {
    if (props.isVisible) {
      // Animate counting up
      const nodeInterval = setInterval(() => {
        setAnimatedNodeCount(prev => {
          if (prev < props.nodeCount) {
            return prev + 1;
          }
          clearInterval(nodeInterval);
          return props.nodeCount;
        });
      }, 30);

      const edgeInterval = setInterval(() => {
        setAnimatedEdgeCount(prev => {
          if (prev < props.edgeCount) {
            return prev + 1;
          }
          clearInterval(edgeInterval);
          return props.edgeCount;
        });
      }, 20);

      return () => {
        clearInterval(nodeInterval);
        clearInterval(edgeInterval);
      };
    }
  }, [props.isVisible, props.nodeCount, props.edgeCount]);

  const complexity = getAlgorithmComplexity(props.algorithmName, props.nodeCount, props.edgeCount);

  return (
    <MetricsContainer isVisible={props.isVisible}>
      <MetricsTitle>🚀 {props.algorithmName} Performance</MetricsTitle>
      <MetricsGrid>
        <MetricCard>
          <MetricValue>{animatedNodeCount}</MetricValue>
          <MetricLabel>Vertices</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>{animatedEdgeCount}</MetricValue>
          <MetricLabel>Edges</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>{complexity.timeOps}</MetricValue>
          <MetricLabel>Operations</MetricLabel>
        </MetricCard>
        <MetricCard>
          <MetricValue>{props.executionTime || 0}ms</MetricValue>
          <MetricLabel>Execution</MetricLabel>
        </MetricCard>
      </MetricsGrid>
    </MetricsContainer>
  );
};

const getAlgorithmComplexity = (algorithm: string, V: number, E: number) => {
  const complexities: Record<string, (v: number, e: number) => number> = {
    'DFS': (v, e) => v + e,
    'BFS': (v, e) => v + e,
    'Dijkstra': (v, e) => (v + e) * Math.log2(v),
    'Bellman-Ford': (v, e) => v * e,
    'Floyd-Warshall': (v) => v * v * v,
    'Prim': (v, e) => e * Math.log2(v),
    'Kruskal': (v, e) => e * Math.log2(e),
  };

  const calc = complexities[algorithm] || ((v, e) => v + e);
  return {
    timeOps: Math.round(calc(V, E))
  };
};

export default PerformanceMetrics;

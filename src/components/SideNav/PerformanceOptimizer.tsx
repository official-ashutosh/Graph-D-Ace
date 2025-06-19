import React, { ReactElement, useState, useEffect } from 'react';
import styled from 'styled-components';
import Algorithms from '../../models/Algorithms';

interface Props {
  selectedAlgorithm: Algorithms;
  nodeCount: number;
  edgeCount: number;
  onOptimizationSuggestion: (suggestion: string) => void;
}

const OptimizerContainer = styled.div`
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
`;

const OptimizerTitle = styled.h4`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SuggestionCard = styled.div<{ type: 'warning' | 'info' | 'success' }>`
  padding: 12px;
  border-radius: 8px;
  margin: 8px 0;
  font-size: 12px;
  line-height: 1.4;
  border-left: 4px solid;
  
  ${(props) => {
    switch (props.type) {
      case 'warning':
        return `
          background: rgba(255, 193, 7, 0.1);
          border-left-color: #ffc107;
          color: #ffc107;
        `;
      case 'success':
        return `
          background: rgba(40, 167, 69, 0.1);
          border-left-color: #28a745;
          color: #28a745;
        `;
      default:
        return `
          background: rgba(79, 172, 254, 0.1);
          border-left-color: #4facfe;
          color: #4facfe;
        `;
    }
  }}
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-size: 12px;
`;

const MetricLabel = styled.span`
  color: ${(props) => props.theme.sidebar.foreground};
  opacity: 0.8;
`;

const MetricValue = styled.span<{ status: 'good' | 'warning' | 'critical' }>`
  font-weight: 600;
  color: ${(props) => {
    switch (props.status) {
      case 'good': return '#28a745';
      case 'warning': return '#ffc107';
      case 'critical': return '#dc3545';
      default: return '#4facfe';
    }
  }};
`;

const PerformanceOptimizer: React.FC<Props> = ({ selectedAlgorithm, nodeCount, edgeCount, onOptimizationSuggestion }: Props): ReactElement => {
  const [analysis, setAnalysis] = useState<{
    complexity: number;
    recommendation: string;
    type: 'warning' | 'info' | 'success';
    metrics: {
      density: number;
      sparsity: number;
      efficiency: string;
    };
  } | null>(null);

  useEffect(() => {
    const analyzePerformance = () => {
      if (nodeCount === 0) {
        setAnalysis(null);
        return;
      }

      const density = edgeCount / (nodeCount * (nodeCount - 1));
      const sparsity = 1 - density;
      
      // Calculate theoretical complexity
      let complexity = 0;
      let recommendation = '';
      let type: 'warning' | 'info' | 'success' = 'info';
      let efficiency = 'Good';

      switch (selectedAlgorithm) {
        case Algorithms.dfs:
        case Algorithms.bfs:
          complexity = nodeCount + edgeCount;
          if (nodeCount > 1000) {
            recommendation = 'Consider using iterative implementation for large graphs to avoid stack overflow.';
            type = 'warning';
          } else {
            recommendation = 'Linear time complexity - excellent for graph traversal!';
            type = 'success';
          }
          break;

        case Algorithms.dijkstra:
          complexity = (nodeCount + edgeCount) * Math.log2(nodeCount);
          if (density > 0.5) {
            recommendation = 'Dense graph detected. Consider Floyd-Warshall for all-pairs shortest paths.';
            type = 'warning';
          } else {
            recommendation = 'Good choice for sparse graphs with non-negative weights.';
            type = 'success';
          }
          break;

        case Algorithms.floydWarshall:
          complexity = Math.pow(nodeCount, 3);
          if (nodeCount > 500) {
            recommendation = 'Very large graph! Consider Dijkstra for single-source paths.';
            type = 'warning';
            efficiency = 'Critical';
          } else if (density < 0.3) {
            recommendation = 'Sparse graph detected. Dijkstra might be more efficient.';
            type = 'warning';
          } else {
            recommendation = 'Good for dense graphs and all-pairs shortest paths.';
            type = 'success';
          }
          break;

        case Algorithms.bellmanFord:
          complexity = nodeCount * edgeCount;
          if (edgeCount > nodeCount * 10) {
            recommendation = 'Dense graph with many edges. Consider optimized implementations.';
            type = 'warning';
          } else {
            recommendation = 'Handles negative weights well. Good for cycle detection.';
            type = 'success';
          }
          break;

        default:
          complexity = nodeCount + edgeCount;
          recommendation = 'Algorithm analysis in progress...';
      }

      if (complexity > 1000000) {
        efficiency = 'Critical';
        type = 'warning';
      } else if (complexity > 100000) {
        efficiency = 'Warning';
        type = 'warning';
      }

      setAnalysis({
        complexity,
        recommendation,
        type,
        metrics: {
          density: Math.round(density * 100),
          sparsity: Math.round(sparsity * 100),
          efficiency
        }
      });
    };    analyzePerformance();
  }, [selectedAlgorithm, nodeCount, edgeCount]);

  if (!analysis) {
    return (
      <OptimizerContainer>
        <OptimizerTitle>⚡ Performance Optimizer</OptimizerTitle>
        <SuggestionCard type="info">
          Add nodes and edges to see performance analysis and optimization suggestions.
        </SuggestionCard>
      </OptimizerContainer>
    );
  }

  return (
    <OptimizerContainer>
      <OptimizerTitle>⚡ Performance Optimizer</OptimizerTitle>
      
      <div style={{ marginBottom: '12px' }}>
        <MetricRow>
          <MetricLabel>Estimated Operations:</MetricLabel>
          <MetricValue status={analysis.complexity > 100000 ? 'warning' : 'good'}>
            {analysis.complexity.toLocaleString()}
          </MetricValue>
        </MetricRow>
        <MetricRow>
          <MetricLabel>Graph Density:</MetricLabel>
          <MetricValue status="good">{analysis.metrics.density}%</MetricValue>
        </MetricRow>
        <MetricRow>
          <MetricLabel>Performance:</MetricLabel>
          <MetricValue 
            status={
              analysis.metrics.efficiency === 'Critical' ? 'critical' :
              analysis.metrics.efficiency === 'Warning' ? 'warning' : 'good'
            }
          >
            {analysis.metrics.efficiency}
          </MetricValue>
        </MetricRow>
      </div>

      <SuggestionCard type={analysis.type}>
        <strong>💡 Suggestion:</strong> {analysis.recommendation}
      </SuggestionCard>
    </OptimizerContainer>
  );
};

export default PerformanceOptimizer;

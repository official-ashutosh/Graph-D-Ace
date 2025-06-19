import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Algorithms from '../../models/Algorithms';

interface Props {
  selectedAlgorithms: Algorithms[];
  onClose: () => void;
}

const modalAnimations = css`
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  ${modalAnimations}
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.3);
  border-radius: 20px;
  padding: 24px;
  max-width: 800px;
  max-height: 600px;
  width: 90%;
  overflow-y: auto;
  animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
`;

const ModalTitle = styled.h2`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, #ff6b6b, #ff8e53);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  }
`;

const ComparisonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHeader = styled.th`
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
  color: #4facfe;
  padding: 12px;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid rgba(79, 172, 254, 0.3);
`;

const TableCell = styled.td`
  padding: 10px 12px;
  border: 1px solid rgba(79, 172, 254, 0.2);
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 13px;
  background: rgba(255, 255, 255, 0.02);
  
  &:nth-child(odd) {
    background: rgba(79, 172, 254, 0.05);
  }
`;

const algorithmData: Record<Algorithms, { time: string; space: string; type: string; category: string }> = {
  // Traversal Algorithms
  [Algorithms.dfs]: { time: 'O(V + E)', space: 'O(V)', type: 'Traversal', category: 'Graph Traversal' },
  [Algorithms.bfs]: { time: 'O(V + E)', space: 'O(V)', type: 'Traversal', category: 'Graph Traversal' },
  [Algorithms.iddfs]: { time: 'O(b^d)', space: 'O(d)', type: 'Search', category: 'Graph Traversal' },
  [Algorithms.dls]: { time: 'O(b^l)', space: 'O(l)', type: 'Search', category: 'Graph Traversal' },
  
  // Shortest Path Algorithms
  [Algorithms.dijkstra]: { time: 'O((V + E) log V)', space: 'O(V)', type: 'Shortest Path', category: 'Shortest Path' },
  [Algorithms.bellmanFord]: { time: 'O(VE)', space: 'O(V)', type: 'Shortest Path', category: 'Shortest Path' },
  [Algorithms.floydWarshall]: { time: 'O(V³)', space: 'O(V²)', type: 'All-Pairs Shortest Path', category: 'Shortest Path' },
  [Algorithms.astar]: { time: 'O(b^d)', space: 'O(b^d)', type: 'Heuristic Search', category: 'Shortest Path' },
  
  // Minimum Spanning Tree
  [Algorithms.prim]: { time: 'O(E log V)', space: 'O(V)', type: 'MST', category: 'MST' },
  [Algorithms.kruskal]: { time: 'O(E log E)', space: 'O(V)', type: 'MST', category: 'MST' },
  
  // Graph Properties
  [Algorithms.topologicalSort]: { time: 'O(V + E)', space: 'O(V)', type: 'Ordering', category: 'Graph Properties' },
  [Algorithms.stronglyConnectedComponents]: { time: 'O(V + E)', space: 'O(V)', type: 'Graph Decomposition', category: 'Graph Properties' },
  [Algorithms.bipartiteCheck]: { time: 'O(V + E)', space: 'O(V)', type: 'Graph Property', category: 'Graph Properties' },
  [Algorithms.cycleDetection]: { time: 'O(V + E)', space: 'O(V)', type: 'Graph Property', category: 'Graph Properties' },
  
  // Advanced Algorithms
  [Algorithms.maxFlow]: { time: 'O(E²V)', space: 'O(V²)', type: 'Network Flow', category: 'Flow Algorithms' },
  [Algorithms.hamiltonianPath]: { time: 'O(2^n × n²)', space: 'O(2^n × n)', type: 'Path Finding', category: 'NP-Complete' },
  [Algorithms.travelingSalesman]: { time: 'O(2^n × n²)', space: 'O(2^n × n)', type: 'Optimization', category: 'NP-Complete' }
};

const AlgorithmComparison: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <ModalOverlay onClick={props.onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Algorithm Complexity Comparison</ModalTitle>
          <CloseButton onClick={props.onClose}>×</CloseButton>
        </ModalHeader>
          <ComparisonTable>
          <thead>
            <tr>
              <TableHeader>Algorithm</TableHeader>
              <TableHeader>Time Complexity</TableHeader>
              <TableHeader>Space Complexity</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Category</TableHeader>
            </tr>
          </thead>
          <tbody>
            {props.selectedAlgorithms.map(algorithm => (
              <tr key={algorithm}>
                <TableCell style={{ fontWeight: '600', color: '#4facfe' }}>
                  {algorithm}
                </TableCell>
                <TableCell>{algorithmData[algorithm]?.time || 'N/A'}</TableCell>
                <TableCell>{algorithmData[algorithm]?.space || 'N/A'}</TableCell>
                <TableCell>{algorithmData[algorithm]?.type || 'N/A'}</TableCell>
                <TableCell>{algorithmData[algorithm]?.category || 'N/A'}</TableCell>
              </tr>
            ))}
          </tbody>
        </ComparisonTable>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AlgorithmComparison;

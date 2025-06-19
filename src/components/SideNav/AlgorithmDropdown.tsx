import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import Algorithms from '../../models/Algorithms';

interface Props {
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: (algorithm: Algorithms) => void;
}

const dropdownAnimations = css`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  ${dropdownAnimations}
  
  width: 100%;
  padding: 12px 16px;
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.3);
  border-radius: 12px;
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: rgba(79, 172, 254, 0.5);
    background: rgba(79, 172, 254, 0.1);
    transform: translateY(-1px);
  }
  
  &::after {
    content: '${(props) => props.isOpen ? '▲' : '▼'}';
    font-size: 12px;
    color: #4facfe;
    transition: all 0.3s ease;
  }
`;

const DropdownList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.3);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  
  max-height: ${(props) => props.isOpen ? '300px' : '0'};
  opacity: ${(props) => props.isOpen ? '1' : '0'};
  overflow: hidden;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${(props) => props.isOpen ? 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
  
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

const DropdownItem = styled.div<{ isSelected: boolean }>`
  padding: 12px 16px;
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  background: ${(props) => 
    props.isSelected 
      ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15))'
      : 'transparent'};
  
  border-left: ${(props) => 
    props.isSelected 
      ? '4px solid #4facfe'
      : '4px solid transparent'};
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
    transform: translateX(4px);
    color: #4facfe;
  }
  
  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  
  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

const CategoryHeader = styled.div`
  padding: 8px 16px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
  color: #4facfe;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.3);
  
  &:not(:first-child) {
    border-top: 1px solid rgba(79, 172, 254, 0.1);
    margin-top: 4px;
  }
`;

const algorithmLabels: Record<Algorithms, string> = {
  // Traversal Algorithms
  [Algorithms.dfs]: 'Depth-First Search (DFS)',
  [Algorithms.bfs]: 'Breadth-First Search (BFS)',
  [Algorithms.iddfs]: 'Iterative Deepening DFS',
  [Algorithms.dls]: 'Depth-Limited Search',
  
  // Shortest Path Algorithms
  [Algorithms.dijkstra]: 'Dijkstra\'s Algorithm',
  [Algorithms.bellmanFord]: 'Bellman-Ford Algorithm',
  [Algorithms.floydWarshall]: 'Floyd-Warshall Algorithm',
  [Algorithms.astar]: 'A* Search Algorithm',
  
  // Minimum Spanning Tree
  [Algorithms.prim]: 'Prim\'s Algorithm',
  [Algorithms.kruskal]: 'Kruskal\'s Algorithm',
  
  // Topological Algorithms
  [Algorithms.topologicalSort]: 'Topological Sort',
  [Algorithms.stronglyConnectedComponents]: 'Strongly Connected Components',
  
  // Graph Properties
  [Algorithms.bipartiteCheck]: 'Bipartite Graph Check',
  [Algorithms.cycleDetection]: 'Cycle Detection',
  
  // Flow Algorithms
  [Algorithms.maxFlow]: 'Maximum Flow (Ford-Fulkerson)',
  
  // Advanced Algorithms
  [Algorithms.hamiltonianPath]: 'Hamiltonian Path',
  [Algorithms.travelingSalesman]: 'Traveling Salesman Problem'
};

const algorithmCategories = {
  'Graph Traversal': [
    Algorithms.dfs,
    Algorithms.bfs,
    Algorithms.iddfs,
    Algorithms.dls
  ],
  'Shortest Path': [
    Algorithms.dijkstra,
    Algorithms.bellmanFord,
    Algorithms.floydWarshall,
    Algorithms.astar
  ],
  'Minimum Spanning Tree': [
    Algorithms.prim,
    Algorithms.kruskal
  ],
  'Graph Properties': [
    Algorithms.topologicalSort,
    Algorithms.stronglyConnectedComponents,
    Algorithms.bipartiteCheck,
    Algorithms.cycleDetection
  ],
  'Advanced Algorithms': [
    Algorithms.maxFlow,
    Algorithms.hamiltonianPath,
    Algorithms.travelingSalesman
  ]
};

const AlgorithmDropdown: React.FC<Props> = (props: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (algorithm: Algorithms) => {
    props.setSelectedAlgorithm(algorithm);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {algorithmLabels[props.selectedAlgorithm]}
      </DropdownButton>
        <DropdownList isOpen={isOpen}>
        {Object.entries(algorithmCategories).map(([category, algorithms]) => (
          <div key={category}>
            <CategoryHeader>{category}</CategoryHeader>
            {algorithms.map((algorithm) => (
              <DropdownItem
                key={algorithm}
                isSelected={props.selectedAlgorithm === algorithm}
                onClick={() => handleSelect(algorithm)}
              >
                {algorithmLabels[algorithm]}
              </DropdownItem>
            ))}
          </div>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default AlgorithmDropdown;

import React, { ReactElement } from 'react';
import DualSideNav from './DualSideNav';
import { OptionsTitle, SectionDivider } from './ModernOptions';
import { DescriptionContainer, DescriptionTitle, DescriptionText, DescriptionBadge, DescriptionStats, StatItem } from './AlgorithmsDescription/ModernAlgorithmDescription';
import AlgorithmDropdown from './AlgorithmDropdown';
import PerformanceOptimizer from './PerformanceOptimizer';
import Algorithms from '../../models/Algorithms';

interface Props {
  isVisible: boolean;
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: (algorithm: Algorithms) => void;
  adjacencyList?: Array<Array<number>>;
}

const algorithmData: Record<Algorithms, {
  name: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  type: string;
  characteristics: string[];
  category: string;
}> = {
  // Traversal Algorithms
  [Algorithms.dfs]: {
    name: 'Depth-First Search',
    description: 'Explores as far as possible along each branch before backtracking. Uses a stack-like approach to traverse the graph systematically.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Traversal',
    category: 'Graph Traversal',
    characteristics: ['Uses Stack', 'Goes Deep First', 'Backtracking', 'Memory Efficient']
  },
  [Algorithms.bfs]: {
    name: 'Breadth-First Search',
    description: 'Explores all vertices at the current depth before moving to vertices at the next depth level. Uses a queue-based approach.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Traversal',
    category: 'Graph Traversal',
    characteristics: ['Uses Queue', 'Level by Level', 'Shortest Path', 'Optimal for Unweighted']
  },
  [Algorithms.iddfs]: {
    name: 'Iterative Deepening DFS',
    description: 'Combines the space efficiency of DFS with the optimal path finding of BFS. Gradually increases depth limit.',
    timeComplexity: 'O(b^d)',
    spaceComplexity: 'O(d)',
    type: 'Search',
    category: 'Graph Traversal',
    characteristics: ['Memory Efficient', 'Complete Search', 'Optimal', 'Best of Both Worlds']
  },
  [Algorithms.dls]: {
    name: 'Depth-Limited Search',
    description: 'A modified DFS that only searches up to a predetermined depth limit. Useful when you know the solution depth.',
    timeComplexity: 'O(b^l)',
    spaceComplexity: 'O(l)',
    type: 'Search',
    category: 'Graph Traversal',
    characteristics: ['Depth Limited', 'Memory Efficient', 'Incomplete', 'Controllable Depth']
  },
  
  // Shortest Path Algorithms
  [Algorithms.dijkstra]: {
    name: 'Dijkstra\'s Algorithm',
    description: 'Finds the shortest path between nodes in a weighted graph. Works with non-negative edge weights only.',
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)',
    type: 'Shortest Path',
    category: 'Shortest Path',
    characteristics: ['Weighted Graphs', 'Single Source', 'Greedy Approach', 'Non-negative Weights']
  },
  [Algorithms.bellmanFord]: {
    name: 'Bellman-Ford Algorithm',
    description: 'Finds shortest paths from a single source vertex to all other vertices. Can handle negative edge weights.',
    timeComplexity: 'O(VE)',
    spaceComplexity: 'O(V)',
    type: 'Shortest Path',
    category: 'Shortest Path',
    characteristics: ['Negative Weights', 'Single Source', 'Dynamic Programming', 'Detects Negative Cycles']
  },
  [Algorithms.floydWarshall]: {
    name: 'Floyd-Warshall Algorithm',
    description: 'Finds shortest paths between all pairs of vertices. Can handle negative weights but not negative cycles.',
    timeComplexity: 'O(V³)',
    spaceComplexity: 'O(V²)',
    type: 'All-Pairs Shortest Path',
    category: 'Shortest Path',
    characteristics: ['All Pairs', 'Dynamic Programming', 'Dense Graphs', 'Negative Weights OK']
  },
  [Algorithms.astar]: {
    name: 'A* Search Algorithm',
    description: 'Finds the shortest path using heuristics. More efficient than Dijkstra when a good heuristic is available.',
    timeComplexity: 'O(b^d)',
    spaceComplexity: 'O(b^d)',
    type: 'Heuristic Search',
    category: 'Shortest Path',
    characteristics: ['Heuristic Based', 'Optimal', 'Informed Search', 'Pathfinding']
  },
  
  // Minimum Spanning Tree
  [Algorithms.prim]: {
    name: 'Prim\'s Algorithm',
    description: 'Finds the minimum spanning tree of a weighted undirected graph. Grows the tree one vertex at a time.',
    timeComplexity: 'O(E log V)',
    spaceComplexity: 'O(V)',
    type: 'Minimum Spanning Tree',
    category: 'MST',
    characteristics: ['MST Algorithm', 'Greedy Approach', 'Undirected Graphs', 'Edge-by-Edge Growth']
  },
  [Algorithms.kruskal]: {
    name: 'Kruskal\'s Algorithm',
    description: 'Finds minimum spanning tree by sorting edges and adding them if they don\'t create cycles.',
    timeComplexity: 'O(E log E)',
    spaceComplexity: 'O(V)',
    type: 'Minimum Spanning Tree',
    category: 'MST',
    characteristics: ['Union-Find', 'Edge Sorting', 'Cycle Detection', 'Sparse Graphs']
  },
  
  // Topological Algorithms
  [Algorithms.topologicalSort]: {
    name: 'Topological Sort',
    description: 'Linear ordering of vertices such that for every directed edge uv, vertex u comes before v in the ordering.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Ordering',
    category: 'Graph Properties',
    characteristics: ['DAG Required', 'Linear Ordering', 'Dependency Resolution', 'Kahn\'s Algorithm']
  },
  [Algorithms.stronglyConnectedComponents]: {
    name: 'Strongly Connected Components',
    description: 'Finds maximal sets of vertices such that there is a path from each vertex to every other vertex in the set.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Graph Decomposition',
    category: 'Graph Properties',
    characteristics: ['Kosaraju\'s Algorithm', 'Directed Graphs', 'Component Analysis', 'Two DFS Passes']
  },
  
  // Graph Properties
  [Algorithms.bipartiteCheck]: {
    name: 'Bipartite Graph Check',
    description: 'Determines if a graph can be colored with two colors such that no adjacent vertices have the same color.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Graph Property',
    category: 'Graph Properties',
    characteristics: ['Two-Coloring', 'BFS/DFS Based', 'Matching Problems', 'Even Cycle Check']
  },
  [Algorithms.cycleDetection]: {
    name: 'Cycle Detection',
    description: 'Detects whether a graph contains any cycles. Different approaches for directed and undirected graphs.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    type: 'Graph Property',
    category: 'Graph Properties',
    characteristics: ['DFS Based', 'Union-Find', 'Back Edge Detection', 'Forest Check']
  },
  
  // Flow Algorithms
  [Algorithms.maxFlow]: {
    name: 'Maximum Flow',
    description: 'Finds the maximum flow from source to sink in a flow network. Uses Ford-Fulkerson method.',
    timeComplexity: 'O(E²V)',
    spaceComplexity: 'O(V²)',
    type: 'Network Flow',
    category: 'Flow Algorithms',
    characteristics: ['Ford-Fulkerson', 'Augmenting Paths', 'Cut Capacity', 'Network Problems']
  },
  
  // Advanced Algorithms
  [Algorithms.hamiltonianPath]: {
    name: 'Hamiltonian Path',
    description: 'Finds a path that visits every vertex exactly once. This is an NP-complete problem.',
    timeComplexity: 'O(2^n × n²)',
    spaceComplexity: 'O(2^n × n)',
    type: 'Path Finding',
    category: 'NP-Complete',
    characteristics: ['NP-Complete', 'Dynamic Programming', 'Bitmask', 'Exact Algorithm']
  },
  [Algorithms.travelingSalesman]: {
    name: 'Traveling Salesman Problem',
    description: 'Finds the shortest possible route that visits every vertex exactly once and returns to the starting point.',
    timeComplexity: 'O(2^n × n²)',
    spaceComplexity: 'O(2^n × n)',
    type: 'Optimization',
    category: 'NP-Complete',
    characteristics: ['NP-Complete', 'Held-Karp', 'Circuit Finding', 'Optimization']  }
};

const getAlgorithmTip = (algorithm: Algorithms): string => {
  const tips: Record<Algorithms, string> = {
    [Algorithms.dfs]: 'Great for finding connected components and detecting cycles. Works well with recursive implementation.',
    [Algorithms.bfs]: 'Perfect for finding shortest paths in unweighted graphs. Use for level-order traversal.',
    [Algorithms.iddfs]: 'Combines DFS space efficiency with BFS completeness. Perfect for unknown solution depths.',
    [Algorithms.dls]: 'Useful when you know the maximum depth. Prevents infinite loops in infinite graphs.',
    [Algorithms.dijkstra]: 'Best for single-source shortest paths with non-negative weights. Doesn\'t work with negative edges.',
    [Algorithms.bellmanFord]: 'Use when you have negative edge weights. Can detect negative cycles in the graph.',
    [Algorithms.floydWarshall]: 'Finds shortest paths between all pairs. Good for dense graphs and transitive closure.',
    [Algorithms.astar]: 'Optimal for pathfinding with good heuristic. Commonly used in games and robotics.',
    [Algorithms.prim]: 'Efficient for dense graphs. Builds MST by growing from a single vertex.',
    [Algorithms.kruskal]: 'Better for sparse graphs. Sorts edges and uses union-find for cycle detection.',
    [Algorithms.topologicalSort]: 'Only works on DAGs. Essential for dependency resolution and task scheduling.',
    [Algorithms.stronglyConnectedComponents]: 'Finds strongly connected components in directed graphs using Kosaraju\'s algorithm.',
    [Algorithms.bipartiteCheck]: 'Tests if graph can be 2-colored. Useful for matching problems and conflict detection.',
    [Algorithms.cycleDetection]: 'Detects cycles in graphs. Essential for deadlock detection and DAG verification.',
    [Algorithms.maxFlow]: 'Solves network flow problems. Useful for capacity planning and resource allocation.',
    [Algorithms.hamiltonianPath]: 'NP-complete problem. Use dynamic programming with bitmasks for small graphs.',
    [Algorithms.travelingSalesman]: 'Classic NP-complete problem. Held-Karp algorithm for exact solutions.'
  };
  return tips[algorithm] || 'Select an algorithm to see usage tips.';
};

const getAlgorithmApplications = (algorithm: Algorithms): string[] => {
  const applications: Record<Algorithms, string[]> = {
    [Algorithms.dfs]: ['Maze solving', 'Topological sorting', 'Detecting cycles', 'Connected components'],
    [Algorithms.bfs]: ['Social networks', 'Web crawling', 'GPS navigation', 'Peer-to-peer networks'],
    [Algorithms.iddfs]: ['AI search problems', 'Game tree search', 'Puzzle solving', 'Resource-limited search'],
    [Algorithms.dls]: ['Game AI with depth limits', 'Resource-constrained search', 'Iterative algorithms', 'Bounded exploration'],
    [Algorithms.dijkstra]: ['GPS navigation', 'Network routing', 'Social networks', 'Flight connections'],
    [Algorithms.bellmanFord]: ['Currency arbitrage', 'Network routing', 'Game theory', 'Economics modeling'],
    [Algorithms.floydWarshall]: ['Network analysis', 'Transitive closure', 'Game theory', 'Shortest distances'],
    [Algorithms.astar]: ['Game pathfinding', 'Robotics', 'GPS systems', 'Puzzle solving'],
    [Algorithms.prim]: ['Network design', 'Circuit design', 'Transportation', 'Cluster analysis'],
    [Algorithms.kruskal]: ['Network design', 'Image segmentation', 'Cluster analysis', 'Approximation algorithms'],
    [Algorithms.topologicalSort]: ['Task scheduling', 'Dependency resolution', 'Course prerequisites', 'Build systems'],
    [Algorithms.stronglyConnectedComponents]: ['Social network analysis', 'Web graph analysis', 'Compiler design', 'Model checking'],
    [Algorithms.bipartiteCheck]: ['Job matching', 'Stable marriage', 'Resource allocation', 'Conflict detection'],
    [Algorithms.cycleDetection]: ['Deadlock detection', 'Dependency analysis', 'Circuit analysis', 'Process scheduling'],
    [Algorithms.maxFlow]: ['Traffic flow', 'Supply chain', 'Image segmentation', 'Project selection'],
    [Algorithms.hamiltonianPath]: ['DNA sequencing', 'Circuit design', 'Tournament scheduling', 'Puzzle games'],
    [Algorithms.travelingSalesman]: ['Logistics', 'Manufacturing', 'DNA sequencing', 'Circuit board design']  };
  return applications[algorithm] || ['General graph problems'];
};

const getBestUseCase = (algorithm: Algorithms): string => {
  const useCases: Record<Algorithms, string> = {
    [Algorithms.dfs]: 'Sparse graphs',
    [Algorithms.bfs]: 'Unweighted shortest paths',
    [Algorithms.iddfs]: 'Unknown solution depth',
    [Algorithms.dls]: 'Known depth limits',
    [Algorithms.dijkstra]: 'Non-negative weights',
    [Algorithms.bellmanFord]: 'Negative edge weights',
    [Algorithms.floydWarshall]: 'Dense graphs',
    [Algorithms.astar]: 'Good heuristics available',
    [Algorithms.prim]: 'Dense graphs',
    [Algorithms.kruskal]: 'Sparse graphs',
    [Algorithms.topologicalSort]: 'DAGs only',
    [Algorithms.stronglyConnectedComponents]: 'Directed graphs',
    [Algorithms.bipartiteCheck]: 'Matching problems',
    [Algorithms.cycleDetection]: 'Dependency analysis',
    [Algorithms.maxFlow]: 'Network capacity problems',
    [Algorithms.hamiltonianPath]: 'Small complete graphs',
    [Algorithms.travelingSalesman]: 'Small graphs (<20 nodes)'
  };
  return useCases[algorithm] || 'General use';
};

const getWorstCase = (algorithm: Algorithms): string => {
  const worstCases: Record<Algorithms, string> = {
    [Algorithms.dfs]: 'Deep linear chains',
    [Algorithms.bfs]: 'Wide shallow trees',
    [Algorithms.iddfs]: 'Very deep solutions',
    [Algorithms.dls]: 'Solution beyond limit',
    [Algorithms.dijkstra]: 'Negative edge weights',
    [Algorithms.bellmanFord]: 'Dense graphs',
    [Algorithms.floydWarshall]: 'Large sparse graphs',
    [Algorithms.astar]: 'Poor heuristics',
    [Algorithms.prim]: 'Sparse graphs',
    [Algorithms.kruskal]: 'Dense graphs',
    [Algorithms.topologicalSort]: 'Cyclic graphs',
    [Algorithms.stronglyConnectedComponents]: 'Undirected graphs',
    [Algorithms.bipartiteCheck]: 'Odd cycles',
    [Algorithms.cycleDetection]: 'Large dense graphs',
    [Algorithms.maxFlow]: 'Poor capacity choices',
    [Algorithms.hamiltonianPath]: 'Large sparse graphs',
    [Algorithms.travelingSalesman]: 'Large graphs (>25 nodes)'
  };
  return worstCases[algorithm] || 'Complex scenarios';
};

const getAlgorithmYear = (algorithm: Algorithms): string => {
  const years: Record<Algorithms, string> = {
    [Algorithms.dfs]: '1800s',
    [Algorithms.bfs]: '1945',
    [Algorithms.iddfs]: '1985',
    [Algorithms.dls]: '1950s',
    [Algorithms.dijkstra]: '1956',
    [Algorithms.bellmanFord]: '1958',
    [Algorithms.floydWarshall]: '1962',
    [Algorithms.astar]: '1968',
    [Algorithms.prim]: '1957',
    [Algorithms.kruskal]: '1956',
    [Algorithms.topologicalSort]: '1962',
    [Algorithms.stronglyConnectedComponents]: '1972',
    [Algorithms.bipartiteCheck]: '1890s',
    [Algorithms.cycleDetection]: '1800s',
    [Algorithms.maxFlow]: '1956',
    [Algorithms.hamiltonianPath]: '1857',
    [Algorithms.travelingSalesman]: '1930s'
  };
  return years[algorithm] || 'Unknown';
};

const getQuickFacts = (algorithm: Algorithms): string[] => {
  const facts: Record<Algorithms, string[]> = {
    [Algorithms.dfs]: [
      'Can be implemented recursively or with an explicit stack',
      'Natural choice for backtracking algorithms',
      'Uses O(h) space where h is the maximum depth'
    ],
    [Algorithms.bfs]: [
      'Guarantees shortest path in unweighted graphs',
      'Layer-by-layer exploration pattern',
      'Uses O(w) space where w is maximum width'
    ],
    [Algorithms.dijkstra]: [
      'Named after Dutch computer scientist Edsger Dijkstra',
      'Won the Turing Award in 1972',
      'Uses a priority queue for efficiency'
    ],
    [Algorithms.bellmanFord]: [
      'Can detect negative weight cycles',
      'Slower than Dijkstra but more versatile',
      'Uses dynamic programming approach'
    ],
    [Algorithms.floydWarshall]: [
      'Computes shortest paths between all pairs',
      'Uses dynamic programming with 3 nested loops',
      'Good for dense graphs or when you need all distances'
    ],
    [Algorithms.astar]: [
      'Combines Dijkstra with heuristic guidance',
      'Widely used in game AI and robotics',
      'Optimal if heuristic is admissible'
    ],
    [Algorithms.prim]: [
      'Grows MST one vertex at a time',
      'Similar to Dijkstra but for MST',
      'Works well with adjacency matrix representation'
    ],
    [Algorithms.kruskal]: [
      'Sorts edges by weight first',
      'Uses Union-Find data structure',
      'Better for sparse graphs'
    ],
    [Algorithms.topologicalSort]: [
      'Only works on Directed Acyclic Graphs (DAGs)',
      'Essential for scheduling and dependency resolution',
      'Can be done with DFS or BFS (Kahn\'s algorithm)'
    ],
    [Algorithms.stronglyConnectedComponents]: [
      'Uses two DFS passes (Kosaraju\'s algorithm)',
      'Important for analyzing directed graph structure',
      'Applications in compiler design and social networks'
    ],
    [Algorithms.bipartiteCheck]: [
      'Graph is bipartite if and only if it has no odd cycles',
      'Can be checked using graph coloring',
      'Important in matching theory'
    ],
    [Algorithms.cycleDetection]: [
      'Different approaches for directed vs undirected graphs',
      'Uses DFS with color coding',
      'Essential for deadlock detection'
    ],
    [Algorithms.maxFlow]: [
      'Ford-Fulkerson method with various implementations',
      'Min-cut equals max-flow (famous theorem)',
      'Many real-world applications in network flow'
    ],
    [Algorithms.hamiltonianPath]: [
      'NP-complete problem - no known polynomial solution',
      'Dynamic programming solution using bitmasks',
      'Related to the famous Traveling Salesman Problem'
    ],
    [Algorithms.travelingSalesman]: [
      'One of the most famous NP-complete problems',
      'Held-Karp algorithm gives optimal solution in O(n²2ⁿ)',
      'Many approximation algorithms exist'
    ],
    [Algorithms.iddfs]: [
      'Combines benefits of DFS and BFS',
      'Memory efficient like DFS, complete like BFS',
      'Good for search problems with unknown solution depth'
    ],
    [Algorithms.dls]: [
      'Useful when you know the solution depth',
      'Prevents infinite loops in infinite search spaces',
      'Building block for iterative deepening search'
    ]
  };
  return facts[algorithm] || ['Efficient graph algorithm', 'Widely used in computer science', 'Has practical applications'];
};

const RightSidebar: React.FC<Props> = (props: Props): ReactElement => {
  const currentAlgorithm = algorithmData[props.selectedAlgorithm] || algorithmData[Algorithms.dfs];

  return (
    <DualSideNav isVisible={props.isVisible} side="right">
      <div style={{ padding: '16px 0', height: '100%', overflow: 'auto' }}>
        
        {/* Algorithms Header */}
        <OptionsTitle>Algorithm Selection</OptionsTitle>
          {/* Algorithm Dropdown */}
        <AlgorithmDropdown
          selectedAlgorithm={props.selectedAlgorithm}
          setSelectedAlgorithm={props.setSelectedAlgorithm}
        />

        <SectionDivider />
        
        {/* Performance Optimizer */}
        <PerformanceOptimizer
          selectedAlgorithm={props.selectedAlgorithm}
          nodeCount={props.adjacencyList?.length || 0}
          edgeCount={props.adjacencyList?.reduce((sum, neighbors) => sum + neighbors.length, 0) || 0}
          onOptimizationSuggestion={(suggestion) => console.log('Optimization suggestion:', suggestion)}
        />

        <SectionDivider />
        
        {/* Algorithm Description */}
        <DescriptionContainer>
          <DescriptionTitle>{currentAlgorithm.name}</DescriptionTitle>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <DescriptionBadge>{currentAlgorithm.type}</DescriptionBadge>
            <DescriptionBadge style={{ 
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 142, 83, 0.2))',
              color: '#ff6b6b',
              borderColor: 'rgba(255, 107, 107, 0.3)'
            }}>
              {currentAlgorithm.category}
            </DescriptionBadge>
          </div>
          <DescriptionText>{currentAlgorithm.description}</DescriptionText>
          
          <DescriptionStats>
            <StatItem>
              <div className="stat-label">Time</div>
              <div className="stat-value">{currentAlgorithm.timeComplexity}</div>
            </StatItem>
            <StatItem>
              <div className="stat-label">Space</div>
              <div className="stat-value">{currentAlgorithm.spaceComplexity}</div>
            </StatItem>
          </DescriptionStats>
        </DescriptionContainer>

        <SectionDivider />        {/* Algorithm Characteristics */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Key Features</OptionsTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {currentAlgorithm.characteristics.map((char: string, index: number) => (
            <div
              key={index}
              style={{
                padding: '8px 12px',
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
                border: '1px solid rgba(79, 172, 254, 0.2)',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#4facfe',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
                }}
              />
              {char}
            </div>
          ))}
        </div>

        <SectionDivider />        {/* Usage Tips */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Usage Tips</OptionsTitle>
        <div
          style={{
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            fontSize: '12px',
            lineHeight: '1.5',
            opacity: 0.8
          }}
        >
          💡 {getAlgorithmTip(props.selectedAlgorithm)}
        </div>

        <SectionDivider />

        {/* Real-world Applications */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Applications</OptionsTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {getAlgorithmApplications(props.selectedAlgorithm).map((app, index) => (
            <div
              key={index}
              style={{
                padding: '6px 10px',
                background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.08), rgba(0, 242, 254, 0.08))',
                border: '1px solid rgba(79, 172, 254, 0.15)',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '500',
                color: '#4facfe',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <div style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4facfe, #00f2fe)'
              }} />
              {app}
            </div>          ))}
        </div>

        <SectionDivider />

        {/* Algorithm Benchmark */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Performance Info</OptionsTitle>
        <div
          style={{
            padding: '12px',
            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
            border: '1px solid rgba(79, 172, 254, 0.3)',
            borderRadius: '8px',
            fontSize: '12px',
            lineHeight: '1.4'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '600', color: '#4facfe' }}>Best for:</span>
            <span>{getBestUseCase(props.selectedAlgorithm)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '600', color: '#4facfe' }}>Worst case:</span>
            <span>{getWorstCase(props.selectedAlgorithm)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontWeight: '600', color: '#4facfe' }}>Invented:</span>
            <span>{getAlgorithmYear(props.selectedAlgorithm)}</span>
          </div>
        </div>

        <SectionDivider />

        {/* Quick Facts */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Quick Facts</OptionsTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {getQuickFacts(props.selectedAlgorithm).map((fact: string, index: number) => (
            <div
              key={index}
              style={{
                padding: '8px 12px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                fontSize: '11px',
                lineHeight: '1.4',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}
            >
              <span style={{ color: '#4facfe', fontWeight: 'bold', fontSize: '14px' }}>•</span>
              <span>{fact}</span>
            </div>
          ))}
        </div>

      </div>
    </DualSideNav>
  );
};

export default RightSidebar;

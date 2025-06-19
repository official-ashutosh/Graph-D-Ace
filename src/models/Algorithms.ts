enum Algorithms {
  // Traversal Algorithms
  dfs = "DFS",
  bfs = "BFS",
  iddfs = "IDDFS",
  dls = "DLS",
  
  // Shortest Path Algorithms
  dijkstra = "Dijkstra",
  bellmanFord = "Bellman-Ford",
  floydWarshall = "Floyd-Warshall",
  astar = "A*",
  
  // Minimum Spanning Tree
  prim = "Prim",
  kruskal = "Kruskal",
  
  // Topological Algorithms
  topologicalSort = "Topological-Sort",
  stronglyConnectedComponents = "SCC",
  
  // Graph Properties
  bipartiteCheck = "Bipartite-Check",
  cycleDetection = "Cycle-Detection",
  
  // Flow Algorithms
  maxFlow = "Max-Flow",
  
  // Advanced Algorithms
  hamiltonianPath = "Hamiltonian-Path",
  travelingSalesman = "TSP"
}

export default Algorithms;

import dfsWrapper from "./dfs";
import dijkstra from "./dijkstra";
import bfs from "./bfs";
import bellmanFord from "./bellmanFord";
import iddfs from "./iddfs";
import dls from "./dls";
import floydWarshall from "./floydWarshall";
import kruskal from "./kruskal";
import topologicalSort from "./topologicalSort";

// Placeholder implementations for advanced algorithms
const astar = async () => console.log("A* algorithm - Coming soon!");
const stronglyConnectedComponents = async () => console.log("SCC algorithm - Coming soon!");
const bipartiteCheck = async () => console.log("Bipartite check - Coming soon!");
const cycleDetection = async () => console.log("Cycle detection - Coming soon!");
const maxFlow = async () => console.log("Max flow algorithm - Coming soon!");
const hamiltonianPath = async () => console.log("Hamiltonian path - Coming soon!");
const travelingSalesman = async () => console.log("TSP algorithm - Coming soon!");

const algorithms = {
  dfs: dfsWrapper,
  bfs: bfs,
  iddfs: iddfs,
  dls: dls,
  dijkstra: dijkstra,
  bellmanFord: bellmanFord,
  floydWarshall: floydWarshall,
  astar: astar,
  prim: dijkstra, // Using dijkstra as placeholder for prim
  kruskal: kruskal,
  topologicalSort: topologicalSort,
  stronglyConnectedComponents: stronglyConnectedComponents,
  bipartiteCheck: bipartiteCheck,
  cycleDetection: cycleDetection,
  maxFlow: maxFlow,
  hamiltonianPath: hamiltonianPath,
  travelingSalesman: travelingSalesman,
};

export default algorithms;

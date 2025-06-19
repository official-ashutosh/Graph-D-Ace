// Floyd-Warshall Algorithm - All pairs shortest path
import asyncTimeout from '../helpers/asyncTimout';

interface GraphState {
  setVisited: (visited: Array<number>) => void;
  setCurrentEdge: (edge: [number, number]) => void;
  setGraphInfo: (info: Array<any>) => void;
}

const floydWarshall = async (
  adjacencyList: Array<Array<number>>,
  graphState: GraphState,
  speed: number = 1000
): Promise<void> => {
  const n = adjacencyList.length;
  if (n === 0) return;

  // Initialize distance matrix
  const dist: number[][] = Array(n).fill(null).map(() => Array(n).fill(Infinity));
  
  // Set distance from each vertex to itself as 0
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
    graphState.setVisited([i]);
    await asyncTimeout(speed);
  }

  // Set distances for direct edges
  for (let i = 0; i < n; i++) {
    for (let j of adjacencyList[i]) {
      dist[i][j] = 1; // Assuming unit weight for simplicity
      graphState.setCurrentEdge([i, j]);
      await asyncTimeout(speed);
    }
  }

  // Floyd-Warshall main algorithm
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
          graphState.setCurrentEdge([i, j]);
          graphState.setVisited([i, k, j]);
          await asyncTimeout(speed);
        }
      }
    }
  }

  // Clear visualization
  graphState.setVisited([]);
  graphState.setCurrentEdge([-1, -1]);
};

export default floydWarshall;

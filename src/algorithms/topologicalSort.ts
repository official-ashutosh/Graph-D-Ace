// Topological Sort Algorithm
import asyncTimeout from '../helpers/asyncTimout';

interface GraphState {
  setVisited: (visited: Array<number>) => void;
  setCurrentEdge: (edge: [number, number]) => void;
  setGraphInfo: (info: Array<any>) => void;
}

const topologicalSort = async (
  adjacencyList: Array<Array<number>>,
  graphState: GraphState,
  speed: number = 1000
): Promise<void> => {
  const n = adjacencyList.length;
  if (n === 0) return;

  // Calculate in-degrees
  const inDegree = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let neighbor of adjacencyList[i]) {
      inDegree[neighbor]++;
    }
  }

  // Initialize queue with vertices having 0 in-degree
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result: number[] = [];
  
  while (queue.length > 0) {
    const current = queue.shift()!;
    result.push(current);
    
    // Highlight current vertex
    graphState.setVisited([current]);
    await asyncTimeout(speed);

    // Process all neighbors
    for (let neighbor of adjacencyList[current]) {
      graphState.setCurrentEdge([current, neighbor]);
      await asyncTimeout(speed / 2);
      
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // Show final topological order
  graphState.setVisited(result);
  await asyncTimeout(speed * 2);
  
  // Clear visualization
  graphState.setVisited([]);
  graphState.setCurrentEdge([-1, -1]);
};

export default topologicalSort;

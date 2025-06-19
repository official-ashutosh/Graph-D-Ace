// Kruskal's Algorithm - Minimum Spanning Tree
import asyncTimeout from '../helpers/asyncTimout';

interface GraphState {
  setVisited: (visited: Array<number>) => void;
  setCurrentEdge: (edge: [number, number]) => void;
  setGraphInfo: (info: Array<any>) => void;
}

interface Edge {
  from: number;
  to: number;
  weight: number;
}

class UnionFind {
  parent: number[];
  rank: number[];

  constructor(n: number) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    const px = this.find(x);
    const py = this.find(y);
    
    if (px === py) return false;
    
    if (this.rank[px] < this.rank[py]) {
      this.parent[px] = py;
    } else if (this.rank[px] > this.rank[py]) {
      this.parent[py] = px;
    } else {
      this.parent[py] = px;
      this.rank[px]++;
    }
    return true;
  }
}

const kruskal = async (
  adjacencyList: Array<Array<number>>,
  graphState: GraphState,
  speed: number = 1000
): Promise<void> => {
  const n = adjacencyList.length;
  if (n === 0) return;

  // Create edges from adjacency list
  const edges: Edge[] = [];
  for (let i = 0; i < n; i++) {
    for (let j of adjacencyList[i]) {
      if (i < j) { // Avoid duplicate edges for undirected graph
        edges.push({ from: i, to: j, weight: 1 }); // Assuming unit weight
      }
    }
  }

  // Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  const uf = new UnionFind(n);
  const mstEdges: Edge[] = [];

  // Process edges in order
  for (const edge of edges) {
    graphState.setCurrentEdge([edge.from, edge.to]);
    graphState.setVisited([edge.from, edge.to]);
    await asyncTimeout(speed);

    if (uf.union(edge.from, edge.to)) {
      mstEdges.push(edge);
      // Keep edge highlighted as part of MST
      await asyncTimeout(speed);
    }

    if (mstEdges.length === n - 1) break;
  }

  // Show final MST
  graphState.setVisited(mstEdges.flatMap(e => [e.from, e.to]));
  await asyncTimeout(speed * 2);
  
  // Clear visualization
  graphState.setVisited([]);
  graphState.setCurrentEdge([-1, -1]);
};

export default kruskal;

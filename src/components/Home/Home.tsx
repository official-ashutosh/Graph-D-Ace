import React, { ReactElement, useState } from "react";
import Navbar from "../Navbar/Navbar";
import LeftSidebar from "../SideNav/LeftSidebar";
import RightSidebar from "../SideNav/RightSidebar";
import DualToggleButton from "../SideNav/DualToggleButtonComponent";
import GraphCanvas from "../GraphCanvas/GraphCanvas";
import VisualizeButton from "../VisualizeButton/VisualizeButton";
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen";
import Footer from "../Footer/Footer";
import algorithms from "../../algorithms";
import Algorithms from "../../models/Algorithms";
import NodeInfo from "../../models/NodeInfo";
import CreateEdgeModal from "../CreateEdgeModal/CreateEdgeModal";
import { v4 as uuidv4 } from "uuid";
import AlgorithmOptions from "../../models/AlgorithmOptions";

interface HomeProps {
  changeTheme: Function;
  onHelpClick: () => void;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>([]);
  const [nodeKeys, setNodeKeys] = useState<Array<string>>([]);
  const [visited, setVisited] = useState<Array<number>>([]);
  const [currentEdge, setCurrentEdge] = useState<[number, number]>([-1, -1]);
  const [graphInfo, setGraphInfo] = useState<Array<NodeInfo>>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithms>(
    Algorithms.dfs
  );  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1000);
  const [isConnectingUndirected, setIsConnectingUndirected] = useState<boolean>(
    false
  );
  const [isConnectingDirected, setIsConnectingDirected] = useState<boolean>(
    false
  );

  // Welcome screen state
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  // Dual sidebar states
  const [isLeftSidebarVisible, setIsLeftSidebarVisible] = useState<boolean>(true);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState<boolean>(true);

  const [algorithmOptions, setAlgorithmOptions] = useState<AlgorithmOptions>({
    startNode: 0,
  });

  const resetGraphState = () => {
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setGraphInfo([]);
  };

  const addNewEdge = (
    firstNode: number,
    secondNode: number,
    isDirected: boolean
  ) => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode].push(secondNode);
    if (!isDirected) newAdjacencyList[secondNode].push(firstNode);
    setAdjacencyList(newAdjacencyList);
  };

  const connectNodes = (
    firstNode: number,
    secondNode: number,
    directed: boolean
  ) => {
    if (firstNode === undefined || secondNode === undefined) return;
    if (firstNode === secondNode) return;
    if (
      firstNode > adjacencyList.length - 1 ||
      secondNode > adjacencyList.length - 1
    )
      return;
    if (adjacencyList[firstNode].includes(secondNode)) return;
    if (adjacencyList[secondNode].includes(firstNode)) return;

    addNewEdge(firstNode, secondNode, directed);
  };

  const deleteEdge = (firstNode: number, secondNode: number) => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode] = newAdjacencyList[firstNode].filter(
      (val: number) => val !== secondNode
    );
    newAdjacencyList[secondNode] = newAdjacencyList[secondNode].filter(
      (val: number) => val !== firstNode
    );

    setAdjacencyList(newAdjacencyList);
    resetGraphState();
  };
  const deleteNode = (node: number) => {
    if (isVisualizing) return;
    let newAdjacencyList = adjacencyList.map((val: Array<number>) => {
      //remove node from neighbours and decrement all nodes bigger than the
      //removed node
      return val
        .filter((neighbour: number) => node !== neighbour)
        .map((current: number) => {
          if (current >= node) return current - 1;
          return current;
        });
    });

    newAdjacencyList = newAdjacencyList.filter(
      (_, index: number) => index !== node
    );

    const newNodeKeys = nodeKeys.filter((_, index: number) => index !== node);

    setNodeKeys(newNodeKeys);
    setAdjacencyList(newAdjacencyList);
    resetGraphState();

    const newAlgorithmOptions: AlgorithmOptions = Object.create(
      algorithmOptions
    );
    newAlgorithmOptions.startNode = 0;
    setAlgorithmOptions(newAlgorithmOptions);
  };

  const handleEdgeModalExit = () => {
    setIsConnectingUndirected(false);
    setIsConnectingDirected(false);
  };

  const onCreateUndirectedEdge = (firstNode: number, secondNode: number) => {
    connectNodes(firstNode, secondNode, isConnectingDirected);
  };

  const addNewNode = () => {
    if (isVisualizing) return;
    const newAdjacencyList = adjacencyList.slice();
    const newNodeKeys = nodeKeys.slice();
    newAdjacencyList.push([]);
    newNodeKeys.push(uuidv4());
    setNodeKeys(newNodeKeys);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
  };

  //TODO: switch case between algorithms
  const handleVisualize = async () => {
    if (adjacencyList.length === 0) return;
    if (isVisualizing) return;
    setIsVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setGraphInfo([]);

    const startingNode = algorithmOptions.startNode ?? 0;

    switch (selectedAlgorithm) {
      case Algorithms.dfs:
        await algorithms.dfs(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed,
          setCurrentEdge
        );
        break;

      case Algorithms.dijkstra:
        await algorithms.dijkstra(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed,
          setGraphInfo,
          setCurrentEdge
        );
        break;
      case Algorithms.bfs:
        await algorithms.bfs(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed,
          setGraphInfo,
          setCurrentEdge
        );
        break;
      case Algorithms.bellmanFord:
        await algorithms.bellmanFord(
          startingNode,
          adjacencyList,
          visualizationSpeed,
          setVisited,
          setGraphInfo,
          setCurrentEdge
        );
        break;
      case Algorithms.iddfs:
        await algorithms.iddfs(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed,
          setCurrentEdge
        );
        break;
      case Algorithms.dls:
        await algorithms.dls(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed,
          setCurrentEdge,
          algorithmOptions.depthLimit ?? 0
        );
        break;
      default:
        break;
    }
    setIsVisualizing(false);
  };

  const changeVisualizationSpeed = (speed: number) => {
    if (isVisualizing) return;
    setVisualizationSpeed(speed);
  };

  const changeZoomPercentage = (percentage: number) => {
    if (isVisualizing) return;
    setZoomPercentage(percentage);
  };

  const clearCanvas = () => {
    if (isVisualizing) return;
    setVisited([]);
    setAdjacencyList([]);
    setGraphInfo([]);
    setCurrentEdge([-1, -1]);
    setNodeKeys([]);
  };  return (
    <div className="modern-app-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      overflow: 'hidden'
    }}>
      {/* Modern Navbar */}
      <div className="navbar-wrapper animate-slide-in-left" style={{ 
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <Navbar
          onHelpClick={props.onHelpClick}
          changeTheme={props.changeTheme}
        />
      </div>
      
      {/* Main Content Area */}      <div className="main-content-area" style={{ 
        display: 'flex', 
        flex: 1, 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left Sidebar - Controls */}
        <LeftSidebar
          isVisible={isLeftSidebarVisible}
          onUndirectedEdgeClick={() => setIsConnectingUndirected(true)}
          onDirectedEdgeClick={() => setIsConnectingDirected(true)}
          adjacencyList={adjacencyList}
          addNewNode={addNewNode}
          setZoomPercentage={changeZoomPercentage}
          zoomPercentage={zoomPercentage}
          visualizationSpeed={visualizationSpeed}
          setVisualizationSpeed={changeVisualizationSpeed}
          clearCanvas={clearCanvas}
          algorithmOptions={algorithmOptions}
          setAlgorithmOptions={setAlgorithmOptions}
        />

        {/* Left Toggle Button */}
        <DualToggleButton
          isVisible={isLeftSidebarVisible}
          side="left"
          onClick={() => setIsLeftSidebarVisible(!isLeftSidebarVisible)}
        />        {/* Right Sidebar - Algorithms */}
        <RightSidebar
          isVisible={isRightSidebarVisible}
          selectedAlgorithm={selectedAlgorithm}
          setSelectedAlgorithm={setSelectedAlgorithm}
          adjacencyList={adjacencyList}
        />

        {/* Right Toggle Button */}
        <DualToggleButton
          isVisible={isRightSidebarVisible}
          side="right"
          onClick={() => setIsRightSidebarVisible(!isRightSidebarVisible)}
        />
        
        {/* Graph Canvas with Modern Effects */}
        <div className="canvas-wrapper animate-fade-in" style={{ 
          flex: 1,
          position: 'relative',
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
        }}>
          <GraphCanvas
            onNodeDelete={deleteNode}
            onEdgeDelete={deleteEdge}
            visited={visited}
            adjacencyList={adjacencyList}
            nodeKeys={nodeKeys}
            zoomPercentage={zoomPercentage}
            graphInfo={graphInfo}
            currentEdge={currentEdge}
            addNewNode={addNewNode}
            addNewEdge={addNewEdge}
            clearCanvas={clearCanvas}
          />
          
          {/* Floating Action Button */}
          <div className="floating-button-wrapper animate-scale-in">
            <VisualizeButton
              onClick={handleVisualize}
              isVisualizing={isVisualizing}
            />
          </div>
        </div>
      </div>
      
      {/* Modern Modal */}
      <CreateEdgeModal
        directed={isConnectingDirected}
        isVisible={isConnectingDirected || isConnectingUndirected}
        onExit={handleEdgeModalExit}
        onAddEdge={onCreateUndirectedEdge}
        adjacencyList={adjacencyList}
      />
      
      {/* Background Effects */}
      <div className="background-effects" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,        bottom: 0,
        pointerEvents: 'none',
        zIndex: -1,
        background: `
          radial-gradient(circle at 20% 50%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(79, 172, 254, 0.05) 0%, transparent 50%)
        `
      }} />      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen onClose={() => setShowWelcome(false)} />}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

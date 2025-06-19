import React, { ReactElement, useState } from 'react';
import DualSideNav from './DualSideNav';
import { OptionsContainer, OptionButton, OptionsTitle, SectionDivider } from './ModernOptions';
import ModernClearButton from './ModernClearButton';
import { SliderContainer, SliderTrack, SliderFill, SliderInput, SliderThumb } from './ModernSlider';
import { FeatureCard, FeatureTitle, FeatureDescription, ToggleSwitch, NumberInput, ActionButton } from './AdvancedFeatures';
import GraphStats from './GraphStats';
import { AddIcon, UndirectedIcon, DirectedIcon } from './Options/OptionIcons';
import Row from '../common/Row';

interface Props {
  isVisible: boolean;
  adjacencyList: Array<Array<number>>;
  addNewNode: () => void;
  onUndirectedEdgeClick: () => void;
  onDirectedEdgeClick: () => void;
  clearCanvas: () => void;
  zoomPercentage: number;
  setZoomPercentage: (percentage: number) => void;
  visualizationSpeed: number;
  setVisualizationSpeed: (speed: number) => void;
  algorithmOptions: any;
  setAlgorithmOptions: (options: any) => void;
}

const LeftSidebar: React.FC<Props> = (props: Props): ReactElement => {
  const [isWeightedGraph, setIsWeightedGraph] = useState<boolean>(false);
  const [isDirectedGraph, setIsDirectedGraph] = useState<boolean>(false);
  const [nodeWeight, setNodeWeight] = useState<number>(1);
  const [edgeWeight, setEdgeWeight] = useState<number>(1);
  const [maxNodes, setMaxNodes] = useState<number>(50);

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setZoomPercentage(parseFloat(e.target.value));
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setVisualizationSpeed(parseFloat(e.target.value));
  };

  const handleStartNodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOptions = { ...props.algorithmOptions };
    newOptions.startNode = parseInt(e.target.value);
    props.setAlgorithmOptions(newOptions);
  };

  const generateRandomGraph = () => {
    // Generate random graph logic would go here
    console.log('Generating random graph with', maxNodes, 'nodes');
  };

  const exportGraph = () => {
    // Export graph logic
    console.log('Exporting graph...');
  };

  const importGraph = () => {
    // Import graph logic
    console.log('Importing graph...');
  };

  return (
    <DualSideNav isVisible={props.isVisible} side="left">
      <div style={{ padding: '16px 0', height: '100%', overflow: 'auto' }}>
        
        {/* Graph Controls Header */}
        <OptionsTitle>Graph Controls</OptionsTitle>
        
        {/* Add Node & Edge Options */}
        <OptionsContainer>
          <OptionButton onClick={props.addNewNode} title="Add Node">
            <AddIcon />
          </OptionButton>
          <OptionButton onClick={props.onUndirectedEdgeClick} title="Add Undirected Edge">
            <UndirectedIcon />
          </OptionButton>
          <OptionButton onClick={props.onDirectedEdgeClick} title="Add Directed Edge">
            <DirectedIcon />
          </OptionButton>
        </OptionsContainer>

        <SectionDivider />

        {/* Starting Node Selection */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Starting Node</OptionsTitle>
        <select 
          value={props.algorithmOptions.startNode || 0}
          onChange={handleStartNodeChange}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '2px solid rgba(79, 172, 254, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: 'inherit',
            fontSize: '14px',
            fontWeight: '600',
            outline: 'none',
            transition: 'all 0.3s ease',
            marginBottom: '16px'
          }}
        >
          {props.adjacencyList.map((_, index) => (
            <option key={index} value={index} style={{ background: '#1a1a1a', color: '#fff' }}>
              Node {index + 1}
            </option>
          ))}
        </select>

        <SectionDivider />

        {/* Zoom Control */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '8px' }}>Zoom</OptionsTitle>
        <SliderContainer>
          <SliderTrack>
            <SliderFill percentage={props.zoomPercentage * 100} />
            <SliderInput
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={props.zoomPercentage}
              onChange={handleZoomChange}
            />
            <SliderThumb percentage={((props.zoomPercentage - 0.5) / 1.5) * 100} />
          </SliderTrack>
        </SliderContainer>
        <Row justifyContent="space-between" margin="8px 0">
          <span style={{ fontSize: '12px', opacity: 0.7 }}>50%</span>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#4facfe' }}>
            {Math.round(props.zoomPercentage * 100)}%
          </span>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>200%</span>
        </Row>

        <SectionDivider />

        {/* Speed Control */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '8px' }}>Animation Speed</OptionsTitle>
        <SliderContainer>
          <SliderTrack>
            <SliderFill percentage={((2000 - props.visualizationSpeed) / 1800) * 100} />
            <SliderInput
              type="range"
              min="200"
              max="2000"
              step="100"
              value={props.visualizationSpeed}
              onChange={handleSpeedChange}
            />
            <SliderThumb percentage={((2000 - props.visualizationSpeed) / 1800) * 100} />
          </SliderTrack>
        </SliderContainer>
        <Row justifyContent="space-between" margin="8px 0">
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Slow</span>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#4facfe' }}>
            {props.visualizationSpeed < 500 ? 'Fast' : 
             props.visualizationSpeed < 1000 ? 'Medium' : 
             props.visualizationSpeed < 1500 ? 'Slow' : 'Very Slow'}
          </span>
          <span style={{ fontSize: '12px', opacity: 0.7 }}>Fast</span>
        </Row>

        <SectionDivider />        {/* Clear Canvas Button */}
        <ModernClearButton onClick={props.clearCanvas}>
          Clear Canvas
        </ModernClearButton>        <SectionDivider />

        {/* Graph Statistics */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Graph Statistics</OptionsTitle>
        <GraphStats 
          adjacencyList={props.adjacencyList}
          nodeKeys={[]} // You can pass actual node keys if available
        />

        <SectionDivider />

        {/* Advanced Graph Features */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Graph Properties</OptionsTitle>
        
        <FeatureCard>
          <Row justifyContent="space-between" margin="0 0 8px 0">
            <FeatureTitle>Weighted Graph</FeatureTitle>
            <ToggleSwitch 
              isEnabled={isWeightedGraph} 
              onClick={() => setIsWeightedGraph(!isWeightedGraph)}
            />
          </Row>
          <FeatureDescription>Enable edge weights for shortest path algorithms</FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <Row justifyContent="space-between" margin="0 0 8px 0">
            <FeatureTitle>Directed Graph</FeatureTitle>
            <ToggleSwitch 
              isEnabled={isDirectedGraph} 
              onClick={() => setIsDirectedGraph(!isDirectedGraph)}
            />
          </Row>
          <FeatureDescription>Create directed edges between vertices</FeatureDescription>
        </FeatureCard>

        <SectionDivider />

        {/* Graph Generation */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Graph Generation</OptionsTitle>
        
        <FeatureCard>
          <FeatureTitle>Random Graph</FeatureTitle>
          <FeatureDescription style={{ marginBottom: '8px' }}>Generate a random graph with specified nodes</FeatureDescription>
          <NumberInput
            type="number"
            value={maxNodes}
            onChange={(e) => setMaxNodes(parseInt(e.target.value))}
            placeholder="Max nodes (1-100)"
            min="1"
            max="100"
            style={{ marginBottom: '8px' }}
          />
          <ActionButton onClick={generateRandomGraph}>
            Generate Random Graph
          </ActionButton>
        </FeatureCard>

        <SectionDivider />

        {/* Import/Export */}
        <OptionsTitle style={{ fontSize: '14px', marginBottom: '12px' }}>Import/Export</OptionsTitle>
        
        <Row justifyContent="space-between" margin="0 0 8px 0">
          <ActionButton variant="secondary" onClick={importGraph} style={{ width: '48%' }}>
            Import
          </ActionButton>
          <ActionButton variant="secondary" onClick={exportGraph} style={{ width: '48%' }}>
            Export
          </ActionButton>
        </Row>

        {isWeightedGraph && (
          <FeatureCard>
            <FeatureTitle>Default Edge Weight</FeatureTitle>
            <NumberInput
              type="number"
              value={edgeWeight}
              onChange={(e) => setEdgeWeight(parseFloat(e.target.value))}
              placeholder="Edge weight"
              min="0.1"
              step="0.1"
            />
          </FeatureCard>
        )}

      </div>
    </DualSideNav>
  );
};

export default LeftSidebar;

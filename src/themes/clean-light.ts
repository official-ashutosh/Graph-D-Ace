import Theme from '../models/Theme';

const light: Theme = {
  name: 'light',
  navbar: {
    background: '#ffffff',
    foreground: '#1f2937',
    backdropFilter: 'none',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  sidebar: {
    background: '#ffffff',
    foreground: '#374151',
    backdropFilter: 'none',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  canvas: {
    background: '#f9fafb',
    foreground: '#374151',
  },
  nodeActive: {
    background: '#3b82f6',
    foreground: 'white',
    glow: '0 0 20px rgba(59, 130, 246, 0.5)',
    transform: 'scale(1.1)',
    animation: 'none',
  },
  nodeInactive: {
    background: '#ffffff',
    foreground: '#374151',
    border: '2px solid #3b82f6',
    backdropFilter: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  edge: {
    background: '#6b7280',
    glow: 'none',
    animated: false,
  },
  slider: {
    background: '#3b82f6',
    foreground: '#ffffff',
    track: '#e5e7eb',
    thumb: '#3b82f6',
    glow: 'none',
  },
  button: {
    background: '#3b82f6',
    primary: '#3b82f6',
    secondary: '#f3f4f6',
    hover: '#2563eb',
    shadow: '0 2px 4px rgba(0,0,0,0.1)',
    transform: 'translateY(-1px)',
  },
  modal: {
    background: '#ffffff',
    backdrop: 'rgba(0,0,0,0.5)',
    backdropFilter: 'none',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
  },
  animations: {
    transition: 'all 0.2s ease',
    bounce: 'ease',
    easeInOut: 'ease-in-out',
  },
};

export default light;

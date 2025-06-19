import Theme from '../models/Theme';

const dark: Theme = {
  name: 'dark',
  navbar: {
    background: '#1f2937',
    foreground: '#f9fafb',
    backdropFilter: 'none',
    borderBottom: '1px solid #374151',
    boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  },
  sidebar: {
    background: '#1f2937',
    foreground: '#e5e7eb',
    backdropFilter: 'none',
    border: '1px solid #374151',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
  },
  canvas: {
    background: '#111827',
    foreground: '#e5e7eb',
  },
  nodeActive: {
    background: '#ef4444',
    foreground: 'white',
    glow: '0 0 20px rgba(239, 68, 68, 0.5)',
    transform: 'scale(1.1)',
    animation: 'none',
  },
  nodeInactive: {
    background: '#374151',
    foreground: '#e5e7eb',
    border: '2px solid #6b7280',
    backdropFilter: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  edge: {
    background: '#9ca3af',
    glow: 'none',
    animated: false,
  },
  slider: {
    background: '#ef4444',
    foreground: '#ffffff',
    track: '#374151',
    thumb: '#ef4444',
    glow: 'none',
  },
  button: {
    background: '#ef4444',
    primary: '#ef4444',
    secondary: '#374151',
    hover: '#dc2626',
    shadow: '0 2px 4px rgba(0,0,0,0.3)',
    transform: 'translateY(-1px)',
  },
  modal: {
    background: '#1f2937',
    backdrop: 'rgba(0,0,0,0.7)',
    backdropFilter: 'none',
    borderRadius: '8px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
  },
  animations: {
    transition: 'all 0.2s ease',
    bounce: 'ease',
    easeInOut: 'ease-in-out',
  },
};

export default dark;

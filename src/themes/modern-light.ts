import Theme from '../models/Theme';

const modernLightTheme: Theme = {
  name: 'modern-light',
  navbar: {
    background: 'rgba(255, 255, 255, 0.85)',
    foreground: '#2d3748', // Darker text for better contrast
    backdropFilter: 'blur(15px) saturate(180%)',
    borderBottom: '1px solid rgba(45, 55, 72, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  sidebar: {
    background: 'rgba(255, 255, 255, 0.9)', // More opaque for better readability
    foreground: '#2d3748', // Consistent dark text
    backdropFilter: 'blur(12px) saturate(180%)',
    border: '1px solid rgba(45, 55, 72, 0.15)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
  canvas: {
    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)', // Softer gradient
    foreground: '#2d3748',
  },
  nodeActive: {
    background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)', // Professional blue
    foreground: 'white',
    glow: '0 0 30px rgba(49, 130, 206, 0.6)',
    transform: 'scale(1.15)',
    animation: 'pulse 1.5s infinite',
  },
  nodeInactive: {
    background: '#ffffff',
    foreground: '#2d3748',
    border: '2px solid #3182ce',
    backdropFilter: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  edge: {
    background: '#4a5568', // Professional gray
    glow: '0 0 8px rgba(74, 85, 104, 0.5)',
    animated: true,
  },
  slider: {
    background: '#3182ce',
    foreground: '#ffffff',
    track: '#e2e8f0', // Light gray track
    thumb: '#2b6cb0',
    glow: '0 0 10px rgba(43, 108, 176, 0.5)',
  },
  button: {
    background: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)',
    primary: 'linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%)',
    secondary: 'rgba(255, 255, 255, 0.9)',
    hover: 'linear-gradient(135deg, #2b6cb0 0%, #3182ce 100%)',
    shadow: '0 4px 20px rgba(49, 130, 206, 0.3)',
    transform: 'translateY(-2px)',
  },
  modal: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
  },
  animations: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  },
};

export default modernLightTheme;

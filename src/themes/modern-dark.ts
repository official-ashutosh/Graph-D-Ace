import Theme from '../models/Theme';

const modernDarkTheme: Theme = {
  name: 'modern-dark',
  navbar: {
    background: 'rgba(23, 32, 42, 0.75)', // Darker, slightly transparent
    foreground: '#eaf0f1', // Light text
    backdropFilter: 'blur(14px) saturate(180%)',
    borderBottom: '1px solid rgba(234, 240, 241, 0.1)',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
  },
  sidebar: {
    background: 'rgba(33, 47, 61, 0.8)', // Dark, slightly transparent
    foreground: '#d5dbdb', // Softer light text
    backdropFilter: 'blur(12px) saturate(180%)',
    border: '1px solid rgba(213, 219, 219, 0.15)',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)',
  },
  canvas: {
    background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', // Dark gradient
    foreground: '#d5dbdb',
  },
  nodeActive: {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)', // Vibrant red/orange gradient
    foreground: 'white',
    glow: '0 0 28px rgba(255, 107, 107, 0.7)',
    transform: 'scale(1.15)',
    animation: 'pulse 1.5s infinite',
  },
  nodeInactive: {
    background: '#34495e', // Darker node background
    foreground: '#eaf0f1',
    border: '2px solid #ff6b6b',
    backdropFilter: 'none',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.25)',
  },
  edge: {
    background: '#95a5a6', // Lighter gray for contrast on dark bg
    glow: '0 0 10px rgba(149, 165, 166, 0.5)',
    animated: true,
  },
  slider: {
    background: '#ff6b6b',
    foreground: '#ffffff',
    track: '#566573', // Darker track
    thumb: '#ff8e53',
    glow: '0 0 12px rgba(255, 142, 83, 0.5)',
  },
  button: {
    background: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
    primary: 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
    secondary: 'rgba(44, 62, 80, 0.9)',
    hover: 'linear-gradient(135deg, #ff8e53 0%, #ff6b6b 100%)',
    shadow: '0 4px 18px rgba(255, 107, 107, 0.4)',
    transform: 'translateY(-2px)',
  },
  modal: {
    background: 'rgba(33, 47, 61, 0.9)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)',
  },
  animations: {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
  },
};

export default modernDarkTheme;

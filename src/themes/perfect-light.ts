import Theme from '../models/Theme';

const light: Theme = {
  name: 'light',
  navbar: {
    background: 'rgba(255, 255, 255, 0.95)',
    foreground: '#1a202c',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  },
  sidebar: {
    background: 'rgba(255, 255, 255, 0.95)',
    foreground: '#2d3748',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  canvas: {
    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
    foreground: '#2d3748',
  },
  nodeActive: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    foreground: 'white',
    glow: '0 0 30px rgba(102, 126, 234, 0.6)',
    transform: 'scale(1.1)',
    animation: 'pulse 2s infinite',
  },
  nodeInactive: {
    background: 'rgba(255, 255, 255, 0.95)',
    foreground: '#2d3748',
    border: '2px solid rgba(102, 126, 234, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
  edge: {
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    glow: '0 0 10px rgba(102, 126, 234, 0.4)',
    animated: true,
  },
  slider: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    foreground: '#ffffff',
    track: 'rgba(102, 126, 234, 0.15)',
    thumb: 'linear-gradient(135deg, #667eea, #764ba2)',
    glow: '0 0 15px rgba(102, 126, 234, 0.5)',
  },
  button: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    primary: 'linear-gradient(135deg, #667eea, #764ba2)',
    secondary: 'rgba(255, 255, 255, 0.95)',
    hover: 'linear-gradient(135deg, #5a67d8, #6b46c1)',
    shadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
    transform: 'translateY(-2px)',
  },
  modal: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdrop: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(15px)',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
  },
  animations: {
    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
};

export default light;

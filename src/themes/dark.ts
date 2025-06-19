import Theme from '../models/Theme';

const dark: Theme = {
  name: 'dark',  navbar: {
    background: 'rgba(26, 32, 44, 0.95)',
    foreground: '#e2e8f0',
    backdropFilter: 'blur(15px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  sidebar: {
    background: 'linear-gradient(145deg, rgba(20,25,40,0.95), rgba(15,20,35,0.95))',
    foreground: '#e2e8f0',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  },  canvas: {
    background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
    foreground: '#e2e8f0',
  },
  nodeActive: {
    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    foreground: 'white',
    glow: '0 0 25px rgba(255, 107, 107, 0.7)',
    transform: 'scale(1.1)',
    animation: 'pulse 2s infinite',
  },
  nodeInactive: {
    background: 'linear-gradient(135deg, rgba(45,55,72,0.9), rgba(30,41,59,0.9))',
    foreground: '#e2e8f0',
    border: '2px solid rgba(255, 107, 107, 0.3)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  },
  edge: {
    background: 'linear-gradient(90deg, #ff6b6b, #ee5a24)',
    glow: '0 0 15px rgba(255, 107, 107, 0.5)',
    animated: true,
  },
  slider: {
    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    foreground: '#ffffff',
    track: 'rgba(255, 107, 107, 0.2)',
    thumb: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    glow: '0 0 15px rgba(255, 107, 107, 0.5)',
  },  button: {
    background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    primary: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    secondary: 'linear-gradient(135deg, rgba(45,55,72,0.9), rgba(30,41,59,0.9))',
    hover: 'linear-gradient(135deg, #ff5252, #e53e3e)',
    shadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
    transform: 'translateY(-2px)',
  },
  modal: {
    background: 'rgba(20,25,40,0.95)',
    backdrop: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(15px)',
    borderRadius: '20px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
  },
  animations: {
    transition: 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  },
};

export default dark;

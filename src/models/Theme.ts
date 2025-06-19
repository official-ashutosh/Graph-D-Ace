interface Theme {
  name: string;
  navbar: ModernColor;
  sidebar: ModernColor;
  canvas: ModernColor;
  nodeActive: ModernColor;
  nodeInactive: ModernColor;
  edge: ModernColor;
  slider: ModernColor;
  button?: ModernColor;
  modal?: ModernColor;
  animations?: AnimationConfig;
}

interface ModernColor {
  background: string;
  foreground?: string;
  backdropFilter?: string;
  border?: string;
  borderBottom?: string;
  borderRadius?: string;
  boxShadow?: string;
  glow?: string;
  transform?: string;
  animation?: string;
  pattern?: string;
  patternSize?: string;
  track?: string;
  thumb?: string;
  primary?: string;
  secondary?: string;
  hover?: string;
  backdrop?: string;
  shadow?: string;
  animated?: boolean;
}

interface AnimationConfig {
  transition?: string;
  bounce?: string;
  easeInOut?: string;
}

// Keep backward compatibility
interface Color {
  background: string;
  foreground?: string;
}

export default Theme;

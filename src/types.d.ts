// Custom type declarations to fix compatibility issues
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any;
  }
}

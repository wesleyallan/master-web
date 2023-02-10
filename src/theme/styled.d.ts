import type { Dark } from './theme';

declare module 'styled-components' {
  type CustonTheme = typeof Dark;
  export interface DefaultTheme extends CustonTheme {}
}

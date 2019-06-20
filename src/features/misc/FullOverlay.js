import styled from 'styled-components';
import { colors } from './colors';

export const FullOverlay = styled.div`
  background-color: ${colors.whisper};
  height: 100%;
  left: 0;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100%;
  z-index: 2000;
`;

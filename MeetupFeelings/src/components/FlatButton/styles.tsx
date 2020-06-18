import styled from 'styled-components/native';

import { StyledProps } from './interface';

export const Container = styled.TouchableOpacity<StyledProps>`
  align-items: center;
  background-color: ${({ theme, variant }) =>
    theme.colors.button[variant].background};
  border-radius: 10px;
  flex-direction: column;
  height: 60px;
  justify-content: center;
`;

export const Label = styled.Text<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.button[variant].fontColor};
`;

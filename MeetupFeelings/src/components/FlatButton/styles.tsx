import styled from 'styled-components/native';

import { PropsStyled } from './interface';

export const Container = styled.TouchableOpacity<PropsStyled>`
  background-color: ${(props) => (props.disabled ? 'gray' : 'blue')};
`;

export const Label = styled.Text``;

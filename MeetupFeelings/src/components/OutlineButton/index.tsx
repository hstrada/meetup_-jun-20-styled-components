import React from 'react';

import styled from 'styled-components/native';

import { Props, PropsStyled } from './interface';

const Container = styled.TouchableOpacity<PropsStyled>`
  background-color: ${(props) => (props.disabled ? 'green' : '#d3d3d3')};
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.button.primary.fontColor};
`;

/**
    ```
      Example: <OutlineButton text="Hello World" disabled={true} />
    ```
*/
const OutlineButton = ({ text, disabled }: Props) => {
  return (
    <Container disabled={disabled}>
      <Label>{text}</Label>
    </Container>
  );
};

export default OutlineButton;

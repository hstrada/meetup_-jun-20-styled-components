import React from 'react';

import styled from 'styled-components/native';

import { Props, PropsStyled } from './interface';

const Container = styled.TouchableOpacity<PropsStyled>`
  background-color: ${(props) => (props.disabled ? 'green' : 'white')};
`;

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
`;

/**
    ```
      Example: <TextButton text="Hello World" disabled={true} />
    ```
*/
const TextButton = ({ text, disabled }: Props) => {
  return (
    <Container disabled={disabled}>
      <Label>{text}</Label>
    </Container>
  );
};

export default TextButton;

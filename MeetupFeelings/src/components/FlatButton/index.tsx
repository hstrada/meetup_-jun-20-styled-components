import React from 'react';

import { Props } from './interface';

import { Container, Label } from './styles';

/**
    ```
      Example: <FlatButton text="Hello World" disabled={true} />
    ```
*/
const FlatButton = ({ text, disabled }: Props) => {
  return (
    <Container disabled={disabled}>
      <Label>{text}</Label>
    </Container>
  );
};

export default FlatButton;

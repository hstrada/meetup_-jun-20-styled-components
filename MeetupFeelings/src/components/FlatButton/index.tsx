import React from 'react';

import { ActivityIndicator, GestureResponderEvent } from 'react-native';

import { Props } from './interface';

import { Container, Label } from './styles';

/**
    ```
      Example: <FlatButton variant="primary" onPress={onPress} text="Press" />
      Example With Icon: <FlatButton icon="arrow-left" variant="primary" onPress={onPress} text="Press" />
    ```
    Variant Summary:

      primary:
        backgroundColor: `#60f`
        fontColor: `#fff`

        secondary:
        backgroundColor: `#fd0`
        fontColor: `#888`

      disabled:
        backgroundColor: `#ccc`
        fontColor: `#fff`
*/
const FlatButton = (props: Props) => {
  const { disabled, loading, onPress, text, variant = 'primary' } = props;

  const buttonVariant = disabled ? 'disabled' : variant;

  const callOnPress = (e: GestureResponderEvent) => {
    if (!disabled && !loading) {
      onPress(e);
    }
  };

  return (
    <Container
      disabled={disabled}
      onPress={callOnPress}
      variant={buttonVariant}>
      <>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <>
            <Label numberOfLines={1} variant={buttonVariant}>
              {text}
            </Label>
          </>
        )}
      </>
    </Container>
  );
};

export default FlatButton;

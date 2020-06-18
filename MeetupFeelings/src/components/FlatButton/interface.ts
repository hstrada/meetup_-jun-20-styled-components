import { GestureResponderEvent } from 'react-native';

import { ColorsButtonOptions } from '../../theme/colors';

type Variant = ColorsButtonOptions;

export type Props = {
  disabled?: boolean;
  loading?: boolean;
  text: string;
  variant?: Variant;
  onPress: (event: GestureResponderEvent) => void;
};

export type StyledProps = {
  variant: Variant;
};

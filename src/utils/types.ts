import { StyleProps } from '@chakra-ui/react';

export type TStyleObject<StyleKey extends string, StyleValue = StyleProps> = {
  [key in StyleKey]: StyleValue;
};

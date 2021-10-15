import { Text, TextProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

export interface ITitleProps extends TextProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = ({ children, ...rest }) => {
  return (
    <Text
      as="h1"
      color="currentcolor"
      fontSize={['4xl', '4xl', '6xl', '6xl']}
      fontWeight="700"
      {...rest}
    >
      {children}
    </Text>
  );
};

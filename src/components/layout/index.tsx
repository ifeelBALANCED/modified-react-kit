import { Box, BoxProps, LayoutProps as ChakraLayoutProps } from '@chakra-ui/react';
import { TStyleObject } from '@utils';
import { FC, ReactNode } from 'react';

export const enum ELayoutOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type TChakraGenericLayoutProps = BoxProps & ChakraLayoutProps;

export interface ILayoutProps extends TChakraGenericLayoutProps {
  children: ReactNode;
  spacing?: string | number;
  orientation?: ELayoutOrientation;
}

export const Layout: FC<ILayoutProps> = ({
  children,
  orientation = ELayoutOrientation.vertical,
  spacing = 0,
  ...rest
}) => {
  const orientations: TStyleObject<ELayoutOrientation, ChakraLayoutProps> = {
    horizontal: {
      display: 'flex',
    },
    vertical: {
      display: 'grid',
    },
  };

  return (
    <Box m="0 auto" gridGap={spacing} {...orientations[orientation]} {...rest}>
      {children}
    </Box>
  );
};

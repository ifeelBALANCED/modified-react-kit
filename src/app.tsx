import { Box, Flex } from '@chakra-ui/react';
import { Button, EButtonImpl, ELayoutOrientation, Input, Layout, Title } from '@components';

export const App = () => {
  return (
    <Layout
      orientation={ELayoutOrientation.vertical}
      spacing="6"
      p={4}
      justifyContent="center"
      justifyItems="center"
      textAlign="center"
    >
      <Box as="article">
        <Title>Buttons</Title>
        <Flex flexWrap="wrap" gridGap="2">
          <Button>button</Button>
          <Button impl={EButtonImpl.warn}>button</Button>
          <Button impl={EButtonImpl.action}>button</Button>
          <Button impl={EButtonImpl.alert}>button</Button>
        </Flex>
      </Box>

      <Box as="article">
        <Title>Inputs</Title>
        <Flex flexWrap="wrap" gridGap="2">
          <Input />
          <Input hiddable />
          <Input clearable />
          <Input hiddable clearable />
        </Flex>
      </Box>
    </Layout>
  );
};

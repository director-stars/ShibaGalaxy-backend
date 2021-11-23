import React, { ReactNode } from 'react';
import { Flex } from "@chakra-ui/react";

// type Props = {
//   children?: ReactNode;
// };

export default function Layout({ children }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="64px"
      bg="transparent"
    >
      {children}
    </Flex>
  );
}

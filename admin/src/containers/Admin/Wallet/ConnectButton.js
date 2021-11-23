import React from 'react';
import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

// type Props = {
//   handleOpenModal: any;
// };

export default function ConnectButton({ handleOpenModal }) {
  const { chainId, activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);
  function handleConnectWallet() {
    console.log(account)
    if(chainId == 56 || chainId == undefined){
      activateBrowserWallet();
    }
    else{
      deactivate();
    }
  }

  return account&&(chainId == 56) ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="1em">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} BNB
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="1.5em" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="blue.800"
      color="blue.300"
      fontSize="1.25em"
      fontWeight="medium"
      borderRadius="xl"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
      padding="1em"
    >
      Connect
    </Button>
  );
}

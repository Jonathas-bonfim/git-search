import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface InputButtonProps {
  button?: boolean;
  placeholder: string;
}

export function InputButton({ button = false, placeholder }: InputButtonProps) {
  return (
    <Flex gap={'2rem'}>
      <InputGroup w="37rem" h="3rem">
        <InputLeftElement
          mt={'5px'}
          pointerEvents="none"
          children={<Icon as={SearchIcon} color="grayLight" />}
        />
        <Input
          placeholder={placeholder}
          type="text"
          color='grayLight'
          borderColor={'grayLight'}
          border={'1px solid'}
          focusBorderColor="blue"
          h="3rem"
        />
      </InputGroup>
      {
        button && (
          <Button
            title="Search"
            color={'white'}
            bg={'purple'}
            w={'11rem'}
            h={'3rem'}
            _hover={{
              bg: 'greenButton'
            }}
          >
            Search
          </Button>
        )
      }

    </Flex>
  )
}
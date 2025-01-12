import { SearchIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MainTitle } from "../../components/MainTitle";

export default function Home() {
  return (
    <Flex
      align='center'
      justify="center"
      direction="column"
      w='100vw'
      h='100vh'
      gap={'3.5rem'}
    >
      <Flex direction='row' gap='2rem'>
        <MainTitle
          key={'title-search'}
          text="Search"
          color="blue"
        />
        <MainTitle
          key={'title-d_evs'}
          text="d_evs"
          color="purple"
        />
      </Flex>
      <Flex gap={'2rem'}>
        <InputGroup w="37rem" h="3rem">
          <InputLeftElement
            mt={'5px'}
            pointerEvents="none"
            children={<Icon as={SearchIcon} color="grayLight" />}
          />
          <Input
            placeholder="Search"
            type="text"
            color='grayLight'
            borderColor={'grayLight'}
            border={'1px solid'}
            focusBorderColor="blue"
            h="3rem"
          />
        </InputGroup>
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
      </Flex>
    </Flex >
  )
}
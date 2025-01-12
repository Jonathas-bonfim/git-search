import { Flex } from "@chakra-ui/react";
import { InputButton } from "../../components/InputButton";
import { MainTitle } from "../../components/MainTitle";

export default function Profile() {
  return (
    <Flex paddingInline={'7rem'}>
      <Flex h={'5.5rem'} w={'100%'} align={'center'}>
        <Flex gap={'0.375rem'} mr={'7.43rem'}>
          <MainTitle
            key={'title-search-header'}
            text="Search"
            color="blue"
            fontSize="2rem"
          />
          <MainTitle
            key={'title-search-header'}
            text="d_evs"
            color="purple"
            fontSize="2rem"
            lineHeight="2.72rem"
          />
        </Flex>
        <InputButton
          placeholder="Diego Silva"
        />
      </Flex>
    </Flex>
  )
}
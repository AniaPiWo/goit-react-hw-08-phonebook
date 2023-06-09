import { Heading, Flex, Box } from '@chakra-ui/react'
import { LoggedInBtns } from 'components/LoggedInBtns/LoggedInBtns';


export const Header = ({ children }) => (

  <Flex flexDirection='row' alignItems='center' justifyContent='space-between' px="20px">
    <Box display="flex" flexDirection='row' alignItems='center' justifyContent='center'>
      <img width="50px" src={process.env.PUBLIC_URL + '/pblogo.png'} alt="Logo" />
      <Heading w="100%" pl={5} py={7} as='h1' size='xl'>
        PhoneMate
      </Heading>
    </Box>
    <LoggedInBtns />
      {children}
  </Flex>

);

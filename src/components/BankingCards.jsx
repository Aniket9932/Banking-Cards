import React from 'react'
import { VStack,Box,Button,Flex,Image,Text } from '@chakra-ui/react'

function BankingCards() {
  return (
    <div>
        <Flex justify={'space-evenly'}>
            <VStack  p='8'>
                    <Flex w={'280px'} h={'400px'} bg={'gray.400'} direction='column' wrap={'wrap'} borderRadius='10px'>
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize={280}/>
                        <Text color={'gray.800'} fontWeight='semibold' fontSize={'md'} p='1'>Create Customer</Text>
                        <Text color={'gray.500'} fontWeight='italic' fontSize={'sm'} p='2'>Click the button to create the customer</Text>
                        <Button colorScheme='teal' w={100} alignSelf='end' marginRight={'6px'}>Create</Button>
                    </Flex>

            </VStack>

            <VStack p='8'>
                    <Flex w={'280px'} h={'400px'} bg={'gray.400'} direction='column' wrap={'wrap'} >
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize={280}/>
                        <Text color={'gray.800'} fontWeight='semibold' fontSize={'md'} p='1'>Create Customer</Text>
                        <Text color={'gray.500'} fontWeight='italic' fontSize={'sm'} p='2'>Click the button to create the customer</Text>
                        <Button colorScheme='teal' w={100} alignSelf='end' marginRight={'6px'}>Create</Button>
                    </Flex>

            </VStack>

            <VStack p='8'>
                    <Flex w={'280px'} h={'400px'} bg={'gray.400'} direction='column' wrap={'wrap'} >
                        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize={280}/>
                        <Text color={'gray.800'} fontWeight='semibold' fontSize={'md'} p='1'>Create Customer</Text>
                        <Text color={'gray.500'} fontWeight='italic' fontSize={'sm'} p='2'>Click the button to create the customer</Text>
                        <Button colorScheme='teal' w={100} alignSelf='end' marginRight={'6px'}>Create</Button>
                    </Flex>

            </VStack>
        </Flex>
    </div>
  )
}

export default BankingCards
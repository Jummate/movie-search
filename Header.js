import React from 'react';

import {Text,Flex,Center} from '@chakra-ui/react';

const Header = () => (
    <>
        <Flex w='100%' h='60px' bg='blackAlpha.800' align='center' justify={['center','center','left']} px='30px'color='white'>
            <Center border='1px solid white'px='10px'py='2px'rounded='sm'fontFamily='Times New Roman'>MyTestApp</Center>
        </Flex>
        <Flex 
            w='100%'
            h='300px'
            bg='red.400'
            color='white'
            fontWeight='semibold'
            align='center'
            justify={['center','center','left']}
            fontFamily='Calibri' px='30px'
            bgGradient='radial(red,black)'
            >

            <Text w='300px' py='2px'rounded='sm' fontSize={['25px','40px','55px']} textAlign={['center','center','left']} lineHeight={['30px','40px','55px']}>Watch something incredible.</Text>
        </Flex>
        
    </>
)
export default Header;
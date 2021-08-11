import React from 'react';
import { Flex, Box, Text, Icon, Link, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';

const ClosingSection = () => {
  return (
    <Box bgColor="#EFE8E4">
      <Box borderTopRadius="3em" overflow="hidden">
        <Flex
          maxW="1200px"
          direction="column"
          bgPosition="-32px center"
          height="100vh"
          overflow="hidden"
          minHeight="800px"
          w="100%"
          bgImage="linear-gradient(to bottom, rgba(255, 255,255,0.52), rgba(21, 19, 19, 0.90)), url('/assets/images/new/s2.jpeg')"
          bgSize="cover"
          bgColor="#EFE8E4"
          alignItems="center"
          pb="10"
        >
          <Flex
            direction="column"
            mt="20"
            mx="10"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
          >
            <Flex direction="column">
              <Text
                fontFamily="Stalemate"
                fontSize="30"
                textAlign="center"
                color="white"
              >
                Sampai Jumpa Di Hari Bahagia Kami
              </Text>
            </Flex>

            <Flex direction="column" alignItems="center" color="white" mb="20">
              <Flex>
                <Text fontSize="lg">Powered By</Text>
                <Text fontWeight="bold" fontSize="lg" ml="1">
                  Vanilabs
                </Text>
              </Flex>
              <Link href="https://www.instagram.com/vanilabs_">
                <Flex mt="1">
                  <Icon boxSize="6" as={AiOutlineInstagram} />
                  <Text ml="2">vanilabs_</Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default ClosingSection;

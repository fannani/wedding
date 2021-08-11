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
                fontSize="28"
                textAlign="center"
                color="white"
              >
                Sampai Jumpa Di Hari Bahagia Kami
              </Text>
              <Text mt="20" color="white" textAlign="center" fontSize="20">
                <chakra.span>{`" `}</chakra.span>
                <chakra.span fontWeight="bold">Happy</chakra.span> is the man
                who finds a{' '}
                <chakra.span fontWeight="bold">true friend</chakra.span>, and
                far <chakra.span fontWeight="bold">happier</chakra.span> is he
                who finds that true friend in
                <chakra.span fontWeight="bold">his wife</chakra.span>.{` "`}
              </Text>
              <Text color="white" textAlign="center" mt="5">
                -Franz Schubert-
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

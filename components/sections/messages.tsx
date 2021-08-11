import React from 'react';
import { Flex, Box, Image, Text, Avatar, Spinner } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import ornament from 'public/assets/images/ornament.png';

import axios from 'axios';
const MessagesSection = () => {
  const { data, isLoading } = useQuery('messages', () =>
    axios.get('/api/messages'),
  );

  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      height="100vh"
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      pb="20"
      pt="5"
      px="5"
    >
      <Box
        width={['100px', '200px']}
        height={['50px', '200px']}
        position="relative"
      >
        <Box
          width={['100px', '200px']}
          height={['100px', '200px']}
          bottom="0"
          position="absolute"
        >
          <Image
            src="/assets/images/ornament.png"
            alt="Salwa"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
      <Text fontFamily="Signatura" fontSize="32">
        Ucapan & Komentar
      </Text>
      <Flex
        mt="3"
        height="100%"
        overflow="scroll"
        p="5"
        rounded="lg"
        bgColor="primary.600"
        w="100%"
        boxShadow="xl"
        direction="column"
      >
        {isLoading ? (
          <Flex height="100%" justifyContent="center" alignItems="center">
            <Spinner size="xl" color="white" speed="0.65s" thickness="4px" />
          </Flex>
        ) : (
          data?.data.map((value) => (
            <Flex direction="row" mt="3" alignItems="start" key={value.id}>
              <Avatar name={value.person.name} mr="5" />
              <Flex
                direction="column"
                bgColor="white"
                position="relative"
                borderRadius="md"
                boxShadow="sm"
                p="3"
                _before={{
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: 0,
                  left: '-15px',
                  right: 'auto',
                  top: '15px',
                  bottom: 'auto',
                  border: '15px solid',
                  borderColor: 'white transparent transparent transparent',
                }}
              >
                <Flex>
                  <Text fontWeight="bold" fontSize="13">
                    Dari
                  </Text>
                  <Text fontWeight="bold" ml="1" fontSize="13">
                    {value.person.name}
                  </Text>
                </Flex>
                <Text fontSize="12">&quot;{value.text}&quot;</Text>
              </Flex>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default MessagesSection;

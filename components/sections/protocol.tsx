import React from 'react';
import { Flex, Box, Text, Icon, Link } from '@chakra-ui/react';
import Image from 'next/image';
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';

import p0114 from 'public/assets/images/protocol/01-14.png';
import p0415 from 'public/assets/images/protocol/04-15.png';
import p063 from 'public/assets/images/protocol/06-3.png';
import p0510 from 'public/assets/images/protocol/05-10.png';
import p039 from 'public/assets/images/protocol/03-9.png';
import p0215 from 'public/assets/images/protocol/02-15.png';

const ProtocolSection = () => {
  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      height="100vh"
      minHeight="740px"
      w="100%"
      bg="url(/assets/images/bottom-left-side.png) no-repeat bottom left,
url(/assets/images/bottom-right-side.png) no-repeat bottom right
"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      pb="10"
    >
      <Flex direction="column">
        <Text fontWeight="bold" fontSize="lg" mx="12">
          Protokol Kesehatan (Covid-19)
        </Text>
        <Text mt="7" mx="12">
          demi mendukung kesehatan bersama alangkah baiknya para tamu yang akan
          hadir memenuhi protokol kesehatan sebagai berikut:
        </Text>
        <Flex justifyContent="center" mt="12" wrap="wrap">
          <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p0114}
                layout="fill"
                objectFit="contain"
                alt="Cuci Tangan"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Cuci Tangan
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p0415}
                layout="fill"
                objectFit="contain"
                alt="Gunakan Masker"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Gunakan Masker
            </Text>
          </Flex>
          {/* <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p063}
                layout="fill"
                objectFit="contain"
                alt="Gunakan Sabun"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Gunakan Sabun
            </Text>
          </Flex>*/}
        </Flex>
        <Flex justifyContent="center" mt="7" wrap="wrap">
          <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p0510}
                layout="fill"
                objectFit="contain"
                alt="Tidak Berjabat Tangan"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Tidak Berjabat Tangan
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p039}
                layout="fill"
                objectFit="contain"
                alt="Jaga Jarak"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Jaga Jarak
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center" width="111px" mx="1">
            <Box position="relative" width="70px" height="70px">
              <Image
                src={p0215}
                layout="fill"
                objectFit="contain"
                alt="Gunakan Handsanitizer"
              />
            </Box>
            <Text fontWeight="bold" textAlign="center" fontSize="xs" mt="2">
              Gunakan Handsanitizer
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" alignItems="center" mt="20">
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
  );
};

export default ProtocolSection;

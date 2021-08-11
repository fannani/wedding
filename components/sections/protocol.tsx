import React from 'react';
import { Flex, Box, Text, Icon, Link, FlexProps } from '@chakra-ui/react';
import Image from 'next/image';
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import p0114 from 'public/assets/images/protocol/01-14.png';
import p0415 from 'public/assets/images/protocol/04-15.png';
import p063 from 'public/assets/images/protocol/06-3.png';
import p0510 from 'public/assets/images/protocol/05-10.png';
import p039 from 'public/assets/images/protocol/03-9.png';
import p0215 from 'public/assets/images/protocol/02-15.png';
export const MotionFlex = motion<FlexProps>(Flex);

const ProtocolSection = () => {
  const [refAnimation, inView] = useInView({ threshold: 0.2 });
  const control = useAnimation();
  React.useEffect(() => {
    if (inView) control.start('visible');
  }, [inView]);
  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      minHeight="600px"
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      pb="10"
    >
      <Flex direction="column">
        <Text fontWeight="bold" fontSize="lg" mx="5" textAlign="center">
          Protokol Kesehatan (Covid-19)
        </Text>
        <Text mt="7" mx="5" textAlign="center">
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
              Hindari Berjabat Tangan
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
        <MotionFlex
          ref={refAnimation}
          mx="5"
          mt="20"
          mb="20"
          px="5"
          py="10"
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
            },
            hidden: {
              opacity: 0,
              x: 50,
            },
          }}
          // @ts-ignore
          transition={{ duration: 1 }}
          direction="column"
          bgColor="primary.600"
          borderRadius="xl"
          color="white"
          alignItems="center"
        >
          <Text fontWeight="bold" fontSize="34" fontFamily="signatura">
            Life Moment
          </Text>
          <Text mt="4" textAlign="center" fontSize="15">
            Bantu kami mengabadikan momen-momen bahagia di acara pernikahan kami
            dengan menandai postingan anda dengan hashtag berikut:
          </Text>
          <Box
            mt="10"
            bgColor="primary.700"
            px="5"
            py="2"
            fontSize="18"
            borderRadius="sm"
          >
            <Text fontSize="15">#salwabaguswedding</Text>
          </Box>
        </MotionFlex>
      </Flex>
    </Flex>
  );
};

export default ProtocolSection;

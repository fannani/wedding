import React from 'react';
import {
  Flex,
  Text,
  Box,
  FlexProps,
  AspectRatio,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const photos = [
  '/assets/images/g23.jpg',
  '/assets/images/g22.jpg',
  '/assets/images/new/s1.jpeg',
  '/assets/images/new/s2.jpeg',
  '/assets/images/new/s3.jpeg',
  '/assets/images/new/s4.jpeg',
  '/assets/images/new/s5.jpeg',
  '/assets/images/new/s6.jpeg',
  '/assets/images/new/s8.jpeg',
  '/assets/images/new/s7.jpeg',
];
export const MotionFlex = motion<FlexProps>(Flex);

const GallerySection = React.forwardRef<any>((props, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((index) => {
        if (index < photos.length - 1) {
          return index + 1;
        }
        return 0;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      ref={ref}
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      px="5"
    >
      <Text fontFamily="Signatura" fontSize="36">
        Galeri
      </Text>
      <AspectRatio w="100%" ratio={0.64}>
        <Box
          mt="3"
          height="100%"
          rounded="lg"
          w="100%"
          boxShadow="xl"
          overflow="hidden"
          position="relative"
        >
          {photos.map((item, index) => (
            <MotionFlex
              key={index}
              bg={`url(${item})`}
              w="100%"
              h="100%"
              position="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            ></MotionFlex>
          ))}
        </Box>
      </AspectRatio>
      <Flex direction="column">
        <Text mt="20" color="rgb(94, 63, 41)" textAlign="center" fontSize="20">
          <chakra.span>{`" `}</chakra.span>
          <chakra.span fontWeight="bold">Happy</chakra.span> is the man who
          finds a <chakra.span fontWeight="bold">true friend</chakra.span>, and
          far <chakra.span fontWeight="bold">happier</chakra.span> is he who
          finds that true friend in
          <chakra.span fontWeight="bold">his wife</chakra.span>.{` "`}
        </Text>
        <Text color="rgb(94, 63, 41)" textAlign="center" mt="5">
          -Franz Schubert-
        </Text>
      </Flex>
    </Flex>
  );
});
GallerySection.displayName = 'Gallery';

export default GallerySection;

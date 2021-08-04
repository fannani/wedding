import React from 'react';
import { Flex, Text, Box, FlexProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const photos = ['/assets/images/g21.jpeg', '/assets/images/g22.jpeg'];
export const MotionFlex = motion<FlexProps>(Flex);

const GallerySection = (props) => {
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
      height="100vh"
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      pb="20"
      px="5"
    >
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
    </Flex>
  );
};
GallerySection.displayName = 'Gallery';

export default GallerySection;

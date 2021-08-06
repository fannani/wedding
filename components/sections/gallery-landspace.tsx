import React from 'react';
import { Flex, Text, Box, FlexProps, AspectRatio } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const photos = [
  '/assets/images/g1.jpeg',
  '/assets/images/g2.jpeg',
  '/assets/images/g3.jpeg',
];
export const MotionFlex = motion<FlexProps>(Flex);

const GalleryLandspaceSection = React.forwardRef<any>((props, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      height="100vh"
      ref={ref}
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      minH="860px"
      pt="5"
      px="5"
    >
      <Flex
        mt="3"
        w="100%"
        overflow="hidden"
        position="relative"
        direction="column"
      >
        {photos.map((item, index) => (
          <AspectRatio key={index} mt={5} w="100%" ratio={1.5}>
            <Flex
              bg={`url(${item})`}
              w="100%"
              rounded="lg"
              h="100%"
              boxShadow="xl"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            ></Flex>
          </AspectRatio>
        ))}
      </Flex>
    </Flex>
  );
});
GalleryLandspaceSection.displayName = 'Gallery Landspace';

export default GalleryLandspaceSection;

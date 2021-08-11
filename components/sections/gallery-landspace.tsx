import React from 'react';
import { Flex, Text, Box, FlexProps, AspectRatio } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

const photos = [
  '/assets/images/g4.jpeg',
  '/assets/images/g5.jpeg',
  '/assets/images/g1.jpeg',
  '/assets/images/g2.jpeg',
  '/assets/images/g3.jpeg',
  '/assets/images/g6.jpeg',
  '/assets/images/g7.jpeg',
  '/assets/images/g8.jpeg',
];
export const MotionFlex = motion<FlexProps>(Flex);

const GalleryLandspaceSection = React.forwardRef<any>((props, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const control = useAnimation();
  const [refAnimation, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) control.start('visible');
  }, [inView]);
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
      minH="800px"
      pt="5"
      px="5"
    >
      <Flex
        mt="3"
        ref={refAnimation}
        w="100%"
        overflow="hidden"
        position="relative"
        direction="column"
      >
        {photos.map((item, index) => (
          <AspectRatio key={index} mt={5} w="100%" ratio={1.5}>
            <MotionFlex
              bg={`url(${item})`}
              w="100%"
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
              rounded="lg"
              // @ts-ignore
              transition={{ duration: 1, delay: index * 0.5 }}
              h="100%"
              boxShadow="xl"
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            ></MotionFlex>
          </AspectRatio>
        ))}
      </Flex>
    </Flex>
  );
});
GalleryLandspaceSection.displayName = 'Gallery Landspace';

export default GalleryLandspaceSection;

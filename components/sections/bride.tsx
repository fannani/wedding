import React from 'react';
import { Flex, Box, Text, BoxProps, TextProps } from '@chakra-ui/react';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import decor from 'public/assets/images/decor.png';
import salwa from 'public/assets/images/salwa.jpg';
import bagus from 'public/assets/images/bagus.jpg';
import ornament from 'public/assets/images/ornament.png';
const MotionBox = motion<BoxProps>(Box);
const MotionText = motion<TextProps>(Text);

const PersonItem = ({
  name,
  desc,
  image,
  father,
  mother,
  animationControl,
}) => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <MotionBox
        animate={animationControl}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        // @ts-ignore
        transition={{ duration: 2, delay: 1 }}
        position="relative"
        width={['130px', '200px']}
        height={['130px', '200px']}
      >
        <Box
          position="absolute"
          left="50%"
          top="50%"
          width={['120px', '200px']}
          height={['120px', '200px']}
          borderRadius="full"
          overflow="hidden"
          transform="translate(-50%,-50%)"
        >
          <Image
            src={image}
            alt="Salwa"
            layout="fill"
            quality="50"
            sizes="30vw"
            objectFit="cover"
          />
        </Box>
        <Box
          width={['130px', '200px']}
          height={['130px', '200px']}
          position="absolute"
          backgroundSize="contain"
        >
          <Image
            src={decor}
            alt="Salwa"
            layout="fill"
            sizes="30vw"
            quality="50"
            objectFit="cover"
          />
        </Box>
      </MotionBox>

      <MotionText
        fontFamily="Signatura"
        color="rgb(94, 63, 41)"
        fontSize={['30', '20']}
        animate={animationControl}
        fontWeight="bold"
        mt="3"
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        // @ts-ignore
        transition={{ duration: 1, delay: 2 }}
      >
        {name}
      </MotionText>
      <MotionText
        initial="hidden"
        animate={animationControl}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        // @ts-ignore
        transition={{ duration: 1, delay: 2.5 }}
        fontWeight="bold"
        fontSize="15"
        color="rgb(94, 63, 41)"
      >
        {desc}
      </MotionText>
      <MotionText
        initial="hidden"
        animate={animationControl}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        // @ts-ignore
        transition={{ duration: 1, delay: 3 }}
        fontSize="15"
      >
        Bapak {father} &
      </MotionText>
      <MotionText
        initial="hidden"
        animate={animationControl}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
          },
          hidden: {
            opacity: 0,
            y: -10,
          },
        }}
        // @ts-ignore
        transition={{ duration: 1, delay: 3.5 }}
        fontSize="15"
      >
        Ibu {mother}
      </MotionText>
    </Flex>
  );
};

const BrideSection = React.forwardRef((props, ref) => {
  const [refAnimation, inView] = useInView({ threshold: 0.15 });
  const control = useAnimation();

  React.useEffect(() => {
    if (inView) control.start('visible');
  }, [inView]);
  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      height="100vh"
      minH="800px"
      w="100%"
      //   @ts-ignore
      ref={ref}
      px="2"
      pb="100"
      pt="5"
      bg="url(/assets/images/bottom-left-side.png) no-repeat bottom left,
   url(/assets/images/bottom-right-side.png) no-repeat bottom right
   "
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
    >
      <Flex
        ref={refAnimation}
        alignItems="center"
        textAlign="center"
        w="100%"
        h="100%"
        direction="column"
      >
        <Flex direction="column" alignItems="center">
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
                src={ornament}
                alt="Salwa"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
          <MotionText
            mt="5"
            animate={control}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: -10,
              },
            }}
            color="rgb(94, 63, 41)"
            fontStyle="italic"
            fontWeight="bold"
            // @ts-ignore
            transition={{ duration: 2 }}
            fontSize={['14', 'lg']}
          >
            Kepada Bapak/Ibu/Saudara/i
          </MotionText>
          <MotionText
            color="rgb(94, 63, 41)"
            maxW="500px"
            animate={control}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: -10,
              },
            }}
            fontSize={['14', 'lg']}
            fontWeight="bold"
            // @ts-ignore
            transition={{ duration: 2 }}
            fontStyle="italic"
            mt="2"
            px="2"
          >
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di
            Acara Pernikahan Kami.
          </MotionText>
        </Flex>
        <Flex direction="column">
          <MotionText
            color="rgb(94, 63, 41)"
            fontSize={['4xl', '5xl']}
            mt="5"
            animate={control}
            initial="hidden"
            // @ts-ignore
            transition={{ duration: 2, delay: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
              },
              hidden: {
                opacity: 0,
                y: -10,
              },
            }}
            fontFamily="Signatura"
            fontWeight="bold"
          >
            Mempelai
          </MotionText>
          <Flex
            flex="1"
            w="100%"
            maxW="700px"
            direction={['column', 'row']}
            alignItems="center"
          >
            <PersonItem
              name="Salwa 'Aisy"
              desc="Putri"
              animationControl={control}
              image={salwa}
              father="Kuderi Dardak"
              mother="Miftahul Janah"
            />
            <Box height="3" />
            <PersonItem
              name="Rachmad Bagus Indra K."
              desc="Putra"
              animationControl={control}
              image={bagus}
              father="H. Ainur Rofiq Nansur (Alm)"
              mother="Hj. Mariyah"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});

export default BrideSection;

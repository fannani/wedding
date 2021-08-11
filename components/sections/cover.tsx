import React from 'react';
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  ButtonProps,
  HeadingProps,
  BoxProps,
  TextProps,
  FlexProps,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import 'dayjs/locale/id';

dayjs.locale('id');

const MotionButton = motion<ButtonProps>(Button);
const MotionHeading = motion<HeadingProps>(Heading);
const MotionText = motion<TextProps>(Text);
const MotionFlex = motion<FlexProps>(Flex);
const MotionBox = motion<BoxProps>(Box);

const CoverSection = ({ person, onOpen }) => {
  return (
    <Flex
      maxW="1200px"
      direction="column"
      height="100vh"
      w="100%"
      bg="url(/assets/images/top-left-side.png) no-repeat top left,
url(/assets/images/top-right-side.png) no-repeat top right"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
    >
      <Flex
        alignItems="center"
        textAlign="center"
        justifyContent="space-between"
        w="100%"
        my="10"
        h="100%"
        direction="column"
      >
        <Box>
          <Text color="rgb(94, 63, 41)" mt={10} fontSize={['sm', 'md']}>
            UNDANGAN PERNIKAHAN
          </Text>
          <Flex alignItems="center" justifyContent="center" mt="111px">
            <MotionHeading
              color="rgb(94, 63, 41)"
              fontFamily="Signatura"
              fontSize={['7xl', '8xl']}
              fontWeight="100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // @ts-ignore
              transition={{ duration: 2 }}
            >
              Salwa
            </MotionHeading>
            <MotionBox
              py="0"
              px="25px"
              fontWeight="100"
              mx="5"
              fontFamily="Signatura"
              color="white"
              bg="rgb(188, 153, 83)"
              fontSize="5xl"
              borderRadius="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // @ts-ignore
              transition={{ duration: 2 }}
            >
              &
            </MotionBox>
            <MotionHeading
              color="rgb(94, 63, 41)"
              fontFamily="Signatura"
              fontSize={['7xl', '8xl']}
              fontWeight="100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // @ts-ignore
              transition={{ duration: 2 }}
            >
              Bagus
            </MotionHeading>
          </Flex>
          <MotionText
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            fontStyle="italic"
            mt={5}
            color="rgb(94, 63, 41)"
            // @ts-ignore
            transition={{ delay: 3, duration: 1.5 }}
          >
            {dayjs(person.session.date).format('dddd, D MMMM YYYY')}
          </MotionText>
        </Box>

        <MotionFlex
          direction="column"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // @ts-ignore
          transition={{ delay: 4, duration: 1.5 }}
        >
          <Text color="rgb(94, 63, 41)">Kepada</Text>
          <Text fontWeight="bold" color="rgb(94, 63, 41)" fontSize="20">
            {person.name}
          </Text>
        </MotionFlex>

        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} // @ts-ignore
          transition={{ delay: 6, duration: 1.5 }}
        >
          <MotionButton
            borderRadius="full"
            colorScheme="primary"
            px="10"
            mb="28"
            onClick={() => {
              onOpen();
            }}
            // @ts-ignore
            whileHover={{ scale: 1.2 }}
          >
            Buka Undangan
          </MotionButton>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default CoverSection;

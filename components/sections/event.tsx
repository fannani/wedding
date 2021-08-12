import React from 'react';
import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  FlexProps,
  Link,
} from '@chakra-ui/react';
import { MdLocationOn, MdEvent } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/id';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('id');

const MotionFlex = motion<FlexProps>(Flex);
type EventSectionProps = {
  person: any;
};

const EventSection = React.forwardRef<HTMLDivElement, EventSectionProps>(
  ({ person }, ref) => {
    const [refAnimation, inView] = useInView({ threshold: 0.15 });
    const control = useAnimation();
    React.useEffect(() => {
      if (inView) control.start('visible');
    }, [inView]);
    return (
      <Box
        maxW="650px"
        w="100%"
        height="100vh"
        minH="800px"
        p="5"
        //   @ts-ignore
        ref={ref}
        bgColor="#EFE8E4"
      >
        <Box
          ref={refAnimation}
          bgImage="url(/assets/images/bg.jpg)"
          bgColor="#EFE8E4"
          bgPosition="center"
          height="100%"
          borderRadius="xl"
          bgSize="cover"
          bgRepeat="no-repeat"
          width="100%"
          maxW="700px"
          position="relative"
        >
          <Flex
            direction="column"
            alignItems="center"
            zIndex="2"
            position="absolute"
          >
            <Text
              fontFamily="Signatura"
              color="white"
              fontSize="8xl"
              fontWeight="bold"
            >
              Acara
            </Text>

            <MotionFlex
              animate={control}
              direction="column"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                },
                hidden: {
                  opacity: 0,
                  x: -50,
                },
              }}
              // @ts-ignore
              transition={{ duration: 1 }}
              w="calc(100% - 40px)"
              maxW="700px"
              mt={[5, 10]}
              backgroundColor="white"
              p={[5, 10]}
              justifyContent="center"
              borderRadius="25px"
              textAlign="center"
            >
              <Text fontWeight="bold" fontSize="2xl">
                Resepsi
              </Text>
              <Text fontSize="sm" mt={3} fontWeight="bold">
                {dayjs(person.session.date).format('dddd, D MMMM YYYY')}
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                {dayjs.tz(person.session.date, 'Asia/Jakarta').format('HH.mm')}{' '}
                -{' '}
                {dayjs
                  .tz(person.session.date, 'Asia/Jakarta')
                  .add(2, 'h')
                  .format('HH.mm')}{' '}
                WIB
              </Text>
              {/* fontWeight="bold" */}
              <Text mt={3} fontSize="sm">
                Tegalsari 03/11 Pangkahkulon Ujungpangkah Gresik (Kediaman
                mempelai putri)
              </Text>
              {/* <Text mt={3}>Jl Tamaoiak sok aoskd oak sdok asd</Text> */}
              <Flex
                mt="5"
                justifyContent="center"
                wrap="wrap"
                alignItems="center"
                direction={'column'}
              >
                <Link
                  target="_blank"
                  _hover={{ textDecoration: 'none' }}
                  href="https://goo.gl/maps/uqteozBwi93KNaZ3A"
                >
                  <Button colorScheme="primary" borderRadius="full">
                    <Flex alignItems="center">
                      <Icon as={MdLocationOn} boxSize="7" mr="2" />
                      <Text fontSize="14" fontWeight="normal">
                        Petunjuk Arah
                      </Text>
                    </Flex>
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  _hover={{ textDecoration: 'none' }}
                  href={`http://www.google.com/calendar/event?action=TEMPLATE&text=Pernikahan%20Salwa%20Bagus&dates=${dayjs
                    .tz(person.session.date, 'Asia/Jakarta')
                    .utc()
                    .toISOString()
                    .replace(/([:,.,-])/g, '')}/${dayjs
                    .tz(person.session.date, 'Asia/Jakarta')
                    .add(2, 'h')
                    .utc()
                    .toISOString()
                    .replace(
                      /([:,.,-])/g,
                      '',
                    )}&details=Pernikahan%20Salwa%20Bagus&location=Tegalsari%2003/11%20Pangkahkulon%20Ujungpangkah%20Gresik`}
                >
                  <Button
                    colorScheme="primary"
                    ml={[0, 5]}
                    mt={3}
                    borderRadius="full"
                  >
                    <Flex alignItems="center">
                      <Icon as={MdEvent} boxSize="7" mr="2" />
                      <Text fontSize="14" fontWeight="normal">
                        Ingatkan di kalender
                      </Text>
                    </Flex>
                  </Button>
                </Link>
              </Flex>
            </MotionFlex>
            <MotionFlex
              animate={control}
              direction="column"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                },
                hidden: {
                  opacity: 0,
                  x: -50,
                },
              }}
              // @ts-ignore
              transition={{ duration: 1, delay: 1 }}
              w="calc(100% - 40px)"
              maxW="700px"
              mt={[5, 10]}
              backgroundColor="white"
              p={[5, 10]}
              justifyContent="center"
              borderRadius="25px"
              textAlign="center"
            >
              <Text fontWeight="bold" fontSize="2xl">
                Akad
              </Text>
              <Text fontSize="sm" mt={3} fontWeight="bold">
                Jumat, 20 Agustus 2021
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                08.00 WIB
              </Text>
              {/* fontWeight="bold" */}
              <Text mt={3} fontSize="sm">
                Tegalsari 03/11 Pangkahkulon Ujungpangkah Gresik (Kediaman
                mempelai putri)
              </Text>
            </MotionFlex>
          </Flex>
          <Box
            bgColor="black"
            position="absolute"
            width="100%"
            height="100%"
            borderRadius="xl"
            top="0"
            left="0"
            bottom="0"
            right="0"
            zIndex="0"
            opacity="0.5"
          />
        </Box>
      </Box>
    );
  },
);

export default EventSection;

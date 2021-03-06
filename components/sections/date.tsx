import React from 'react';
import {
  Flex,
  Text,
  Box,
  Button,
  Icon,
  FlexProps,
  TextProps,
  BoxProps,
  Spinner,
} from '@chakra-ui/react';
import Image from 'next/image';

import ornament from 'public/assets/images/ornament.png';
import { FaCheck } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import axios from 'axios';
import dayjs from 'dayjs';
import duration, { Duration } from 'dayjs/plugin/duration';
import { useInView } from 'react-intersection-observer';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/id';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('id');
dayjs.extend(duration);

const MotionFlex = motion<FlexProps>(Flex);
const MotionBox = motion<BoxProps>(Box);
const MotionText = motion<TextProps>(Text);

type DateSectionProps = {
  person: any;
  personQuery: any;
};

const messages = {
  ATTEND: 'Terimakasih, sampai jumpa di hari bahagia',
  MAYBE: 'Terimakasih, semoga bisa datang yaa',
  NO: 'Semoga bisa bertemu di lain waktu',
};

const DateSection = React.forwardRef<HTMLDivElement, DateSectionProps>(
  ({ person, personQuery }, ref) => {
    const controls = useAnimation();
    const [refAnimation, inView] = useInView({ threshold: 0.15 });
    const animationControl = useAnimation();
    const [status, setStatus] = React.useState<any>(null);
    const [eventDuration, setEventDuration] = React.useState<Duration>(
      dayjs.duration(1),
    );

    React.useEffect(() => {
      if (!personQuery.isLoading) {
        if (personQuery.data.data.precenceStatus) {
          setStatus(personQuery.data.data.precenceStatus);
        }
      }
    }, [personQuery.isLoading]);
    React.useEffect(() => {
      const timer = setInterval(() => {
        const now = dayjs();
        setEventDuration(
          dayjs.duration(
            dayjs.tz(person.session.date, 'Asia/Jakarta').diff(now),
          ),
        );
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
      if (inView) animationControl.start('visible');
    }, [inView]);

    const onAttendClick = (param) => {
      if (status === null) {
        setStatus(param);
        axios.post('/api/attendance', {
          id: person.id,
          status: param,
        });
        controls.start('afterSubmit');
      }
    };
    return (
      <Flex
        // @ts-ignore
        ref={ref}
        maxW="650px"
        direction="column"
        height="100vh"
        minH="1200px"
        justifyContent="space-between"
        w="100%"
        bg="url(/assets/images/top-left-side.png) no-repeat top left,
url(/assets/images/top-right-side.png) no-repeat top right
"
        bgSize={['160px', '260px']}
        pt="20"
        pb="20"
        alignItems="center"
        bgColor="#EFE8E4"
      >
        <Flex direction="column" px="10" mt="5">
          <MotionText
            fontWeight="bold"
            fontSize="34"
            color="rgb(94, 63, 41)"
            fontFamily="signatura"
            animate={animationControl}
            // @ts-ignore
            transition={{ duration: 1 }}
            textAlign="center"
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
          >
            Menuju Hari Bahagia
          </MotionText>
          <MotionText
            color="rgb(94, 63, 41)"
            mt="5"
            textAlign="center"
            initial="hidden"
            // @ts-ignore
            transition={{ duration: 1, delay: 0.5 }}
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
          >
            siang dan malam berlalu begitu cepat diantara saat-saat mendebarkan
            yang belum pernah kami rasakan sebelumnya
          </MotionText>
          <MotionText
            mt="3"
            color="rgb(94, 63, 41)"
            textAlign="center"
            initial="hidden"
            // @ts-ignore
            transition={{ duration: 1, delay: 1 }}
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
          >
            kami menantikan kehadiran para keluarga dan sahabat untuk menjadi
            saksi hari bahagia kami
          </MotionText>
        </Flex>
        <MotionText
          ref={refAnimation}
          fontFamily="Signatura"
          fontSize="34"
          animate={animationControl}
          color="rgb(94, 63, 41)"
          mt="10"
          // @ts-ignore
          transition={{ duration: 1, delay: 1.5 }}
          fontWeight="bold"
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
        >
          Acara Akan diselenggarakan
        </MotionText>
        <Flex direction="column">
          <MotionFlex
            direction="column"
            initial="hidden"
            // @ts-ignore
            transition={{ duration: 1, delay: 2 }}
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
            alignItems="center"
            bg="url(/assets/images/circle.png)"
            backgroundSize="contain"
            bgRepeat="no-repeat"
            justifyContent="center"
            backgroundPosition="center"
            px="20"
            py="16"
          >
            <Text fontWeight="bold" fontSize="30">
              {eventDuration?.months() * 30 + eventDuration?.days()}
            </Text>
            <Text
              fontSize="sm"
              mt={1}
              color="rgb(94, 63, 41)"
              fontWeight="bold"
            >
              Hari
            </Text>
          </MotionFlex>
          <MotionFlex
            justify="center"
            // @ts-ignore
            transition={{ duration: 1, delay: 2.5 }}
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
            align="center"
            textAlign="center"
          >
            <Flex direction="column" ml="10px" align="center">
              <Box
                borderRadius="lg"
                color="white"
                w="9"
                h="9"
                lineHeight="9"
                bg="rgb(188, 153, 83)"
              >
                {eventDuration?.hours()}
              </Box>
              <Text mt={1} fontSize="sm" color="rgb(94, 63, 41)">
                Jam
              </Text>
            </Flex>
            <Flex direction="column" mx="2" align="center">
              <Box
                borderRadius="lg"
                color="white"
                w="9"
                h="9"
                lineHeight="9"
                bg="rgb(188, 153, 83)"
              >
                {eventDuration?.minutes()}
              </Box>
              <Text fontSize="sm" mt={1} color="rgb(94, 63, 41)">
                Menit
              </Text>
            </Flex>
            <Flex direction="column" align="center">
              <Box
                borderRadius="lg"
                color="white"
                bg="rgb(188, 153, 83)"
                w="9"
                h="9"
                lineHeight="9"
              >
                {eventDuration?.seconds()}
              </Box>
              <Text fontSize="sm" mt={1} color="rgb(94, 63, 41)">
                Detik
              </Text>
            </Flex>
          </MotionFlex>

          <Flex justifyContent="center" mt="10">
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
          </Flex>
        </Flex>
        {personQuery.isLoading ? (
          <Flex height="100%" justifyContent="center" alignItems="center">
            <Spinner size="xl" color="white" speed="0.65s" thickness="4px" />
          </Flex>
        ) : (
          <MotionBox
            animate={controls}
            position="relative"
            initial={
              personQuery.data.data.precenceStatus
                ? 'afterSubmit'
                : 'beforeSubmit'
            }
            variants={{
              afterSubmit: {},
              beforeSubmit: {},
            }}
          >
            <Flex direction="column">
              <MotionBox
                position="absolute"
                left="50%"
                ml="-1.7rem"
                top="45%"
                // @ts-ignore
                transition={{
                  scale: { type: 'spring', duration: 2, stiffness: 300 },
                }}
                variants={{
                  afterSubmit: {
                    scale: 2,
                    opacity: 1,
                  },
                  beforeSubmit: {
                    opacity: 0,
                  },
                }}
              >
                <Icon
                  as={FaCheck}
                  boxSize="3.4rem"
                  mb="10"
                  color="rgb(188, 153, 83)"
                />
              </MotionBox>
              <Box position="absolute" top="85%">
                <MotionText
                  animate={controls}
                  initial={
                    personQuery.data.data.precenceStatus
                      ? 'afterSubmit'
                      : 'beforeSubmit'
                  }
                  variants={{
                    afterSubmit: {
                      opacity: 1,
                    },
                    beforeSubmit: {
                      opacity: 0,
                    },
                  }}
                  // @ts-ignore
                  transition={{
                    duration: 1,
                  }}
                  fontSize="sm"
                  textAlign="center"
                  color="rgb(94, 63, 41)"
                >
                  {status && messages[status]}
                </MotionText>
              </Box>
            </Flex>

            <MotionFlex
              direction="column"
              mt="14"
              alignItems="center" // @ts-ignore
              transition={{ duration: 1, delay: 3 }}
              initial="hidden"
              animate={
                personQuery.data.data.precenceStatus
                  ? 'hidden'
                  : animationControl
              }
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
            >
              <MotionText
                animate={controls}
                variants={{
                  afterSubmit: {
                    opacity: 0,
                  },
                  beforeSubmit: {
                    opacity: 1,
                  },
                }}
                fontSize="16"
                color="rgb(94, 63, 41)"
              >
                Apakah anda akan datang ?
              </MotionText>
              <MotionFlex
                animate={controls}
                variants={{
                  afterSubmit: {
                    opacity: 0,
                  },
                  beforeSubmit: {
                    opacity: 1,
                  },
                }}
                direction="column"
                mt="5"
              >
                <Button
                  colorScheme="primary"
                  onClick={() => onAttendClick('ATTEND')}
                  fontWeight="normal"
                  fontSize="14"
                >
                  Iya, saya akan datang
                </Button>

                <Button
                  colorScheme="primary"
                  fontWeight="normal"
                  onClick={() => onAttendClick('MAYBE')}
                  mt="2"
                  fontSize="14"
                >
                  Bisa iya, Bisa tidak
                </Button>
                <Button
                  colorScheme="primary"
                  fontWeight="normal"
                  fontSize="14"
                  mt="2"
                  onClick={() => onAttendClick('NO')}
                >
                  Sepertinya tidak bisa
                </Button>
              </MotionFlex>
            </MotionFlex>
          </MotionBox>
        )}
      </Flex>
    );
  },
);

export default DateSection;

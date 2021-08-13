import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import {
  Box,
  Text,
  Flex,
  Icon,
  HStack,
  BoxProps,
  FlexProps,
  TextProps,
  Spinner,
} from '@chakra-ui/react';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import CoverSection from '@/sections/cover';
import BrideSection from '@/sections/bride';
import EventSection from '@/sections/event';
import DateSection from '@/sections/date';
import GallerySection from '@/sections/gallery';
import GalleryLandspaceSection from '@/sections/gallery-landspace';

import MessagesSection from '@/sections/messages';
import FormSection from '@/sections/form';
import ProtocolSection from '@/sections/protocol';
import { motion, useElementScroll, useAnimation } from 'framer-motion';
import { AiFillHeart, AiFillCalendar } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { HiPencilAlt } from 'react-icons/hi';
import useSectionAnimation from 'hooks/use-section-animation';
import { useRouter } from 'next/router';
import prisma from 'utils/prisma';
import { useQuery } from 'react-query';
import axios from 'axios';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
import ClosingSection from '@/sections/closing';

dayjs.locale('id');
export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionText = motion<TextProps>(Text);

const isDevelopment = false;

const MenuItem = ({ icon, title, animate, onClick }) => {
  return (
    <MotionFlex
      bgColor="black"
      onClick={onClick}
      alignItems="center"
      py="2"
      animate={animate}
      px="3"
      color="white"
      overflow="hidden"
      initial="hidden"
      variants={{
        visible: {
          color: 'white',
          backgroundColor: 'black',
          width: 'inherit',
        },
        hidden: {
          color: 'black',
          backgroundColor: 'white',
          width: '30px',
        },
      }}
      borderRadius="full"
    >
      <Icon as={icon} />
      <MotionText
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        ml="1"
        fontSize="12"
      >
        {title}
      </MotionText>
    </MotionFlex>
  );
};

const Invitation = ({ person }) => {
  const controls = useAnimation();
  const personQuery = useQuery('person', () =>
    axios.get('/api/person', { params: { id: person.id } }),
  );
  const brideControl = useSectionAnimation();
  const eventControl = useSectionAnimation();
  const dateControl = useSectionAnimation();
  const galleryControl = useSectionAnimation();
  const messagesControl = useSectionAnimation({ threshold: 0.15 });
  const [isMusicPlay, setIsMusicPlay] = React.useState(false);
  const [audio, setAudio] = React.useState();
  const [isShowContent, setIsShowContent] = React.useState(false);
  const boxRef = useRef();
  const { scrollY } = useElementScroll(boxRef);
  useEffect(() => {
    scrollY.onChange((v) => {
      if (v >= 200) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    });
  }, [scrollY]);

  useEffect(() => {
    if (isMusicPlay) {
      if (!isDevelopment) {
        // @ts-ignore
        audio.play();
      }
    } else if (audio) {
      // @ts-ignore
      audio.pause();
    }
  }, [isMusicPlay]);

  useEffect(() => {
    if (isShowContent) {
      // @ts-ignore
      brideControl.ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isShowContent]);

  useEffect(() => {
    const song = new Audio('/assets/music.mp3');
    // @ts-ignore

    setAudio(song);
    song.addEventListener('ended', () => setIsMusicPlay(false));

    return () => {
      song.removeEventListener('ended', () => setIsMusicPlay(false));
    };
  }, []);

  const onToggleMusic = () => {
    if (isMusicPlay) {
      setIsMusicPlay(false);
    } else {
      setIsMusicPlay(true);
    }
  };

  return (
    <>
      <MotionBox
        position="fixed"
        top="0"
        zIndex="999"
        backgroundColor="white"
        padding="2"
        py="1"
        mt={['45%', '45%', '45%', '20%']}
        mr={[3, 3, 3, 10]}
        initial="hidden"
        animate={controls}
        right="0"
        boxShadow="lg"
        borderRadius="lg"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        onClick={onToggleMusic}
      >
        <Icon
          as={isMusicPlay ? BsFillPauseFill : BsFillPlayFill}
          aria-label="music status"
        />
      </MotionBox>
      <MotionFlex
        position="fixed"
        initial="hidden"
        animate={controls}
        zIndex="999"
        bottom="0"
        justifyContent="center"
        width="100%"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        mb="3"
      >
        <Box p="3" borderRadius="full" bgColor="white" shadow="lg">
          <HStack spacing="2">
            <MenuItem
              animate={brideControl.animate}
              icon={AiFillHeart}
              title="Mempelai"
              onClick={() => {
                if (brideControl.ref.current) {
                  // @ts-ignore
                  brideControl?.ref?.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            />
            <MenuItem
              animate={eventControl.animate}
              icon={FaMapMarkerAlt}
              title="Acara"
              onClick={() => {
                if (brideControl.ref.current) {
                  // @ts-ignore
                  eventControl?.ref?.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            />
            <MenuItem
              animate={dateControl.animate}
              icon={AiFillCalendar}
              title="Tanggal"
              onClick={() => {
                // @ts-ignore
                dateControl.ref.current.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <MenuItem
              animate={galleryControl.animate}
              icon={MdPhotoSizeSelectActual}
              title="Galeri"
              onClick={() => {
                // @ts-ignore
                galleryControl.ref.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            />
            <MenuItem
              animate={messagesControl.animate}
              icon={HiPencilAlt}
              title="Ucapan"
              onClick={() => {
                // @ts-ignore
                messagesControl.ref.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            />
          </HStack>
        </Box>
      </MotionFlex>
      <Head>
        <title>Undangan Salwa & Bagus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        ref={boxRef}
        height="100vh"
        overflow={isShowContent ? 'scroll' : 'hidden'}
      >
        <Flex
          direction="column"
          w="100%"
          bgColor="#cfbfb6"
          align="center"
          alignItems="center"
        >
          <CoverSection
            person={person}
            onOpen={() => {
              if (!isDevelopment) {
                var isSafari =
                  // @ts-ignore
                  /constructor/i.test(window.HTMLElement) ||
                  (function (p) {
                    return p.toString() === '[object SafariRemoteNotification]';
                  })(
                    // @ts-ignore
                    !window['safari'] ||
                      (typeof safari !== 'undefined' &&
                        window['safari'].pushNotification),
                  );
                if (!isSafari) {
                  document.body.requestFullscreen();
                }
              }
              setTimeout(() => {
                setIsMusicPlay(true);
                setIsShowContent(true);
                if (isShowContent) {
                  // @ts-ignore
                  brideControl.ref.current.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }, 300);
            }}
          />
          <Flex
            direction="column"
            alignItems="center"
            maxW="650px"
            overflow="hidden"
          >
            <BrideSection ref={brideControl.handleRef} />
            <EventSection ref={eventControl.handleRef} person={person} />
            <DateSection
              ref={dateControl.handleRef}
              person={person}
              personQuery={personQuery}
            />
            <GallerySection ref={galleryControl.handleRef} />
            <GalleryLandspaceSection />

            <Flex direction="column" ref={messagesControl.handleRef} w="100%">
              <MessagesSection />
              <FormSection person={person} personQuery={personQuery} />
              <ProtocolSection />
              <ClosingSection />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

const Page = ({ person }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Spinner
          size="xl"
          emptyColor="gray.200"
          color="blue.500"
          speed="0.65s"
          thickness="4px"
        />
      </Flex>
    );
  }
  return Invitation({ person });
};
export default Page;

export async function getStaticPaths() {
  const persons = await prisma.person.findMany();
  const paths = persons.map((person) => ({
    params: { id: person.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const person = await prisma.person.findUnique({
    where: { id: params.id },
    include: { session: true },
  });

  if (!person) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      person: {
        ...person,
        session: { date: person.session.date.toISOString() },
      },
    },
  };
}

import React from 'react';
import {
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Icon,
  BoxProps,
  FlexProps,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/react';
import ornament from 'public/assets/images/ornament.png';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const MotionBox = motion<BoxProps>(Box);
const MotionFlex = motion<FlexProps>(Flex);

const FormSection = ({ person, personQuery }) => {
  const controls = useAnimation();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useMutation((data) => axios.post('/api/messages', data), {
    onSuccess: () => {
      queryClient.invalidateQueries('messages');
    },
  });

  const onSubmit = async (values) => {
    controls.start('afterSubmit');
    await mutation.mutate({ ...values, id: person.id });
  };

  return (
    <Flex
      maxW="1200px"
      direction="column"
      // borderRadius="25px"
      w="100%"
      bgSize={['160px', '260px']}
      bgColor="#EFE8E4"
      alignItems="center"
      pb="20"
      px="10"
    >
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
          <Image src={ornament} alt="Salwa" layout="fill" objectFit="cover" />
        </Box>
      </Box>
      <Text fontFamily="Signatura" fontSize="32">
        Kirim Ucapan & Komentar
      </Text>
      {personQuery.isLoading ? (
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Spinner size="xl" color="white" speed="0.65s" thickness="4px" />
        </Flex>
      ) : (
        <MotionBox
          animate={controls}
          position="relative"
          width="100%"
          initial={
            personQuery.data.data.messages.length > 0
              ? 'afterSubmit'
              : 'beforeSubmit'
          }
          variants={{
            afterSubmit: {},
            beforeSubmit: {},
          }}
        >
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
          <MotionFlex
            direction="column"
            variants={{
              afterSubmit: {
                opacity: 0,
              },
              beforeSubmit: {
                opacity: 1,
              },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt="5">
                <FormLabel id="message">Pesan</FormLabel>
                <Textarea
                  {...register('message', { required: true })}
                  bg="white"
                  h="200"
                  placeholder="Tulis pesan kamu disini..."
                />
                {errors.message && (
                  <FormErrorMessage>Message is required</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                colorScheme="primary"
                mt="3"
                fontWeight="normal"
                w="100%"
              >
                Kirim
              </Button>
            </form>
          </MotionFlex>
        </MotionBox>
      )}
    </Flex>
  );
};

export default FormSection;

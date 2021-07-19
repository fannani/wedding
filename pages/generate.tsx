import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Center,
  Text,
  Select,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import prisma from 'utils/prisma';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/id';
import copy from 'copy-to-clipboard';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('id');

const generateMessage = (to, id) => {
  return `Assalamu'alaikum Wr. Wb.
Bismillahirahmanirrahim

Yth. *${to}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

Salwa 'Aisy & Rachmad Bagus Indra K.

Berikut link undangan kami untuk info lengkap acara, bisa kunjungi :

https://salwabagus.vercel.app/${id}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya di bagikan melalui pesan ini. Karena suasana masih pandemi diharapkan untuk menggunakan masker dan datang pada jam yang telah ditentukan. Terima kasih atas perhatiannya.

Wassalamu'alaikum Wr. Wb.`;
};

export default function Generate({ sessions }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();

  const [resultId, setResultId] = React.useState(-1);
  const [invitationName, setInvitationName] = React.useState(-1);

  const mutation = useMutation((data) => axios.post('/api/create', data), {
    onSuccess: ({ data }) => {
      setResultId(data?.id);
      setInvitationName(data?.name);
    },
  });

  const onSubmit = async (values) => mutation.mutate(values);

  return (
    <Flex p="10" direction="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="name">
          <FormLabel>Nama</FormLabel>
          <Input {...register('name', { required: true })} type="text" />
          {errors.name && <FormErrorMessage>Name is required</FormErrorMessage>}
        </FormControl>
        <FormControl id="sessionId" mt="5">
          <Select
            placeholder="Pilih Sesi"
            {...register('sessionId', { required: true })}
          >
            {sessions.map((value) => (
              <option key={value.id} value={value.id}>
                {dayjs
                  .tz(value.date, 'Asia/Jakarta')
                  .format('dddd, D MMMM YYYY HH.mm')}
              </option>
            ))}
          </Select>
          {errors.sessionId && (
            <FormErrorMessage>Session is required</FormErrorMessage>
          )}
        </FormControl>
        <Center>
          <Button type="submit" mt="5" isLoading={mutation.isLoading}>
            Buat Undangan
          </Button>
        </Center>
      </form>
      <Text display={resultId !== -1 ? 'block' : 'none'} mt="10">
        Link : https://salwabagus.vercel.app/{resultId}
      </Text>
      <Button
        display={resultId !== -1 ? 'block' : 'none'}
        mt="10"
        onClick={() => {
          copy(generateMessage(invitationName, resultId), {
            format: 'text/plain',
            message: 'Press #{key} to copy',
            onCopy: () => {
              toast({
                title: 'Berhasil disalin',
                status: 'success',
                isClosable: true,
              });
            },
          });
        }}
      >
        Salin Pesan
      </Button>
    </Flex>
  );
}

export async function getStaticProps({ params }) {
  const sessions = await prisma.session.findMany();

  return {
    props: {
      sessions: sessions.map((value) => ({
        ...value,
        date: value.date.toISOString(),
      })),
    },
  };
}

import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  FormErrorMessage,
  Button,
  Center,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Generate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [resultId, setResultId] = React.useState(-1);

  const mutation = useMutation((data) => axios.post('/api/create', data), {
    onSuccess: ({ data }) => {
      setResultId(data?.id);
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
        <FormControl id="phone" mt="5">
          <InputGroup>
            <InputLeftAddon>+62</InputLeftAddon>
            <Input
              type="tel"
              placeholder="Nomer Telepon"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <FormErrorMessage>Phone is required</FormErrorMessage>
            )}
          </InputGroup>
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
      <Button display={resultId !== -1 ? 'block' : 'none'} mt="10">
        Salin Pesan
      </Button>
    </Flex>
  );
}

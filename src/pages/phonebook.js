import React from 'react';
import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import {  Box } from '@chakra-ui/react';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  });

  return (
<Box height="100vh" maxW='600px' backgroundColor="white">
  <Header />
      <Box overflowY="auto">
        <Form />
        <Filter />
        <Contacts />
      </Box>
</Box>
  );
};
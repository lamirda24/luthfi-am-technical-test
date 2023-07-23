import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Create from '../components/Create';
import Read from '../components/Read';

const Main = () => {
  return (
    <MainLayout>
      <h1>Simple CRUD</h1>
      <Create />
      <Read />
    </MainLayout>
  );
};

export default Main;

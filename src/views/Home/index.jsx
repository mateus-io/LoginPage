import Container from './styles';

//import AppContext from 'services/context';

import MainLayout from 'layouts/main';
import React from 'react';
import LoginContainer from '../../components/LoginContainer';
import GlobalStyle from '../../styles/globalStyle';

const Home = () => {
  //const { appName, description } = useContext(AppContext);

  return (
    <MainLayout>
      <GlobalStyle/>
      <Container>
        <LoginContainer/>
      </Container>
    </MainLayout>
  );
};

export default Home;

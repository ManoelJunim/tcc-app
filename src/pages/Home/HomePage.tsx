import React from 'react';
import { Divider, Grid } from '@material-ui/core';

import * as S from './styles';
import { Header, MenuBar } from 'components';
import { Calendar } from './components';
import { withAuth } from 'hocs';

const HomePageComponent = () => {
  return (
    <S.Container>
      <Header />
      <Grid container spacing={1}>
        <Grid item container xs={2} md={1} style={{ maxWidth: 53 }}>
          <MenuBar />
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item container xs={10} md={11} style={{ maxHeight: 500, minWidth: '96%' }}>
          <Calendar />
        </Grid>
      </Grid>
    </S.Container>
  );
};

const HomePage = withAuth(HomePageComponent);

export { HomePage };

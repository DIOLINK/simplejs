import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  contentImg: {
    height: '25vh',
  },
});

const Custom404 = () => {
  const classes = styles();
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h1" color="initial">
          {'404 - Page Not Found'}
        </Typography>
        <img src="/notFound.png" alt="notFound" height="250" />
      </Grid>
    </>
  );
};

export default Custom404;

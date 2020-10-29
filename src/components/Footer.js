import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = makeStyles({
  root: { paddingBottom: 5, marginLeft: 38 },
});

const Footer = () => {
  const classes = styles();
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      className={classes.root}
    >
      <img src="/Logo_v3.svg" style={{ width: 100, height: 100 }} />
      <Typography variant="h5">{'Obsidian'}</Typography>
      <Typography variant="subtitle1">
        {'Adrian Ponce y Roger Coverzola'}
      </Typography>
    </Grid>
  );
};

export default Footer;

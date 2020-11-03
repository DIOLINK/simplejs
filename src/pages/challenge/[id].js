import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';
import { listFiles } from '../../utils/files';
import Link from 'next/link';

const styles = makeStyles({
  root: {
    background: 'rgb(111,16,222)',
    background:
      'linear-gradient(45deg, rgba(21,113,202,1) 28%, rgba(11,166,250,1) 98%)',
    display: 'flex',
    flex: 1,
    minHeight: '100vh',
    overflow: 'hidden',
  },
  title: {
    margin: '26px 0',
    color: '#fff',
    textShadow: '-7px 8px 8px black',
    cursor: 'pointer',
  },
  containerCode: {
    padding: 12,
    display: 'flex',
    flex: 1,
    paddingBottom: '60vh',
  },
});

const challen = ({ file }) => {
  const classes = styles();
  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="flex-start"
        className={classes.root}
      >
        <Link href="/">
          <Typography variant="h1" className={classes.title}>
            {file}
          </Typography>
        </Link>
        <Grid container direction="row" justify="space-evenly" spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} className={classes.containerCode}>
              codigo
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} className={classes.containerCode}>
              resultados
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default challen;

export async function getStaticPaths() {
  const listfiles = await listFiles();

  const paths = listfiles.map((file) => ({
    params: { id: file },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      file: params.id,
    },
  };
}

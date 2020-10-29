import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import Footer from '../../src/components/Footer';

const styles = makeStyles({
  container: {
    background: 'rgb(167,96,213)',
    background:
      'linear-gradient(0deg, rgba(167,96,213,1) 26%, rgba(0,255,171,1) 100%)',
    minHeight: '100vh',
    display: 'flex',
    padding: '0 5em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: '1',
  },
  footer: { width: '80vw', background: 'transparent' },
  titleMain: {
    color: '#fff',
    fontWeight: 'bold',
    margin: 12,
  },
});

export default function Home() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Simple Js - ROGER</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/obsidianIcon-32x32.png"
        />
      </Head>
      <Typography variant="h2" className={classes.titleMain}>
        {'Javascript code programs'}
      </Typography>
      <Grid
        container
        alignContent="center"
        direction="column"
        className={classes.main}
      >
        <Grid item>
          <Paper className={classes.keyboardMain}>
            <Button variant="contained" color="primary" fullWidth></Button>
          </Paper>
        </Grid>
      </Grid>

      <Footer className={classes.footer} />
    </div>
  );
}

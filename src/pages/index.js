import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import Footer from '../../src/components/Footer';
import { listFiles } from '../utils/files';

const styles = makeStyles({
  container: {
    background: 'rgb(167,96,213)',
    background:
      'linear-gradient(0deg, rgba(167,96,213,1) 26%, rgba(0,255,171,1) 100%)',
    minHeight: '100vh',
    display: 'flex',
    flex: 1,
    padding: '0 5em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    marginTop: 20,
  },
  footer: { width: '80vw', background: 'transparent' },
  titleMain: {
    color: '#fff',
    fontWeight: 'bold',
    margin: 12,
  },
  keypad: {},
  buttonItem: {},
});

export default function Home({ title, listfiles }) {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Head>
        <title>{'Simple Js - ROGER'}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/obsidianIcon-32x32.png"
        />
      </Head>
      <Typography variant="h3" className={classes.titleMain}>
        {title}
      </Typography>
      <div className={classes.main}>
        <Grid container alignContent="center" direction="column" spacing={2}>
          {listfiles.map((file) => (
            <Grid item className={classes.keypad}>
              <Button
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                key={file}
              >
                <Typography variant="caption" className={classes.buttonItem}>
                  {file}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}

export async function getStaticProps(context) {
  const listfiles = await listFiles();

  return {
    props: {
      title: 'Javascript code programs',
      listfiles: listfiles,
    },
  };
}

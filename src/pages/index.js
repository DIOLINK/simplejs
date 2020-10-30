import Head from 'next/head';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
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
    textShadow: '-4px 6px 3px rgba(0,22,132,1)',
    fontWeight: 'bold',
    margin: 12,
  },
  buttonItem: { margin: 5, width: '33.33%' },
});

export default function Home({ title, listfiles }) {
  const classes = styles();
  const router = useRouter();

  return (
    <div className={classes.container}>
      <Head>
        <title>{'Simple Js - ROGER'}</title>
      </Head>
      <Typography variant="h3" className={classes.titleMain}>
        {title}
      </Typography>
      <div className={classes.main}>
        <Grid container alignContent="center" direction="column" spacing={2}>
          <Grid item className={classes.keypad} md={6}>
            {listfiles.map((file) => (
              <Button
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                key={file}
                className={classes.buttonItem}
                onClick={() => router.push(`/challenge/${file}`)}
              >
                <Typography variant="caption">{file}</Typography>
              </Button>
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}

export async function getStaticProps() {
  const listfiles = await listFiles();

  return {
    props: {
      title: 'Javascript code programs',
      listfiles: listfiles,
    },
  };
}

import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    padding: '5rem 0',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Home() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Head>
        <title>Simple Js - ROGER</title>
      </Head>

      <main className={classes.main}>hola</main>
    </div>
  );
}

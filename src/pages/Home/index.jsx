import {makeStyles, Container, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root} xs={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Home page</h1>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;

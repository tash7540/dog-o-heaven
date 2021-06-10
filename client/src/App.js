import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Posts from './components/posts/posts';
import Form from './components/form/form';
import dogo from './images/dogo.jfif';
import useStyles from './styles';

const App = ()=> {
    const classes = useStyles();

    return(
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Dogo Heaven</Typography>
          <img className={classes.image} src={dogo} alt="icon" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
}

export default App;
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom';
import './App.css';
import Routes from './routes/Routes';
import useAuth from './hooks/useAuth';
import {withTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
}));

function App({t, i18n}) {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const onLogOut = () => {
    auth.logOut();
    navigate('/login');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Web App
          </Typography>
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              {t('home')}
            </Button>
            <Button color="inherit" component={Link} to="/profile">
              {t('profile')}
            </Button>
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
                <Button color="inherit" component={Link} to="/profile">
                  {auth.user.firstName} {auth.user.lastName}
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  {t('logins')}
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  {t('registrations')}
                </Button>
              </>
            ))}
          <Button color="inherit" onClick={() => changeLanguage('ua')}>
            UA
          </Button>
          <Button color="inherit" onClick={() => changeLanguage('en')}>
            EN
          </Button>
        </Toolbar>
      </AppBar>

      <Routes />
    </div>
  );
}

export default withTranslation()(App);

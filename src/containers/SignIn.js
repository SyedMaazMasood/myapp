import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import compose from "recompose/compose";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import { makeStyles } from "@material-ui/core/styles";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { loginUser } from "../actions/auth.actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Let's Talk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//makeStyles(
const useStyles = (theme) => ({
  layout: {
    height: "100vh",

    //width: "auto",
    //display: "block", // Fix IE11 issue.
    //marginLeft: theme.spacing.unit * 3,
    //marginRight: theme.spacing.unit * 3,
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //   width: 400,
    //   marginLeft: "auto",
    //   marginRight: "auto",
    // },
  },
  image: {
    backgroundImage:
      "url(https://www.warwicksu.com/pageassets/campaigns-communities/campaigns/active/welfare/letstalk/Let_s_Talk_-_Web_page_banner.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    //backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //boxShadow: theme.shadows[5],
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  /* eslint-disable react/destructuring-assignment, react/prop-types */
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  };
  /* eslint-enable react/destructuring-assignment, react/prop-types */

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    const { loginUser } = this.props;
    loginUser(user);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    //const classes = useStyles();

    return (
      <React.Fragment>
        <Grid container component="main" className={classes.layout}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <main className={classes.layout}>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <form
                  className={classes.form}
                  onSubmit={this.handleSubmit}
                  noValidate
                >
                  <TextField
                    onChange={this.handleInputChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={!!errors.email}
                  />
                  <span className={classes.errorText}>{errors.email}</span>
                  <TextField
                    onChange={this.handleInputChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={!!errors.password}
                  />
                  <span className={classes.errorText}>{errors.password}</span>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    {/* <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid> */}
                    <Grid item>
                      <Typography className={classes.footer} variant="body1">
                        {"Don't have an account? "}
                        <NavLink to="/signup" className={classes.link}>
                          Sign Up
                        </NavLink>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                    <Copyright />
                  </Box>
                </form>
              </div>
            </main>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

SignIn.defaultProps = {
  errors: {},
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object,
  history: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  errors: state.errorReducer,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);

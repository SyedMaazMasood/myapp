import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import { registerUser } from "../actions/auth.actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Our Web App Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
  footer: {
    marginTop: theme.spacing.unit * 2,
  },
  errorText: {
    color: "#D50000",
    marginTop: "5px",
  },
  successText: {
    color: "#32971E",
    marginTop: "10px",
    textDecoration: "none",
  },
});

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errors: {},
    successfulSignup: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.success) {
      this.setState({
        successfulSignup: true,
      });
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;
    const user = {
      name,
      email,
      password,
      passwordConfirm,
    };
    const { registerUser } = this.props;
    registerUser(user);
  };

  render() {
    const { classes } = this.props;
    const { errors, successfulSignup } = this.state;

    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {/* <main className={classes.layout}> */}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            {successfulSignup && (
              <NavLink to="/login" className={classes.successText}>
                Successfully signed up! Click here to log in.
              </NavLink>
            )}
            <form
              className={classes.form}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.handleInputChange}
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    error={!!errors.name}
                  />
                  <span className={classes.errorText}>{errors.name}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.handleInputChange}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={!!errors.email}
                  />
                  <span className={classes.errorText}>{errors.email}</span>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.handleInputChange}
                    variant="outlined"
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={this.handleInputChange}
                    variant="outlined"
                    required
                    fullWidth
                    name="passwordConfirm"
                    label="Confirm Password"
                    type="password"
                    id="passwordConfirm"
                    autoComplete="current-password-confirm"
                    error={!!errors.passwordConfirm}
                  />
                  <span className={classes.errorText}>
                    {errors.passwordConfirm || errors.error}
                  </span>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  {"Already have an account? "}
                  <NavLink to="/login" className={classes.link}>
                    Sign In
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
          {/* </main> */}
          <Box mt={5}>
            <Copyright />
          </Box>{" "}
        </Container>
      </React.Fragment>
    );
  }
}

SignUp.defaultProps = {
  errors: {},
};

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  errors: state.errorReducer,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (user) => dispatch(registerUser(user)),
});

export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);

import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { logoutUser } from "../actions/auth.actions";

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

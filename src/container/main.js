import { connect } from 'react-redux'
import Counter from '../component/main'
import { increment, decrement, reset,login,logout } from '../actions';

const mapStateToProps = (state) => {
   return {
      counter: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset()),
      login: () =>dispatch(login()),
      logout: () =>dispatch(logout())
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
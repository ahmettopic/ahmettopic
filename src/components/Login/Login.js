import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import firebaseConfig from '../../config/firebaseConfig';
import { AuthContext } from '../../Auth';
// Material Grid
import Grid from '@material-ui/core/Grid';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div
      style={{
        padding: '1em',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container justify="center">
        <form onSubmit={handleLogin}>
          <Grid item xs={12}>
            <label>
              <input name="email" type="email" placeholder="Email" />
            </label>
          </Grid>
          <Grid item xs={12}>
            <label>
              <input name="password" type="password" placeholder="Password" />
            </label>
          </Grid>
          <button type="submit">LOGIN</button>
        </form>
      </Grid>
    </div>
  );
};

export default withRouter(Login);

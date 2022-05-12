import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../components/atoms/copyright';
import { connect } from 'react-redux';
import { loginApi } from '../redux/action/auth';
import { useState } from 'react';
import { Alert, Collapse } from '@mui/material';
import ButtonLoading from '../components/atoms/buttonLoading';
import { useNavigate } from 'react-router-dom';

function SignIn(props) {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState("error");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    props.login(data.get('username'), data.get('password'))
      .then((res) => {
        setStatus('success');
        console.log(res.data)
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err)
        setStatus('error');
        setMessage(err.response.data.message);
        // sementara
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Masuk
        </Typography>
        <Collapse in={message !== '' ? true : false}>
          <Alert severity={status}>{message}</Alert>
        </Collapse>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete='off'
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <ButtonLoading
            sx={{ mt: 3, mb: 2 }}
            variant="contained"
            type="submit"
            fullWidth
            statusLoading={props.isLoading}
            title="Masuk"
          />
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
})

const reduxDispatch = (dispatch) => ({
  login: (username, password) => dispatch(loginApi(username, password)),
})


export default connect(reduxState, reduxDispatch)(SignIn);
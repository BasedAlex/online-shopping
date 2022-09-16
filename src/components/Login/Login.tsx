import React from 'react';
import Form from 'components/Form/Form';
import { setUser } from '../../store/reducers/auth/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
        navigate('/');
      })
      .catch(() => alert('Несуществующий пользователь!'));
  };

  return (
    <>
      <Form title="Войти" handleClick={handleLogin} />
    </>
  );
}

export default Login;

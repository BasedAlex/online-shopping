import React from 'react';
import Form from 'components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../store/reducers/auth/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'hooks/redux-hooks';

function SignUp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <>
      <Form title="Зарегистрироваться" handleClick={handleRegister} />
    </>
  );
}

export default SignUp;

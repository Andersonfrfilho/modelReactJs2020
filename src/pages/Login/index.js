import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List } from './styles';
import api from '../../services/api';
import Container from '../../components/Container';
import * as LoginActions from '../../store/modules/login/actions';

export default function Login() {
  const { loading, error, message } = useSelector(state => state.common);
  const { users } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  useEffect(() => {
    dispatch(LoginActions.requestUsersLocal());
   }, []);//eslint-disable-line
  useMemo(() => {
    if (users.length !== 0) {
      dispatch(LoginActions.addToUsersLocal(users));
    }
   }, [users]);//eslint-disable-line
  function handleInputChange(text) {
    setNewUser(text.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(LoginActions.addToUserRequest(newUser, users));
    setNewUser('');
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Main
      </h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Adicionar Usuario"
          value={newUser}
          onChange={text => handleInputChange(text)}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {users.map((user, index) => (
          <li key={index.toString()}>
            <span>{user.name}</span>
            <Link to={`/Home/${encodeURIComponent(user.username)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}

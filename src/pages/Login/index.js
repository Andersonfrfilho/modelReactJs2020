import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Form, SubmitButton, List } from './styles';
import api from '../../services/api';
import Container from '../../components/Container';
import * as LoginActions from '../../store/modules/login/actions';

export default function Login() {
  const { user } = useSelector(state => state.login);
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadPrudto() {
      console.tron.log('lol');
    }
    loadPrudto();
  }, []);
  console.tron.log(user);
  // handleInputChange = e => {
  //   // this.setState({ newUser: e.target.value });
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   // const { addToUserRequest } = this.props;
  //   addToUserRequest(1);
  //   // this.setState({ loading: true });
  //   // const { newUser, users } = this.state;

  //   const response = await api.get(`/users/${newUser}`);

  //   const data = { username: response.data.login, name: response.data.name };
  //   // this.setState({ users: [...users, data], newUser: '' });
  //   // this.setState({ loading: false });
  //   // this.props.history.push('/home');
  // };

  return (
    <Container>
      {/* <h1>
        <FaGithubAlt />
        Main
      </h1>
      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Adicionar Usuario"
          value={newUser}
          onChange={() => {}}
        />
        <SubmitButton loading={loading}>
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
      </List> */}
    </Container>
  );
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Loading, Owner, RepositoryList } from './styles';
import Container from '../../components/Container';

export default function Home() {
  const { loading } = useSelector(state => state.home);
  const dispatch = useDispatch();
  // constructor(props) {
  //  super(props);
  //  this.state = {
  //    user: {},
  //    repository: [],
  //    loading: false,
  //  };
  // }

  // async componentDidMount() {
  //  const { match } = this.props;
  //  const username = decodeURIComponent(match.params.username);
  //  // const { data } = await api.get(`/users/${username}`);
  //  const [{ data: user }, { data: repos }] = await Promise.all([
  //    api.get(`/users/${username}`),
  //    api.get(`/users/${username}/repos`, {
  //      params: {
  //        per_page: 5,
  //      },
  //    }),
  //  ]);
  //  this.setState({ user });
  //  this.setState({ repository: repos });
  //  console.log(repos);
  // }

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <Container>
      {/* <Owner>
        <Link to="/">Voltar aos usuários</Link>
        <img src={user.avatar_url} alt={user.name} />
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
      </Owner>
      <RepositoryList>
        {repository.map((repo, index) => (
          <li key={index.toString()}>
            <img src={repo.owner.avatar_url} alt={repo.owner.name} />
            <div>
              <strong>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.language}</p>
              </strong>
            </div>
          </li>
        ))}
      </RepositoryList> */}
    </Container>
  );
}

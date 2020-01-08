export function addToUserRequest(user) {
  console.tron.log('entrou_na_action_request');
  return {
    type: 'REQUEST_ADD_TO_USER',
    payload: {
      user,
    },
  };
}

export function addToUser(user) {
  console.tron.log('entrou na action denovo');
  return {
    type: 'ADD_TO_USER',
    payload: {
      user,
    },
  };
}

import produce from 'immer';

const INITIAL_STATE = {
  user: '',
};

export default function login(state = INITIAL_STATE, action) {
  console.tron.log('veio pro reducer');
  switch (action.type) {
    case 'ADD_TO_USER':
      return produce(state, draft => {
        draft.push(action.payload.user);
      });
    default:
      return state;
  }
}

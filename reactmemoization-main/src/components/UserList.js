import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { fetchUsers } from '../hooks/useUser'; 

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const expensiveFilterOperation = (users) => {
  console.log('Running expensive filter...');

  const start = Date.now();
  while (Date.now() - start < 1000) {
  }

  return users.filter(user => user.active);
};

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0); 

  useEffect(() => {
    fetchUsers(dispatch);
  }, []);

//   const activeUsers = expensiveFilterOperation(state.data);


const activeUsers  = useMemo(() => {
    return expensiveFilterOperation(state.data)
},[state.data])

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p>Error: {state.error}</p>;

  return (
    <div>
      <h2>Active Users</h2>
      <button onClick={() => setCount(count + 1)}>Re-render (Count: {count})</button>
      <ul>
        {activeUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

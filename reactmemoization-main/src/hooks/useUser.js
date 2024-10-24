export const fetchUsers = async (dispatch) => {
    dispatch({ type: 'FETCH_START' });
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      console.log(users)
  
      const modifiedUsers = users.map(user => ({
        ...user,
        active: Math.random() > 0.5, 
      }));
  
      dispatch({ type: 'FETCH_SUCCESS', payload: modifiedUsers });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: 'Failed to fetch users' });
    }
  };
  
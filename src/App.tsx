import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { PostContainer } from './components/PostContainer';
import { PostContainer2 } from './components/PostContainer2';

// https://www.youtube.com/watch?v=Od5H_CiU2vM&list=PL6DxKON1uLOHsBCJ_vVuvRsW84VnqmPp6&index=8

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector((state) => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  // if (isLoading) {
  //   return <h1>Загрузка...</h1>;
  // }

  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  return (
    <div className="App">
      {/* {JSON.stringify(users, null, 2)} */}
      <div style={{ display: 'flex' }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;

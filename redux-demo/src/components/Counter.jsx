import Count from './Count';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import { useEffect } from 'react';

export default function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const incrementer = 2;
  const users = useSelector(state => state.users);

  useEffect(() => {
      dispatch(fetchData());
  }, [dispatch]);

  return (
        <div>
            <p>
                <Count count={count} />
            </p>
            <Stack spacing={2} direction="row" justifyContent={'center'}>
                <Button variant="contained" onClick={() => dispatch({type: "INCREMENT", payload: incrementer})}>
                    Прибавить { incrementer }
                </Button>
                <Button variant="contained" onClick={() => dispatch({type: "DECREMENT", payload: incrementer})}>
                    Отнять { incrementer }
                </Button>
                <Button variant="contained" onClick={() => dispatch(fetchData())}>
                    Загрузить пользователей
                </Button>
            </Stack>
            <ul className="users-list" style={{textAlign: "left"}}>
                {
                    users.pending ? <CircularProgress /> :
                        users.error ? users.error : 
                            users.users.map(user => <li>{user.id}. {user.name} - {user.email} </li>)}
            </ul>
        </div>
  );
}
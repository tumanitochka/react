import Count from './Count';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const uses = useSelector(state => state.counter)
  const count = uses;
  const dispatch = useDispatch();
  const incrementer = 100;

  return (
        <div>
            <p>
                <Count count={count} />
            </p>
            <Stack spacing={2} direction="row">
                <Button 
								variant="contained" 
								onClick={() => dispatch({type: "INCREMENT", payload: incrementer })}>
									Прибавить {incrementer}
								</Button>
                <Button 
								variant="contained" 
								onClick={() => dispatch({type: "DECREMENT", payload: incrementer})}>
									Отнять {incrementer}
								</Button>
            </Stack>
        </div>
  );
}
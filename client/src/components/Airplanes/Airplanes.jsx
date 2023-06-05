import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAirplanes } from '../../store/airplanes/airplanesSlice';
import { Spinner } from '../Spinner';
import { Container } from '../Container';
import { AirplaneItem } from '../AirplaneItem';
import styles from './styles.module.css';
import { path } from '../../paths';
import { Button } from '../Button';
import { useSort } from '../../hooks/useSort';


export const Airplanes = () => {
    const dispatch = useDispatch();
    const {airplanes, isLoading} = useSelector((state)=> state.airplanes);
    const {isDescSort, setDescSort, sortedItems} = useSort(airplanes || []);
    useEffect(()=>{
        dispatch(getAirplanes());
    },[dispatch]);

    if (isLoading) {
        return <Spinner />
    }

    return (
    <div>
      <div className={styles.sort}>
        <Container className={styles.header}>
           <Button className={styles.sortBtn} onClick={() => setDescSort(!isDescSort)}>
              Sort by Price {`${isDescSort ? 'up' : 'down'}`}
           </Button>
           <Link  className={styles.btn} to={path.createAirplane}>Create new airplane</Link>
        </Container>
      </div>
      <Container className={styles.airplanesGrid}>
        {
          sortedItems?.map(airplane => (
            <AirplaneItem  key={airplane._id} {...airplane}/>
          ))
        }
      </Container>
    </div>
  )
}

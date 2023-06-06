import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getAirplane } from '../../store/airplane/airplaneSlice';
import { Spinner } from '../../components/Spinner';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import styles from './styles.module.css';

export const AirplanePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { airplane, isLoading } = useSelector((state) => state.airplane);
    
  useEffect(() => {
    dispatch(getAirplane(id));
  },[dispatch, id]);

  if (isLoading) return <Spinner />

  return airplane && (
   
    <Container className={styles.airplane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton>Back</Button>
          <h1 className={styles.title}>{airplane.name}</h1>
          <div className={styles.price}>{airplane.price}</div>
          <Button 
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate('/order')}
          >
            Place your order
          </Button>
          <p className={styles.desc}>{airplane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={airplane.image}/>
        </div>
    </Container>
  )
}

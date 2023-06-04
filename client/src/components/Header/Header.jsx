import { Container } from '../Container';
import waveImage from './wave.svg';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
        <Container className={styles.content}>
            <h1 className={styles.title}>
                Making travel easy
            </h1>
            <p className={styles.desc}>
                {`With our company you forget about everything \n except the high level of traveling`}
            </p>
        </Container>
        <img className={styles.wave} src={waveImage}/>
    </div>
  )
}

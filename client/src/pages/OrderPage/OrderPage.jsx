import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Container } from "../../components/Container"
import styles from './styles.module.css';

export const OrderPage = () => {
    const navigate = useNavigate();
    return (
    <Container className={styles.order}>
        <h1>Your order will be delivered soon</h1>
        <Button 
            containerClassName={styles.button}
            onClick={() => navigate('/')}
        >
            Back to homepage
        </Button>
    </Container>
  )
}

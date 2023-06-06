import { Link } from "react-router-dom"
import { path } from "../../paths"
import styles from './styles.module.css';


export const AirplaneItem = ({
    name = '', 
    price = 0.0, 
    capacity = 0, 
    description = '', 
    image = null,
    _id = '' }) => {
  return (
    <Link className={styles.airplaneItem} to={`${path.airplane}/${_id}`}>
        <div className={styles.capacity}>{capacity}</div>
        {image && <img className={styles.image} src={image} alt={name}/>}
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <span className={styles.price}>{price}</span>
        </div>
    </Link>
  )
}

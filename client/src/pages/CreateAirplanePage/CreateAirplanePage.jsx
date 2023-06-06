import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAirplane } from '../../store/airplane/airplaneSlice';
import { Container } from '../../components/Container';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.css';
import { path } from '../../paths';

export const CreateAirplanePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.airplane);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [capacity, setCapacity] = useState('');
    const [image, setImage] = useState(null);

    const handleCreateAirplane = useCallback(()=>{
        const formData = new FormData();  
        formData.append('name',name);
        formData.append('price',price);
        formData.append('description',description);
        formData.append('capacity',capacity);
        formData.append('image',image);

        dispatch(createAirplane(formData)).then(res => {
            console.log(res)
            if (!res.error) {
                navigate(`${path.airplane}/${res.payload._id}`, {replace: true});
            }
        });

    },[name, price, description, capacity, image]);

  return (
    <Container className={styles.createAirplane}>
        <Button  
            containerClassName={styles.backButtonContainer}
            onClick={() => navigate(-1)} 
            isBackButton
        >
            Back
        </Button>
        <form className={styles.form}>
            <h1 className={styles.title}>Create the Airplane</h1>
            <Input 
                name='name' 
                placeholder='Enter the name of the airplane'
                error={errors && errors.name && errors.name.message}
                onChange={(e) => setName(e.target.value)}
            />
             <Input 
                name='price' 
                placeholder='Enter the price of the airplane'
                error={errors && errors.price && errors.price.message}
                onChange={(e) => setPrice(e.target.value)}
            />
             <Input 
                name='description' 
                placeholder='Enter a describe of the airplane'
                error={errors && errors.description && errors.description.message}
                onChange={(e) => setDescription(e.target.value)}
            />
             <Input 
                name='capacity' 
                placeholder='Enter the airplane capacity'
                error={errors && errors.capacity && errors.capacity.message}
                onChange={(e) => setCapacity(e.target.value)}
            />
              <Input 
                name='image'
                type='file' 
                placeholder='Select an image of the airplane'
                error={errors && errors.image && errors.image.message}
                onChange={(e) => setImage(e.target.files[0])}
            />
            <Button 
                containerClassName={styles.buttonContainer}
                onClick={ handleCreateAirplane }
            >
                Create
            </Button>
        </form>
    </Container>
  )
}

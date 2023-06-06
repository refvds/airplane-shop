import styles from './styles.module.css';
export const Input = ({
    type = 'text', 
    name = '',
    containerClassName = '',
    placeholder = '',
    onChange = () => null,
    error = ''
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
        <input 
            className={ styles.input }
            type={ type }
            name={ name }
            placeholder={ placeholder }
            onChange={ onChange }
        />
       { error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

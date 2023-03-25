import styles from '../style/Containers.module.css'

const TopContainer = ({children}) => {
    return (
      <div className={styles.topContainer}>
        {children}
      </div>
    );
};
  
export default TopContainer;
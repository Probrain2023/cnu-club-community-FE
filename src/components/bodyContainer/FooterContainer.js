import styles from '../style/Containers.module.css'

const FooterContainer = ({children}) => {
    return (
      <div className={styles.footerContainer}>
        {children}
      </div>
    );
};
  
export default FooterContainer;
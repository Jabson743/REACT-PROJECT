const CustomButton = (props) => {

     const {styles, onClick, textContent, type} = props;

     return (
          <button onClick={onClick} className={styles} type={type}>{textContent}</button>
     )
}

export default CustomButton;
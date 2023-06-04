import { useEffect, useRef, useState} from "react";
import styles from "../css/Layout.module.css"

function Layout(props){

    let userInput1 = useRef();
    let userInput2 = useRef();
    let [currentValue1, setCurrentValue1] = useState("");
    let [currentValue2, setCurrentValue2] = useState("");
    let [unit1, setUnit1] = useState("");
    let [unit2, setUnit2] = useState("");
    useEffect(()=>{
        setUnit1("Unit 1");
        setUnit2("Unit 2")
    },[props.convertionType])
    let [operator, setOperator] = useState(props.data[0][2])
    
    const options = props.data

    function convertionHandler() {

        if(userInput1.current.value==currentValue1){
            userInput1.current.value = (userInput2.current.value * operator).toFixed(2);
            setCurrentValue2(userInput2.current.value);
            setCurrentValue1(userInput1.current.value);
        }
        
        else if(userInput2.current.value==currentValue2){
            userInput2.current.value = (userInput1.current.value / operator).toFixed(2);
            setCurrentValue1(userInput1.current.value);
            setCurrentValue2(userInput2.current.value)
        }     
    }

    const clickHandler = (event) => {
        setCurrentValue1(0);
        setCurrentValue2(0);
        userInput1.current.value = 0;
        userInput2.current.value = 0;
        
        setUnit1(event.target.value.split(",")[0]);
        setUnit2(event.target.value.split(",")[1]);
        setOperator(parseFloat(event.target.value.split(",")[2]))
    }
    

    return(
        <div className={styles.container}>
            <h1 className={styles.alignCenter}>{props.convertionType} Convertion</h1>
            <input type="number" className={styles.input} ref={userInput1} onChange= {convertionHandler} />
            <label className={styles.label} >{unit1}</label>
            <input type="number" className={styles.input} ref={userInput2} onChange= {convertionHandler}/>
            <label className={styles.label}>{unit2}</label>
            <select className={styles.select} onChange={clickHandler}>
                { options.map((option) => {
                    return <option value={option} className={styles.option}>{option[0]} into {option[1]}</option>
                })}
            </select>
        </div>
    )
}

export default Layout;
import { useState } from 'react';
import ArrowDown from "../../assets/ArrowDown.png"
import ArrowUp from "../../assets/ArrowUp.png"
import styles from "./Dropdown.module.css"

export default function Dropdown({ content, title }) {
    const [open, setOpen] = useState(false);

    const dropdownOpen = () => {
        setOpen(!open);
      };

  return (
    <div className={ styles.container }>
      <button className={ styles.button } onClick={ dropdownOpen }>
        <h1 className={ styles.title }>{ title }</h1>
        <span className={ styles.arrowContent }>
          {open ? 
          <img className={ styles.arrow } src= { ArrowUp } alt="" /> 
          : <img className={ styles.arrow } src= { ArrowDown } alt="" />}
        </span>
      </button>
      {open ? (
        <div className={ styles.textContent }>
          {Array.isArray(content) ?(
            <ul className={ styles.list }>
              {content.map((element, index) =>(
                <li key={ index }>{ element }</li>
              ))}  
            </ul>  
          ): (<p> { content }</p>)} 
        </div> 
      ): null}
    </div>
  )
}
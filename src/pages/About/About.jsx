import Banners from '../../components/Banners/Banners';
import Dropdown from '../../components/Dropdown/Dropdown'
import DataAbout from "../../data/aboutData.json";
import styles from "./About.module.css";


export default function About() {
  return (
    <div className= { styles.aboutcontainer }>
      <Banners type="about"/>
      <div className={ styles.dropdownContainer }>
        {DataAbout.map((aboutElement, index) =>
            <Dropdown key={ index } content={ aboutElement.content } title={ aboutElement.title }/>
          )}
      </div>  
    </div>
  )
}

import styles from './Tag.module.css'

export default function Tag({ tags }) {

  return (
    <div className={ styles.tagsContainer }>
      {tags.map((TagElement, index) =>(
        <span key={ index } className={ styles.tag }>{ TagElement }</span>
      ))}
    </div>
  )
}

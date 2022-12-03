import styles from "./AddField.module.scss"

const AddField: React.FC<{
  setAddNewField: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setAddNewField }) => {
  const clickHandler = () => setAddNewField(true)

  return (
    <button className={styles.addField} onClick={clickHandler}>
      Add Field
    </button>
  )
}

export default AddField

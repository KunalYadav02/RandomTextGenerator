import { FaTimes } from "react-icons/fa"
import NewField from "../NewField"

import styles from "./ChosenInputs.module.scss"

const ChosenInputs: React.FC<{
  addNewField: boolean
  setAddNewField: React.Dispatch<React.SetStateAction<boolean>>
  setFields: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        type: string
        id: string
      }[]
    >
  >
  fields: {
    name: string
    type: string
    id: string
  }[]
}> = ({ addNewField, setAddNewField, setFields, fields }) => {
  const removeField = (id: string) =>
    setFields(fields => fields.filter(field => field.id !== id))

  return (
    <ol className={styles.chosenInputs}>
      {fields.map((field, index) => (
        <li key={index}>
          <div>
            <span>{index + 1 + ")"} </span>
            <span>{field.name} </span>:&nbsp;
            <code className={styles.type}>{field.type}</code>
          </div>
          <button
            className={styles.cancel}
            onClick={() => removeField(field.id)}
          >
            <FaTimes />
          </button>
        </li>
      ))}
      {addNewField && (
        <NewField
          length={fields.length}
          setFields={setFields}
          setAddNewField={setAddNewField}
        />
      )}
    </ol>
  )
}

export default ChosenInputs

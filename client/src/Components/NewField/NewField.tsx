import { nanoid } from "nanoid"
import React, { useState } from "react"
import { MdDone } from "react-icons/md"
import styles from "./NewField.module.scss"

const NewField: React.FC<{
  length: number
  setFields: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        type: string
        id: string
      }[]
    >
  >
  setAddNewField: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ length, setFields, setAddNewField }) => {
  const [input, setInput] = useState({ name: "", type: "" })
  const TYPES = ["Name", "Email", "Avatar", "Text", "Phone"]

  const addField = () => {
    if (input.name === "" || input.type == "") return alert("Empty Field")

    setFields(fields => [...fields, { ...input, id: nanoid(4) }])
    setInput(input => ({ ...input, name: "", type: "" }))
    setAddNewField(false)
  }

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setInput(input => ({ ...input, [e.target.name]: e.target.value }))

  return (
    <li className={styles.newField}>
      <div>
        <span>{length + 1 + ")"} </span>
        <input
          onChange={changeHandler}
          type="text"
          name="name"
          value={input.name}
          placeholder="Field Name"
          autoFocus
          required
        />
        &nbsp;:&nbsp;
        <select onChange={changeHandler} name="type" value={input.type}>
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {TYPES.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.done} onClick={addField}>
        <MdDone />
      </button>
    </li>
  )
}
export default NewField

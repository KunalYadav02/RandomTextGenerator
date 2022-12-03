import React, { useState } from "react"
import AddField from "../../Components/AddField"
import ChosenInputs from "../../Components/ChosenInputs"
import GenerateOutput from "../../Components/GenerateOutput"
import Output from "../../Components/Output"
import styles from "./HomeMain.module.scss"

const HomeMain = () => {
  const [fields, setFields] = useState<
    { name: string; type: string; id: string }[]
  >([])
  const [numDocuments, setNumDocuments] = useState<number>()
  const [output, setOutput] = useState<
    { [fieldName: string]: string | { urk: string; Image: string } }[] | null
  >(null)
  const [addNewField, setAddNewField] = useState(false)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumDocuments(parseInt(e.target.value))
  return (
    <section className={styles.homeMain}>
      <h3>Input Format</h3>
      <div className={styles.row}>
        <ChosenInputs
          fields={fields}
          setFields={setFields}
          addNewField={addNewField}
          setAddNewField={setAddNewField}
        />
        <GenerateOutput
          numDocuments={numDocuments}
          setOutput={setOutput}
          fields={fields}
        />
      </div>
      <div className={styles.btnContainer}>
        <AddField setAddNewField={setAddNewField} />
        <input
          onChange={changeHandler}
          type="number"
          name="numDocuments"
          placeholder="No. of Documents"
          value={numDocuments}
          min={1}
        />
      </div>
      {output && <Output output={output} setOutput={setOutput} />}
    </section>
  )
}

export default HomeMain

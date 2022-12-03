import randomDataAPI from "../../API/randomData.api"
import styles from "./GenerateOutput.module.scss"

const GenerateOutput: React.FC<{
  numDocuments: number | undefined
  fields: {
    name: string
    type: string
    id: string
  }[]
  setOutput: React.Dispatch<
    React.SetStateAction<
      | {
          [fieldName: string]:
            | string
            | {
                urk: string
                Image: string
              }
        }[]
      | null
    >
  >
}> = ({ numDocuments, fields, setOutput }) => {
  const submitHandler = async () => {
    const res = await randomDataAPI({
      numDocuments: numDocuments ? numDocuments : 1,
      schema: fields.map(field => ({
        fieldName: field.name,
        fieldType: field.type,
      })),
    })
    setOutput(res.data)
  }

  return (
    <button className={styles.generateBtn} onClick={submitHandler}>
      <span>Generate Output</span>
    </button>
  )
}

export default GenerateOutput

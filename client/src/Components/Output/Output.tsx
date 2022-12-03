import React from "react"
import { FaTimes } from "react-icons/fa"
import styles from "./Output.module.scss"

const Output: React.FC<{
  output:
    | {
        [fieldName: string]:
          | string
          | {
              urk: string
              Image: string
            }
      }[]
    | null
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
}> = ({ output, setOutput }) => {
  const mainClickHandler = (e: React.MouseEvent) => e.stopPropagation()

  const close = () => setOutput(null)
  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(output, null, 2))
  }

  return (
    <section className={styles.output} onClick={close}>
      <div onClick={mainClickHandler}>
        <h3 className={styles.header}>
          <span>Output:</span>
          <button onClick={close} className={styles.cancel}>
            <FaTimes />
          </button>
        </h3>
        <pre>{JSON.stringify(output, null, 2)}</pre>
        <button className={styles.clipboard} onClick={copy}>
          Copy to Clipboard
        </button>
      </div>
    </section>
  )
}

export default Output

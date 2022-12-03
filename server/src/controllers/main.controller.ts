import { controller } from "./controller";
import randomPhoneNumber from "./phoneNumber.controller.js";
import randomEmail from "./randomEmail.js";
import randomIdenticon from "./randomIdenticon.controller.js";
import randomName from "./randomName.controller.js";
import randomParagraph from "./randomParagraph.controller.js";

const randomGenerator: controller = async (req, res) => {


    const numDocuments = req.body.numDocuments
    const schema = req.body.schema as { fieldName: string, fieldType: string | { image: string, url: string } }[]

    const data = []

    for (let i = 0; i < numDocuments; i++) {
        const iteration: {
            [key: string]: string | { image: string, url: string }
        } = {}
        schema.forEach(sch => {

            switch (sch.fieldType) {
                case "Name":
                    iteration[sch.fieldName] = randomName()
                    break;
                case "Email":
                    iteration[sch.fieldName] = randomEmail()
                    break;
                case "Phone":
                    iteration[sch.fieldName] = randomPhoneNumber()
                    break;
                case "Text":
                    iteration[sch.fieldName] = randomParagraph(5)
                    break;
                case "Avatar":
                    iteration[sch.fieldName] = randomIdenticon()
                    break;
                default: break;
            }


        })
        data.push(iteration)
    }


    return res.status(200).send({ message: "Data Generated", data })

}

export default randomGenerator
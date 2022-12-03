
const randomDigit = (index: number) => index === 0 ? Math.floor(Math.random() * 5) + 5 : Math.floor(Math.random() * 10)

const randomPhoneNumber = () => {
    const length = 10
    let phoneNumber = ""
    for (let i = 0; i < length; i++)
        phoneNumber += randomDigit(i)
    return phoneNumber
}

export default randomPhoneNumber
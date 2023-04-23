import {atom} from "recoil"

const userLoginAtom= atom({
    key:"userLoggedIn",
    default: false
})

export default userLoginAtom
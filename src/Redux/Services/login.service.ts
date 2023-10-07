import { auth, provider } from "@/Common/api/config"
import { signInWithPopup } from "firebase/auth"

export const LoginGoogle = async () => {
    return (signInWithPopup(auth, provider)
    .then((data) => {
        return data
    }))
}
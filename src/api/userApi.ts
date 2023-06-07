import { IRequestUpdate, IUser } from "../type/userTypes"
import axiosInstan from "./axiosInstan"

const userApi = {
    getAllUser: () : Promise<IUser[]> => {
        return axiosInstan.get('users')
    },

    getUserProfile: (UserID: number) : Promise<IUser> => {
        return axiosInstan.get('users/' + UserID)
    },

    updateUserInfo: (UserID: number, modifyInfo: IRequestUpdate) 
    : Promise<any> => {
        return axiosInstan.put('users/' + UserID, modifyInfo)
    }
}

export default userApi
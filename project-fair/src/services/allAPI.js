// register api

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"


export const registerAPI =async (user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/register`,user,"")
}

// login api

export const loginAPI =async (user)=>{
    return await commonAPI('POST',`${BASE_URL}/user/login`,user,"")
}
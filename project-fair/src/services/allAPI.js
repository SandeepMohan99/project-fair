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

//addproject

export const addprojectAPI =async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${BASE_URL}/project/add`,reqBody,reqHeader)
}

//homeProject
export const homeprojectAPI =async ()=>{
    return await commonAPI('GET',`${BASE_URL}/projects/home-project`,"","")
}

//allProject
export const allProjectAPI =async (searchKey,reqHeader)=>{
    //query parameter = path?key=value
    return await commonAPI('GET',`${BASE_URL}/projects/all-project?search=${searchKey}`,"",reqHeader)
}

//userProject
export const userProjectAPI =async (reqHeader)=>{
    return await commonAPI('GET',`${BASE_URL}/user/all-project`,"",reqHeader)
}


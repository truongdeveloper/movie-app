import { STORAGE } from "@/Constants";
import { isEmpty } from "lodash"

export const setUserInfo = (userInfor: any) => {
    let dataString = ''
    if(!isEmpty(userInfor)){
        dataString = JSON.stringify(userInfor);
    }
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE.USER, dataString);
    }
}

export const getUserInfo = () => {
    let data;
    if (typeof window !== 'undefined') {
        data  = window.localStorage.getItem(STORAGE.USER);
    }
    try {
        if(data) {
            const objData = JSON.parse(data);
            return objData || data;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const setAccessToken = (accessToken: any) => {
    let dataString = ''
    if(!isEmpty(accessToken)){
        dataString = JSON.stringify(accessToken);
    }
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE.ACCESS_TOKEN, dataString);
    }
}

export const getAccessToken = () => {
    let data;
    if (typeof window !== 'undefined') {
        data  = window.localStorage.getItem(STORAGE.ACCESS_TOKEN);
    }
    try {
        if(data) {
            const objData = JSON.parse(data);
            return objData || data;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const setRefreshToken = (refreshToken: any) => {
    let dataString = ''
    if(!isEmpty(refreshToken)){
        dataString = JSON.stringify(refreshToken);
    }
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE.REFRESH_TOKEN, dataString);
    }
}

export const getRefreshToken = () => {
    let data;
    if (typeof window !== 'undefined') {
        data  = window.localStorage.getItem(STORAGE.REFRESH_TOKEN);
    }
    try {
        if(data) {
            const objData = JSON.parse(data);
            return objData || data;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}
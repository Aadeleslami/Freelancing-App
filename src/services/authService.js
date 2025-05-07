import http from "./httpService";

export function getOtp (data){
    http.post("/user/get-otp",data).then(({data})=> data.data)
}
export function checkOtp (data){
    http.post("/user/check-otp",data)
}
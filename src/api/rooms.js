import axiosSecure from "."

// fetch all rooms from db
export const getAllRooms = async ()=>{
    const {data} = await axiosSecure('/rooms');
    return data;
}

// Fetch all rooms for host
export const getHostRooms = async(email)=>{
    const {data} = await axiosSecure(`/rooms/${email}`)
    return data;
}

// fetch single room data from db

export const getRoom = async(id)=>{
    const {data} = await axiosSecure(`/room/${id}`)
return data;
}

// save roomdata in db
export const addRoom = async (roomData)=>{
    const {data} = await axiosSecure.post(`/rooms`, roomData)
    return data;
}


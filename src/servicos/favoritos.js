import axios from "axios"


const favoritoAPI = axios.create({baseURL: "http://localhost:8000/favorito"})

async function getFavorito(){
    const response = await favoritoAPI.get('/')

    return response.data
}

async function postFavorito(id){
    await favoritoAPI.post(`/${id}`)
}

async function deleteFavorito(id){
    await favoritoAPI.delete(`/${id}`)
}
export{
    getFavorito,
    postFavorito,
    deleteFavorito
}
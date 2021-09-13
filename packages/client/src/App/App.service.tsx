import { StatusDto } from "./dto/status.dto"

const GetStatus = (serverId: string) : Promise<StatusDto> => {
    const path = 'http://localhost:8000/status/'
    return fetch(path + serverId)
        .then(response => {
            return response.json()
        })
}

export default GetStatus
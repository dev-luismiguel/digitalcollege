import { DevResult } from "./api.props";
import { DEVS_URL } from "./api.urls";

export const getDevs = async (): Promise<DevResult[]> => {
    return fetch(DEVS_URL)
    .then(response => response.json())
    .then(result => result)
}

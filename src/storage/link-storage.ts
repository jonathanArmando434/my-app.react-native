import AsyncStorage from "@react-native-async-storage/async-storage"

const linksStorageKey = 'links@linksapp'

export type Link = {
    id: string
    name: string
    url: string
    category: string
}

const get = async  () => {
    const links = await AsyncStorage.getItem(linksStorageKey)
    const linksParsed = links ? JSON.parse(links) : []
    return linksParsed
}

const save = async (link: Link) => {
    try {
       const links = await get()
       links.push(link)
       const linksStringfied = JSON.stringify(links)
       await AsyncStorage.setItem(linksStorageKey, linksStringfied)
    } catch (error) {
        throw error
    }
}

export const linkStorage = {get, save}
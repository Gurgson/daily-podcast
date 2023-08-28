export interface IHost{
    name: string,
    imgUrl: string
}
export const poterHost: IHost = {
    name: "Poter Severus", 
    imgUrl:"/images/hosts/poter.jpg"
}
export  const marquesHost: IHost = {
    name: "Marques Keith", 
    imgUrl:"/images/hosts/marques.jpg"
}
export const janeHost: IHost = {
    name: "Jane Doe",
    imgUrl: "/images/hosts/jane.jpg"
}
export const doeHost: IHost = {
    name: "Doe Jane",
    imgUrl: "/images/hosts/doe.jpg"
}
const hostsListData : Array<IHost> = [poterHost, marquesHost, janeHost, doeHost]

export default hostsListData
export interface ISponsor {
    sponsorImg: string,
    desription: string,
} 
const desc = "Quis dictum cursus faucibus mattis dignissim. Pellentes que purus in sed sodales in mauris molestie. Eleifend estcon sctetur interdum eu in auctor. Gravida leo et.";
const sponsorsData : Array<ISponsor> = [
    {
        sponsorImg: "/icons/gpodcast_full.png",
        desription: desc 
    },{
        sponsorImg: "/icons/spotify_full.png",
        desription: desc 
    },
    {
        sponsorImg: "/icons/yt_full.png",
        desription: desc 
    }  ,
]
export default sponsorsData
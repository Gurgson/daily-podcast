import { IHost, doeHost, janeHost, marquesHost, poterHost } from "./Hosts"


export type IEpisode = {
    id: number,
    shortTitle: string, 
    fullTitle: string,
    imgUrl: string,
    gpodcast?: string,
    spotify?: string,
    youtube?: string,
    tags: Array<string>
    description: string,
    hosts: {
        main: IHost,
        guests: Array<IHost>
    },
    isFeatured: boolean
    createdAt: Date,
    duration: number,
    audio: string
  }
  const exampleHosts = {
    main: marquesHost,
    guests: [doeHost]
}
export const EpisodesDataList : Array<IEpisode> = [
    {
        id: 4,
        shortTitle: "Tesla Autopilot",
        fullTitle: "Testla Autopilt Controversy",
        imgUrl: "/images/Covers/1.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["automation", "tech "],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
        isFeatured: true,
        hosts: exampleHosts,
        createdAt: new Date(2023, 7, 20),
        duration: 5000,
        audio: "/lorem.mp3"
    },
    {
        id: 2,
        shortTitle: "Self–confidence", 
        fullTitle: "How to Deal with Self-Confidance",
        imgUrl: "/images/Covers/2.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["self-esteem", "health"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio." ,
        isFeatured: true,
        hosts: {
            main: exampleHosts.main,
            guests: [doeHost, poterHost]
        },
        createdAt: new Date(2023, 5, 20),
        duration: 3500,
        audio: "/lorem.mp3"
    },
    {
        id: 0 ,
        shortTitle: "Perplexed Mind",
        fullTitle: "Are you a Perplexed Mind Person?",
        imgUrl: "/images/Covers/3.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["mind-behaviour", "health"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
        isFeatured: true,
        hosts: exampleHosts,
        createdAt: new Date(2023, 3, 20),
        duration: 6000,
        audio: "/lorem.mp3"
    },
    {
        id: 3,
        shortTitle: "Woman's Rights", 
        fullTitle: "Women's Rights? Is it alright?",
        imgUrl: "/images/Covers/4.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["women's rights"],
        description: " ",
        isFeatured: true,
        hosts: exampleHosts,
        createdAt: new Date(2023, 6, 20),
        duration: 4320,
        audio: "/lorem.mp3"
    },
    {
        id: 1,
        shortTitle: "Social Class",
        fullTitle: "Type of Social Classes of People",
        imgUrl: "/images/Covers/0.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["social class", "wealth"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        isFeatured: true,
        hosts: {
            main: marquesHost,
            guests: [poterHost, janeHost]
        },
        createdAt: new Date(2023, 4, 20),
        duration: 4400,
        audio: "/lorem.mp3"
    },
    {
        id: 5,
        shortTitle: "Pandemic",
        fullTitle: "Pandemic Becoming Endemic",
        imgUrl: "/images/Covers/5.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["covid-19", "health"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.",
        isFeatured: false,
        hosts: exampleHosts,
        createdAt: new Date(2023, 8, 20),
        duration: 3500,
        audio: "/lorem.mp3"
    },

]

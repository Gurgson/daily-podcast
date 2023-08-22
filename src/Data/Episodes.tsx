interface host{
    name: string,
    imgUrl: string
}

export type IEpisodes = {
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
        main: host,
        guests: Array<host>
    },
    isFeatured: boolean
  }

const poterHost: host = {
    name: "Poter Severus", 
    imgUrl:"/images/hosts/poter.jpg"
}
const janeHost: host = {
    name: "Jane Doe",
    imgUrl: "/images/hosts/jane.jpg"
}
const doeHost: host = {
    name: "Doe Jane",
    imgUrl: "/images/hosts/doe.jpg"
}
const exampleHosts = {
    main: janeHost,
    guests: [doeHost]
}
export const EpisodesDataList : Array<IEpisodes> = [
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
        hosts: exampleHosts
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
        }
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
        hosts: exampleHosts
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
        hosts: exampleHosts
    },
    {
        id: 1,
        shortTitle: "Social Class",
        fullTitle: "Type of Social Classes of People",
        imgUrl: "/images/Covers/5.png",
        youtube: "https://www.youtube.com/",
        spotify: "https://open.spotify.com/genre/podcasts-web",
        gpodcast: "https://podcasts.google.com/",
        tags: ["social class", "wealth"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        isFeatured: true,
        hosts: exampleHosts
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
        hosts: exampleHosts
    },

]
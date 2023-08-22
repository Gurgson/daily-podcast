export type Author = {
    profilePicture: string,
    authorName: string,
    platform: string
    
}
export interface ITestimonials {
    description: string,
    author: Author
}
const Testimonials : Array<ITestimonials> = [
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        author: {
            platform: "spotify_full.png",
            authorName: "Luna lovegood",
            profilePicture: "luna.png"
        }
    },
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        author: {
            platform: "gpodcast_full.png",
            authorName: "Emily Blunt",
            profilePicture: "emily.png"
        }
    },
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        author: {
            platform: "spotify_full.png",
            authorName: "Mia Winter",   
            profilePicture: "mia.png"    
        }
    }
]
const authorImgPath = "/images/Testimonials/";
const platformIconPath = "/icons/";
Testimonials.map((item:ITestimonials)=> {
    item.author.profilePicture = authorImgPath + item.author.profilePicture;
    item.author.platform = platformIconPath + item.author.platform;
} )
export default  Testimonials;
export interface ITestimonials {
    description: string,
    platform: string,
    author: string,
    authorImg: string
}
const Testimonials : Array<ITestimonials> = [
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        platform: "spotify_full.png",
        author: "Luna lovegood",
        authorImg: "luna.png"
    },
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        platform: "gpodcast_full.png",
        author: "Emily Blunt",
        authorImg: "emily.png"
    },
    {
        description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
        platform: "spotify_full.png",
        author: "Mia Winter",
        authorImg: "mia.png"
    }
]
const authorImgPath = "/images/Testimonials/";
const platformIconPath = "/icons/";
Testimonials.map((item)=> {
    item.authorImg = authorImgPath + item.authorImg;
    item.platform = platformIconPath + item.platform;
} )
export default  Testimonials;
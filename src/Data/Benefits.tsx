

export interface IBenefits{
    img: string,
    title: string,
    description: string
}
const Benefits:Array<IBenefits> = [{
    img: "wave.svg",
    title: "Topic by Request",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},{
    img: "stars.svg",
    title: "Exclusive Content",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},{
    img: "face1.svg",
    title: "Join the Community",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},{
    img: "face2.svg",
    title: "Livestreaming Access",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},{
    img: "fire.svg",
    title: "Exclusive Episodes & Merch",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},{
    img: "star.svg",
    title: "And much more!",
    description: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
},
]
const path = "/images/Benefits/";
Benefits.map((item) => item.img = path + item.img);

export default Benefits;
import { FC, ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { IHost } from '../../../Data/Hosts'
import ColorScheme from '../../../enums/ColorScheme'
import Paragraph, { StyledParagraph } from '../../Text/Paragraph'
import FontSizes from '../../../enums/FontSizes'
import SocialMediaIcon from '../../Icons/SocialMediaIcon'
import { SiInstagram, SiTiktok, SiTwitter } from 'react-icons/si'
import { motion, useInView } from 'framer-motion'
import { slide } from '../../../AnimationSets/animation'
interface IProps{
    host: IHost,
    number: number,
    decoration?: ReactNode,
    animateDirection: boolean
}

const HostCard : FC<IProps>= (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInview = useInView(ref, {once: true})
  return (
    <StyledContainer
        ref={ref}
        variants={slide(props.animateDirection)}
        initial="start"
        animate={isInview?"end":"start"}
        transition={{
            duration: 1.2
        }}
    >
        <img src={props.host.imgUrl} alt={`${props.host.name} image`}/>
        <StyledRightSide>
            {props.decoration && props.decoration}
            <Paragraph lineHeight='160%' fontSize={FontSizes.caption}>
                {`Host ${props.number}`}
            </Paragraph>
            <StyledHostName fontSize={FontSizes.subheading} fontWeight={700}>
                {props.host.name}
            </StyledHostName>
            <Paragraph lineHeight="160%" color={ColorScheme.grey} fontSize={FontSizes.caption} >Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</Paragraph>
            <hr />
            <SocialMediaBar>
                <span> follow me: </span>
                <SocialMediaIcon color={ColorScheme.black} props={{icon:<SiTiktok/>, href:"https://www.tiktok.com/", ariaLabel:"TikTok"}}/>
                <SocialMediaIcon color={ColorScheme.blue} props={{icon:<SiTwitter/>, href:"https://www.twitter.com/", ariaLabel: "Twitter"}}/>
                <SocialMediaIcon color={ColorScheme.red} props={{icon:<SiInstagram/>, href:"https://www.instagram.com/", ariaLabel: "Instagram"}}/>
            </SocialMediaBar>
        </StyledRightSide>
    </StyledContainer>
  )
}
const SocialMediaBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    & span {
        line-height: 160%;
        font-weight: 700;
        color: var(${ColorScheme.grey});
        font-size: var(${FontSizes.small});
    }
    & svg {
        width: 2rem;
        height: 2rem;
    }
`
const StyledHostName = styled(StyledParagraph)`
    width:70%;
`
const StyledRightSide = styled.div`
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: .6rem;
    position: relative;
    & img {
        width: 13rem;
        height: 13rem;
    }
    & hr {
        width: 100%;
        border: 1px solid var(${ColorScheme.grey});
    }
`

const StyledContainer = styled(motion.div)`
    display: flex;
    width: 57rem;
    height: 52rem;
    padding: 1.6rem;
    border-radius: 8px;
    border: 2px solid var(${ColorScheme.black});
    box-shadow: 1rem 1rem 1rem 0 var(${ColorScheme.black});
    &> img{
        width: 26rem;
        object-fit: cover;
        object-position: right;
        border-radius: 8px;
        @media screen and (max-width: 520px) {
        width: auto;
    }
    }
    @media screen and (max-width: 520px) {
        width: 37rem;
        height: auto;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
    
`
export default HostCard
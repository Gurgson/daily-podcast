import {FC} from 'react'
import { ISponsor } from '../../Data/Sponsors'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins'
import Paragraph from '../Text/Paragraph'
import ColorScheme from '../../enums/ColorScheme'
import FontSizes from '../../enums/FontSizes'

const SponsorCard :FC<ISponsor> = (props) => {
  return (
    <StyledContainer>
            <img src={props.sponsorImg} alt="sponsor image" />
            <hr />
            <Paragraph fontSize={FontSizes.caption} lineHeight='160%'>
                {props.desription}
            </Paragraph>
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
    ${flexCenter}
    padding: 4rem 1.7rem;
    flex-direction: column;
    border-radius: 1.2rem;
    border: 2px solid var(${ColorScheme.black});
    background: var(${ColorScheme.white});
    height: 17.5rem;
    width: 53.6rem;
    gap: 3rem;
    text-align: center;
    & > hr{
        width: 80%;
        border-top: 1px solid var(${ColorScheme.grey});
    }
`
export default SponsorCard
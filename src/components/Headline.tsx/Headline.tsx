import {FC} from 'react'
import Paragraph from '../Text/Paragraph'
import FontSizes from '../../enums/FontSizes'
import ColorScheme from '../../enums/ColorScheme'
import styled from 'styled-components'
interface IHeadlines {
    main?: string,
    sub?: string
    color?: ColorScheme
}


const Headline :FC<IHeadlines>= (props) => {
  return (
    <StyledContainer>
        {props.main &&  <Paragraph color={props.color} margin='0 1rem' fontSize={FontSizes.heading} lineHeight='120%' fontWeight={700}>{props.main}</Paragraph>}
        {props.sub && <Paragraph color={props.color || ColorScheme.grey} margin='0 1rem' fontSize={FontSizes.smallHeading} lineHeight='160%' >{props.sub}</Paragraph>}
    </StyledContainer>
      
  )
}
const StyledContainer = styled.div`
  text-align: center;
`
export default Headline
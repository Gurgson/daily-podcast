import {FC} from 'react'
import Paragraph from '../Text/Paragraph'
import FontSizes from '../../enums/FontSizes'
import ColorScheme from '../../enums/ColorScheme'
import styled from 'styled-components'
import AnimatedText from '../AnimatedText/AnimatedText'
interface IHeadlines {
    main?: string,
    sub?: string
    color?: ColorScheme
}


const Headline :FC<IHeadlines>= (props) => {
  return (
    <StyledContainer>
        {props.main &&  
        <Paragraph color={props.color} margin='0 1rem' fontSize={FontSizes.heading} lineHeight='120%' fontWeight={700}>
          <AnimatedText   stagger={0.1}>{props.main}</AnimatedText>
        </Paragraph>}
        {props.sub && <Paragraph color={props.color || ColorScheme.grey} margin='0 1rem' fontSize={FontSizes.smallHeading} lineHeight='160%' >
            <AnimatedText  stagger={0.1} delay={0.6}>
               {props.sub}
            </AnimatedText>
           
        </Paragraph>}
    </StyledContainer>
      
  )
}
const StyledContainer = styled.div`
  text-align: center;
`
export default Headline
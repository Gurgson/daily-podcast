import {FC} from 'react'
import Paragraph from '../Text/Paragraph'
import FontSizes from '../../enums/FontSizes'
import ColorScheme from '../../enums/ColorScheme'
interface IHeadlines {
    main?: string,
    sub?: string
}


const Headline :FC<IHeadlines>= (props) => {
  return (
    <>
        {props.main && <Paragraph fontSize={FontSizes.heading} lineHeight='120%' fontWeight={700}>{props.main}</Paragraph>}
        {props.sub && <Paragraph fontSize={FontSizes.smallHeading} lineHeight='160%' color={ColorScheme.grey}>{props.sub}</Paragraph>}
    </>
      
  )
}

export default Headline
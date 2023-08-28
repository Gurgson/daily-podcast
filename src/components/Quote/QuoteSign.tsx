import styled from "styled-components"
import ColorScheme from "../../enums/ColorScheme"
import FontSizes from "../../enums/FontSizes"

const QuoteSign = () => {
  return (
    <StyledQuoteSign>&ldquo;</StyledQuoteSign>
  )
}
export const StyledQuoteSign = styled.span`
  color: var(${ColorScheme.red});
  font-size: var(${FontSizes.displayHeading});
  font-weight: 700;
`
export default QuoteSign

import styled from "styled-components"

const QuoteSign = () => {
  return (
    <StyledQuoteSign>&ldquo;</StyledQuoteSign>
  )
}
export const StyledQuoteSign = styled.span`
  color: var(--color-red);
  font-size: var(--fs-displayHeading);
  font-weight: 700;
`
export default QuoteSign

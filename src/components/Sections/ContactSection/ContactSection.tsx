import { FC } from 'react'
import { StyledSection } from '../Section/Section'
import Headline from '../../Headline.tsx/Headline'
import styled from 'styled-components'
import ColorScheme from '../../../enums/ColorScheme'
import TextInput from '../../Inputs/TextInput'
import Button from '../../Button/Button'
import { ButtonSize, ButtonType } from '../../Button/IButton'
import FontSizes from '../../../enums/FontSizes'
import Textarea from '../../Inputs/Textarea'


const ContactSection: FC = () => {
  return (
    <CustomSection id='Contact'>
        <StyledHeadline>
            <Headline main='Get in touch' sub='Send your message to us'/>
        </StyledHeadline>
        <hr />    
        <StyledForm>
            <TextInput options={{label: {isRequired: true, for:"name", text:"Full name"}, placeholder:"Your name"}}/>
            <TextInput options={{label: {isRequired: true, for:"email", text:"E-mail"}, type:"email", placeholder: "johndoe@gmail.com"}}/>
            <TextInput options={{label: {isRequired: true, for:"phone", text:"Phone"}, type:"tel", placeholder: "Phone"}}/>
            <TextInput options={{label: {isRequired: true, for:"subject", text:"Subject"}, placeholder:"Subject"}}/>
            <Textarea options={{label: {isRequired: true, for:"message", text:"Message"}, placeholder: "Your message goes here..."}}/>
            <Bottom> 
                <p>
                    <span>*</span>
                    required
                </p> 
                <Button size={ButtonSize.big} type={ButtonType.Fill}> send message</Button>
                <p>   Viverra at port accumsan. <a href='#'>Orci non</a></p> 
            </Bottom>

        </StyledForm>
    </CustomSection>
  )
}
const Bottom = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    & > p {
        width: 17rem;
        font-size: var(${FontSizes.caption});
        font-weight: 700;
        line-height: 160%;

    
        & > span , a{
            color: var(${ColorScheme.red})
        }
        & > a {
            text-decoration: underline;
        
        }
    }
`
const StyledForm = styled.form`
    display: flex;
    gap: 4rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    & > input {
      flex: 0 45%;
    }
    
`
const CustomSection = styled(StyledSection)`
    padding: 14rem 33rem;
    & > hr {
        margin: 6rem auto;
        width: 100%;
        border: 1px solid var(${ColorScheme.grey});
    }
`
const StyledHeadline = styled.div`
    position:relative;
    text-align: center;
    &::after{
        content: "";
        position: absolute;
        width: 8rem;
        height: 8rem;
        background-image: url("/images/Benefits/wave.svg");
        background-repeat: no-repeat;
        background-size:contain;
        top: -4rem;
        right: -4rem;
        transform: rotate(15deg);
    }
`
export default ContactSection
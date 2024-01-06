import { FC, FormEvent } from 'react'
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
    const onsubmit = (e: FormEvent)=>{
        e.preventDefault();
    }
  return (
    <CustomSection id='Contact'>
        <StyledHeadline>
            <Headline main='Get in touch' sub='Send your message to us'/>
        </StyledHeadline>
        <hr />    
        <StyledForm onSubmit={onsubmit}>
            <StyledRow>
                <TextInput options={{label: {isRequired: true, for:"name", text:"Full name"}, placeholder:"Your name"}}/>
                <TextInput options={{label: {isRequired: true, for:"email", text:"E-mail"}, type:"email", placeholder: "johndoe@gmail.com"}}/>
                
            </StyledRow>
            <StyledRow>
                <TextInput options={{label: {isRequired: true, for:"phone", text:"Phone"}, type:"tel", placeholder: "Phone"}}/>
                <TextInput options={{label: {isRequired: true, for:"subject", text:"Subject"}, placeholder:"Subject"}}/>
            </StyledRow>
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
const StyledRow = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    gap: 4rem;
    justify-content: space-between;

`
const Bottom = styled.div`
    display: flex;
    width: 100%;
    flex: 100%;
    justify-content: space-between;
    align-items: center;
    & > p:last-child {
            text-align: end;
        }
    & > p {
        max-width: 17rem;
        font-size: var(${FontSizes.caption});
        font-weight: 700;
        line-height: 160%;
        flex: 20%;
        

    
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
    width: 60%;
    gap: 4rem 0;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
        width: 80%;
    }
`
const CustomSection = styled(StyledSection)`
    padding: 14rem 0;
    width: 100%;
    justify-content: center;
    overflow: none;
    & > hr {
        margin: 6rem auto;
        width: 80%;
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
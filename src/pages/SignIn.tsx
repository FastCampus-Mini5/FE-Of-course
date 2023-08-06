import { styled } from 'styled-components'
import { SignInForm } from 'components/form/index'
import Title from 'assets/service-title.png'

export const SignIn = () => {
  return (
    <>
      <SignInWrapper>
        <SignInFrame>
          <SignInContainer>
            <ServiceImage src={Title} />
            <SignInForm />
          </SignInContainer>
        </SignInFrame>
      </SignInWrapper>
    </>
  )
}
const ServiceImage = styled.img``

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;

  ${ServiceImage} {
    position: absolute;
    top: 50px;
    width: 275px;
    height: 75px;
    z-index: 1;
  }
`
const SignInFrame = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 568px;
  background-color: white;
`
const SignInContainer = styled.div`
  width: 568px;
  height: 600px;
  background-color: white;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

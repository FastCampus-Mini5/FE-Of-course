import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { signinTexts } from 'constants/index'
import Title from 'assets/service-title.png'
import { InputField } from 'components/index'

export const SignInForm = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <SignInContainer>
      {/* SETTLER, RECTANGLE TO PAGE */}
      <div className="settler">
        <div className="rectangle">
          <img
            src={Title}
            className="service-title"
          />
          <form
            method="post"
            // action='HOST URL'
            className="form-container">
            <InputField
              title={signinTexts.email}
              ph={signinTexts.emailPh}
              inputRef={inputRef}></InputField>
            <InputField
              title={signinTexts.pwd}
              ph={signinTexts.pwdPh}
              inputRef={null}></InputField>
            <button className="signin">{signinTexts.btn}</button>
            <div className="signup-cta">
              <Link
                to="/reset"
                className="forgot-pwd">
                {signinTexts.forgotPwd}
              </Link>
              <Link to="/signup">{signinTexts.signup}</Link>
            </div>
          </form>
        </div>
      </div>
    </SignInContainer>
  )
}

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  flex-grow: 1;
  .settler {
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
  }
  .rectangle {
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
    .service-title {
      position: absolute;
      top: 50px;
      width: 275px;
      height: 75px;
      z-index: 1;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      margin-top: 150px;
    }
  }
  .signin {
    all: unset;
    width: 434px;
    height: 60px;
    color: #fff;
    text-align: center;
    background-color: ${props => props.theme.colors.primaryBlue};
    border-radius: 10px;
    margin-bottom: 36px;
    margin-top: 12px;
    cursor: pointer;
  }

  .signup-cta {
    width: 434px;
    height: 16px;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    font-size: 14px;
    .forgot-pwd {
      border-right: 1px solid black;
    }
    span {
      padding-right: 20px;
    }
    a {
      text-decoration: none;
      padding: 0 30px;
      color: black;

      &:visited {
        color: black;
      }
    }
  }
`

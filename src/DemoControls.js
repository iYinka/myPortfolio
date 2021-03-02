import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';



const Form = styled.form`
  padding: 0.1rem 0 0 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    border: 0;
    padding: 1rem 0 1rem 0;
    margin-right: 3rem;
    display: flex;
  }

  input {
    margin-right: 0.5rem;
  }
  label + label input {
    margin-left: 1.5rem;
  }
  b {
    margin-right: 1.5rem;
  }
`

class DemoControls extends Component {
  static propTypes = {
    duration: PropTypes.number
  }

  render() {
    // const { duration } = this.props
    return (
      <Form ref={el => (this.el = el)}>
        <div>
          <a href='https://www.linkedin.com/in/olayinka-victor-owolabi-76467871' style={{color: '#2867B2'}}><LinkedInIcon /></a>
          <a href="https://twitter.com/yinka_iam" style={{color: '#1DA1F2'}}><TwitterIcon /></a>
          {/* <a href='https://www.facebook.com/OlayinkaV' style={{ color: '#4267B2' }}><FacebookIcon /></a> */}
          <a href='https://github.com/iYinka' style={{ color: '#000'}}><GitHubIcon /></a>
          <a href='https://22df1c56-d39c-4926-9924-c14accb2f727.godaddysites.com' ><LanguageIcon /></a>
        </div>
      </Form>
    )
  }
}

export default DemoControls

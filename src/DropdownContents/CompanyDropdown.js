import React from "react"
import styled from "styled-components"
import {
  Heading,
  HeadingLink,
  LinkList,
  DropdownSection,
  Icon
} from "./Components"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const CompanyDropdownEl = styled.div`
  width: 17rem;
  @media (max-width: 660px){
    position: relative;
    left: 20px;
    width: 9.5rem;
    margin-left: -35px;
    a{
      padding-right: 10px;
    }
  }
`

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <Heading>
            <Icon /> Contact Me
          </Heading>
          <HeadingLink>
            <a href={"mailto:olayinkav28@gmail.com"} style={{fontStyle: 'italic', fontSize: '12px'}}>
              <EmailIcon style={{paddingTop: '5px'}}/> Message Me
            </a>
          </HeadingLink>
          <HeadingLink>
            <PhoneIcon/> (+234) 8022 458 666
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />Find Out More...
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="https://www.linkedin.com/in/olayinka-victor-owolabi-76467871">LinkedIn &rsaquo;</a>
            </li>
            <li>
              <a href="https://twitter.com/yinka_iam">Twitter &rsaquo;</a>
            </li>
            <li>
              <a href="https://github.com/iYinka">My GitHub &rsaquo;</a>
            </li>
            <li>
              <a href="https://22df1c56-d39c-4926-9924-c14accb2f727.godaddysites.com">Website &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  )
}

export default CompanyDropdown

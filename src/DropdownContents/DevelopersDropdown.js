import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const DevelopersDropdownEl = styled.div`
  width: 20rem;
  height: 30rem;
  overflow: scroll;

  @media (max-width: 660px){
    width: 16rem;
  }
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>SKILLS</Heading>
          <Flex>
            <div>
              <h4>Hard Skills</h4>
              <LinkList>
                <li>
                  <p>Web Development</p>
                </li>
                <li>
                  <p>HTML5</p>
                </li>
                <li>
                  <p>CSS</p>
                </li>
                <li>
                  <p>NodeJS</p>
                </li>
                <li>
                  <p>ExpressJS</p>
                </li>
                <li>
                  <p>ReactJS</p>
                </li>
                <li>
                  <p>JavaScript</p>
                </li>
                <li>
                  <p>Git</p>
                </li>
                <li>
                  <p>Jira</p>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Database</h4>
              <LinkList>
                <li>
                  <p>Firebase</p>
                </li>
                <li>
                  <p>MongoDB</p>
                </li>
                <li>
                  <p>Linode</p>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <h4  style={{marginTop: '-13px'}}>Soft Skills</h4>
            <p style={{marginBottom: '-10px'}}>
              <Icon /> Leadership Qualities
            </p>
          </HeadingLink>
          <HeadingLink>
            <p>
              <Icon /> Effective Communication
            </p>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <p style={{marginTop: '-10px'}}>
              <Icon /> Team Player
            </p>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown

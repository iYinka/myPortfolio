import styled from "styled-components"

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue gray)")};

  @media(max-width: 660px){
    font-size: 0.9rem;
    color: gray;
  }
`

export const HeadingLink = Heading.withComponent("li")

export const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
  
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`

export const Icon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-right: 13px;
  background-color: var(--green);
  opacity: 0.8;
  display: inline-block;
`

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`

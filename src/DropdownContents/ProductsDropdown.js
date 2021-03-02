import React from "react"
import styled from "styled-components"
import { Icon, DropdownSection, Heading } from "./Components"

const ProductsDropdownEl = styled.div`
  width: 20rem;
`



const ProductsSection = styled.ul`
  li {
    display: flex;
    margin-left: 10px;
  }
  @media (max-width: 660px){
    margin-left: 44px;
  }
`



const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <p style={{
                color: 'grey',
                wordWrap: 'break-word',
                width: '300px',
                height: '150px',
                fontSize: '20px'
              }}>
              
                <a href='https://clone-bbef4.web.app/'>Amazon</a>
                <p style={{fontSize: '13px', marginRight: '30px'}}><i>Authentication and Payment integration included</i></p>

                <a href='https://netflix-clone-d50d5.web.app/'>Netflix</a>
                <p style={{ fontSize: '15px'}}><i>Movie preview</i></p>
                
                <a href='https://covid19-c4740.web.app/'>Covid-19 Tracker</a>
                <p style={{fontSize: '13px', marginRight: '70px'}}><i>Daily Covid-19 updates by Countries and Worldwide</i></p>
                </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default ProductsDropdown

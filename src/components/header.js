import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import gatsbyLogo from '../images/gatsby-icon.png'


const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;

  // img {
  //   width: 100px;
  //   margin: 0 auto;
  //   display: grid;
  // }
`

const HeaderContainer = styled.div`
  margin: 0 auto;        
  max-width: 960px;
  padding: .5rem 1rem 1rem 1rem;
`

const Header = ({ siteTitle, author }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* <img src={gatsbyLogo} /> */}
          {siteTitle}{author}
          
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

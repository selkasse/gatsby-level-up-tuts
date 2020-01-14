/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Spring } from 'react-spring/renderprops'

import Header from "./header"
import Archive from "./archive"
import "./layout.css"


const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px; 
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      file(relativePath: {regex: "/bg/"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata.title}
        author={data.site.siteMetadata.author}
      />
      <Spring
        from={{height: location.pathname === '/' ? 100:400}}
        to={{height: location.pathname === '/' ? 400:100}}  
      >
        {styles => (
          <div style={{overflow: 'hidden', ...styles}}> 
            <Img fluid={data.file.childImageSharp.fluid}/>
          </div>
        )}
      </Spring>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>

      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  location: {},
};

export default Layout;


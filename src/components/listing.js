import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "./seo"

const LISTING_QUERY = graphql`
query ListingQuery {
  allMarkdownRemark(limit: 10, sort: {order: ASC, fields: [frontmatter___date]
}) {
    edges {
      node {
        excerpt
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}

`
const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`

const Listing = () => (
  <div>
    <SEO title="Blog Post Listing" />
    <StaticQuery
        query = { LISTING_QUERY }
        render={({allMarkdownRemark}) => (
            allMarkdownRemark.edges.map(({node}) => (
                <Post key={node.frontmatter.slug}>
                    <Link to={`/posts${node.frontmatter.slug}`}>
                        <h2>
                            {node.frontmatter.title}
                        </h2>
                    </Link>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    
                </Post>
            ))
        )}
    />
  </div>
)

export default Listing

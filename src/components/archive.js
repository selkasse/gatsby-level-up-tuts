import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'

// import Header from "./header"
// import "./layout.css"

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostQuery{
        allMarkdownRemark(
        limit: 5, sort:{
                order: ASC,
            fields:[frontmatter___date]
        })
        {
        edges{
            node{
            frontmatter{
                slug
                title
                date(formatString: "MMMM DD, YYYY")
            }

            }
        }
        }
    }
`
const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #524763;
    }
`

const Archive = () => {
    const data = useStaticQuery(POST_ARCHIVE_QUERY)

    return (
        <>
            <aside>
                <h3>Archive</h3>
                <ArchiveList>
                {data.allMarkdownRemark.edges.map(edge =>(
                    <li key={edge.node.frontmatter.slug}>
                        <Link to={`/posts${edge.node.frontmatter.slug}`}>
                            {edge.node.frontmatter.title}
                        </Link>
                    </li>
                ))}
                </ArchiveList>
            </aside>
        </>
    )
}

// Archive.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Archive
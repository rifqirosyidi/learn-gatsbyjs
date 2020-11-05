import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'


function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                
                <h1>Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nobis omnis! Perspiciatis fugit </p>
                
                <ol>
                    { data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={ `/blog/${edge.node.fields.slug}` } >
                                <h2>{ edge.node.frontmatter.title }</h2>
                                </Link>
                                <p>{ edge.node.frontmatter.date }</p>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default Blog

import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

function Blog() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(
                sort: { 
                fields: published, 
                order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        published(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <Head title="Blog" />
                <h1>Blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nobis omnis! Perspiciatis fugit </p>
                
                <ol className={ blogStyles.posts }>
                    { data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={ blogStyles.post }>
                                <Link to={ `/blog/${edge.node.slug}` } >
                                <h2>{ edge.node.title }</h2>
                                <p>{ edge.node.published }</p>
                                </Link>    
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default Blog

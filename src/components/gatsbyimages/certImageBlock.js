import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ImageBlockCert = ({ style }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "underground-electrical-marking.JPG" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1260) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="certimage">
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ width: "100%", height: 1200 }}
        alt="Underground services marked on footpath"
      />
    </div>
  )
}

export default ImageBlockCert

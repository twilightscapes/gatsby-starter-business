import { graphql, useStaticQuery } from 'gatsby'
import favicon from '../assets/img/favicon.ico'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata


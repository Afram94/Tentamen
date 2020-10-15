import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "afram.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Afram Hanna</h1>
            <h5 className="tuc">
               - Jag studerar för närvarande i <a href="https://www.tucsweden.se/" > TUC </a> som
              En systemutvecklare i C# 
               <br/>- Just nu lär mig React, Gatsby, GraphQL och Strapi.
               <br/>- Jag arbetar för närvarande på min egen Portfolio sida
               <br/>- Tekniska kompetenser: C#, Javascript, MMSQL, MongoDB.
               <br/>- Rolig fakta: Två tredjedelar av världens befolkning har aldrig sett snö.
               <br/>- Har du frågor? Använd länken nedanför.
               </h5>
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
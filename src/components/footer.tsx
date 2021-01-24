/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [5, 6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        Built with
        {` `}
        <Link
          aria-label="Link to gatsby's website"
          href="https://www.gatsbyjs.com/"
          target="_blank"
        >
          Gatsby
        </Link>
        {` `}· Hosted on{` `}
        <Link
          aria-label="Link to netlify's website"
          href="https://www.netlify.com/"
          target="_blank"
        >
          Netlify
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

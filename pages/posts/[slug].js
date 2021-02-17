import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../../components/container";
import LogoHeader from "../../components/logo-header";
import Layout from "../../components/layout";
import StaticFooter from "../../components/static-footer";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/posts/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          content(markdown: true)
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }

        morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
        }
      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);
  var slug = ""
  if (post.slug.includes("power-rankings")) {
    slug += "pr";
  }
  else if (post.slug.includes("gm-of-the-week")){
    slug += "gm";
  }
  else {
    slug += "lr"
  }

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Container>
        <LogoHeader page={slug}/>
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
      <StaticFooter/>
      
    </Layout>
  );
}

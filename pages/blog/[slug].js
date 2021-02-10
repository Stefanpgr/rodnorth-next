import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/Blog.module.scss'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'

const { BLOG_URL, API_KEY } = process.env

async function getPosts(slug) {
  const requestOne = await axios.get(
    `${BLOG_URL}/posts/slug/${slug}?key=${API_KEY}&fields=title,url,feature_image,excerpt,slug,published_at,custom_excerpt,html,meta_description,meta_title,twitter_description,twitter_title,twitter_image,og_description,og_title,og_image`
  )
  const requestTwo = await axios.get(
    `${BLOG_URL}/posts?key=${API_KEY}&fields=title,excerpt,slug,custom_excerpt&limit=3`
  )
  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]

        // console.log(responseTwo.data)
        return { post: responseOne.data.posts }
      })
    )
    .catch((errors) => {
      // react on errors.
    })

  return { post: requestOne.data, recent: requestTwo.data }
}

export const getStaticProps = async ({ params, query }) => {
  const { post, recent } = await getPosts(params.slug)
  // console.log(post)
  return {
    props: { post, recent },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

const Content = ({ post, recent }) => {
  // console.log(recent)

  const router = useRouter()
  // console.log(router)
  if (router.isFallback) {
    // return <Spinner animation="grow" />
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border" role="status"></div>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <link rel="canonical" href={`https://rodnorth.com/blog/${post.posts[0].slug}`} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        {/* <link rel="amphtml" href="https://rodnorth.com/blog-api/publishing-options/amp/" /> */}

        <meta property="og:site_name" content="Rodnorth Blog" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.posts[0].title} />
        <meta property="og:description" content={post.posts[0].custom_excerpt} />
        <meta property="og:url" content={`https://rodnorth.com/blog/${post.posts[0].slug}`} />
        <meta property="og:image" content={post.posts[0].feature_image} />
        <meta property="article:published_time" content={post.posts[0].published_at} />
        {/* <meta property="article:modified_time" content="2021-01-27T21:09:40.000Z" /> */}
        {/* <meta property="article:tag" content="Getting Started" /> */}

        <meta property="article:publisher" content="https://www.facebook.com//rodnorthlimited" />
        <meta property="article:author" content="https://www.facebook.com/rodnorthlimited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.posts[0].title} />
        <meta name="twitter:description" content={post.posts[0].custom_excerpt} />
        <meta name="twitter:url" content={`https://rodnorth.com/blog/${post.posts[0].slug}`} />
        <meta name="twitter:image" content={post.posts[0].feature_image} />
        {/* <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Ghost" />
        <meta name="twitter:label2" content="Filed under" />
        <meta name="twitter:data2" content="Getting Started" /> */}
        <meta name="twitter:site" content="@RodnorthN" />
        <meta name="twitter:creator" content="Rodnorth" />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1210" />
      </Head>
      <Nav />
      <div className="px-md-7 " style={{ marginTop: '4rem' }}>
        <Row className={styles.row}>
          <Col md="8" sm="12">
            <img src={post.posts[0].feature_image} className={`${styles.blogHeadImg} `} />
          </Col>
          <Col className={styles.displayMd}>
            <div className={styles.recentCont}>
              <h5 className={styles.recentTxtHead}>Recent Stories</h5>
              {recent.posts.map((el) => (
                <div key={el.title}>
                  <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                    <h5 className={styles.recentPostTitle}>{el.title}</h5>
                  </Link>
                  <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                    <p className={styles.recentPostExcerpt}>{el.custom_excerpt}</p>
                  </Link>

                  <hr />
                  {/* <div className="hr"> </div> */}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Container className={styles.contentContainer}>
          <h2 className={styles.blogTitle}>{post.posts[0].title}</h2>
          <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: post.posts[0].html }}></div>
          <div className="display-sm mt-5">
            <h5 className={styles.recentTxtHead}>Recent Stories</h5>
            {recent.posts.map((el) => (
              <div key={el.title}>
                <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                  <h5 className={styles.recentPostTitle}>{el.title}</h5>
                </Link>
                <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                  <p className={styles.recentPostExcerpt}>{el.custom_excerpt}</p>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Content

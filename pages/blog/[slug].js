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
    `${BLOG_URL}/posts/slug/${slug}?key=${API_KEY}&fields=title,url,feature_image,excerpt,slug,published_at,custom_excerpt,html`
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
  // let post
  // const res = await fetch(
  //   `${BLOG_URL}/posts/slug/${slug}?key=${API_KEY}&fields=title,url,feature_image,excerpt,slug,published_at,custom_excerpt,html`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     post = data
  //     return fetch(`${BLOG_URL}/posts?key=${API_KEY}&fields=title,excerpt,slug,custom_excerpt,html`)
  //   })
  //   .then((res2) => res2.json)
  //   .then((recent) => {
  //     post, recent
  //   })
  // console.log(requestOne)
  return { post: requestOne.data, recent: requestTwo.data }
}

export const getStaticProps = async ({ params, query }) => {
  const { post, recent } = await getPosts(params.slug)

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
      </Head>
      <Nav />
      <div className="px-md-7">
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
          <div className="display-sm">
            <h5 className={styles.recentTxtHead}>Recent Stories</h5>
            {recent.posts.map((el) => (
              <div key={el.title}>
                <h5 className={styles.recentPostTitle}>{el.title}</h5>
                <p className={styles.recentPostExcerpt}>{el.custom_excerpt}</p>
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

import Head from 'next/head'
import { Container } from 'react-bootstrap'
import styles from '../../styles/Blog.module.scss'
import { useRouter } from 'next/router'

const { BLOG_URL, API_KEY } = process.env

async function getPosts(slug) {
  const res = await fetch(
    `${BLOG_URL}/posts/slug/${slug}?key=${API_KEY}&fields=title,url,feature_image,excerpt,slug,published_at,custom_excerpt,html`
  ).then((res) => res.json())
  //   console.log(res)
  return res
}

export const getStaticProps = async ({ params }) => {
  const post = await getPosts(params.slug)

  return {
    props: { post },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

const Content = ({ post }) => {
  console.log(post)
  const router = useRouter()
  if (router.isFallback) {
    // return <Spinner animation="grow" />
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="spinner-border" role="status">
          <h1>loading...</h1>
        </div>
      </div>
    )
  }
  return (
    <div className="px-md-7">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>
      <div>
        <img src={post.posts[0].feature_image} className={`${styles.blogHeadImg} img-fluid`} />
      </div>
      <Container className={styles.contentContainer}>
        <h2 className={styles.blogTitle}>{post.posts[0].title}</h2>
        <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: post.posts[0].html }}></div>
      </Container>
    </div>
  )
}

export default Content

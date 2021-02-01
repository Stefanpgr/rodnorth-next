import Head from 'next/head'
import { Carousel, Col, Row, Container, CardDeck, Card } from 'react-bootstrap'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'
const { BLOG_URL, API_KEY } = process.env
async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/posts?key=${API_KEY}&fields=title,url,feature_image,excerpt,slug,published_at,custom_excerpt`
  ).then((res) => res.json())
  //   console.log(res)
  return res
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()

  return {
    props: { posts },
  }
}

const Blog = ({ posts }) => {
  console.log(posts.posts)
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
      <Container>
        <div className="row">
          {posts.posts.map((el, i) => (
            <Col key={el.id} md="6">
              <Link href="/blog/[slug]" as={`/blog/${el.slug}`}>
                <Card style={{ maxWidth: '623px' }} className={`${styles.cardCont} mx-3 my-3`}>
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img src={el.feature_image} className={`${styles.postImg} `} />
                    </div>
                    <div className={`${styles.cardContCont} col-md-6 `}>
                      <Card.Body>
                        <Card.Title>
                          <h5 className={styles.cardTitle}>{el.title}</h5>
                          <p className={styles.cardTxt}>{el.published_at}</p>
                        </Card.Title>
                        <Card.Text className={styles.cardTxt}>
                          {el.custom_excerpt ? el.custom_excerpt : el.excerpt}
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Blog

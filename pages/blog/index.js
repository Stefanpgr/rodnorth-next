import Head from 'next/head'
import { Col, Row, Container, CardDeck, Card } from 'react-bootstrap'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel'
import styles from '../../styles/Blog.module.scss'
import Link from 'next/link'
import GetInTouch from '../components/GetInTouch'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
const { BLOG_URL, API_KEY } = process.env

// function sortFunction(a, b) {
//   var dateA = new Date(a.published_at).getTime()
//   var dateB = new Date(b.published_at).getTime()
//   return dateA > dateB ? 1 : -1
// }

async function getPosts() {
  const res = await fetch(`${BLOG_URL}/posts?key=${API_KEY}`).then((res) => res.json())

  return res
}

export const getStaticProps = async ({ params }) => {
  const { posts } = await getPosts()

  return {
    props: { posts },
  }
}

const Blog = ({ posts }) => {
  const d = new Date()
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  // console.log(posts.posts)
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />

        <title>Rodnorth | Blog</title>
      </Head>
      <Nav />
      <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={45} totalSlides={3}>
        <Slider>
          <Slide index={0}>
            <Image src={posts[0].feature_image} />
          </Slide>
          <Slide index={1}>
            <Image src={posts[1].feature_image} />
          </Slide>
          <Slide index={2}>
            <Image src={posts[2].feature_image} />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
      <Container>
        <div className="row">
          {posts.map((el, i) => (
            <Col key={el.id} md="6">
              <Link href={{ pathname: '/blog/[slug]' }} as={`/blog/${el.slug}`}>
                <Card style={{ maxWidth: '623px' }} className={`${styles.cardCont} mx-1 my-3`}>
                  <div className="row no-gutters">
                    <div className="col-md-5">
                      <img src={el.feature_image} className={`${styles.postImg} `} />
                    </div>
                    <div className={`${styles.cardContCont} col-md-7 `}>
                      <Card.Body>
                        <Card.Title>
                          <h5 className={styles.cardTitle}>{el.title}</h5>
                          <p className={styles.cardTxtDate}>{`${new Date(el.published_at).getDay()} ${
                            months[new Date(el.published_at).getMonth()]
                          } ${new Date(el.published_at).getFullYear()}`}</p>
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
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default Blog

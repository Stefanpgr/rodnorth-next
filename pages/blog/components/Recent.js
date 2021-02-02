import { useRouter } from 'next/router'
import styles from '../../../styles/Blog.module.scss'

const getInitialProps = async ({ data }) => {
  console.log(data)

  return { data }
}

const Recent = ({ data }) => {
  const { query } = useRouter()
  console.log(query, data)
  return (
    <div>
      {/* <h5 className={styles.recentTxtHead}>Recent Stories</h5> */}
      <h5 className={styles.recentPostTitle}>{data.title}</h5>
      <p className={styles.recentPostExcerpt}>
        Our clients freely share their ideas and business strategies. This commitment goes way beyond formal NDAs and
        paper work.
      </p>
      <hr />

      <h5 className={styles.recentPostTitle}>Setting Up a Firewall with FirewallD on CentOS 7</h5>
      <p className={styles.recentPostExcerpt}>
        Our clients freely share their ideas and business strategies. This commitment goes way beyond formal NDAs and
        paper work.
      </p>
      <hr />
      <h5 className={styles.recentPostTitle}>Setting Up a Firewall with FirewallD on CentOS 7</h5>
      <p className={styles.recentPostExcerpt}>
        Our clients freely share their ideas and business strategies. This commitment goes way beyond formal NDAs and
        paper work.
      </p>
      <hr />
    </div>
  )
}

export default Recent

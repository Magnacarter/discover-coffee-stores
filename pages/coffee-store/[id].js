import { useRouter } from 'next/router'
import Link from 'next/link'
import coffeeStoresData from '../../data/coffee-stores'
import Head from 'next/head'
import styles from './coffee-store.module.css'
import Image from 'next/image'
import cls from 'classnames'

// getStaticProps also allows us to access params.
// we can use getStaticProps({params}) or getStaticProps(props) then extract the params with
// dot notation.
export function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log(params);
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id // the dynamic id
      })
    }
  }
}

export function getStaticPaths() {
  // Make the paths dynamic.
  const paths = coffeeStoresData.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      }
    }
  });

  return {
    paths: paths,
    fallback: true
  }
}

const CoffeeStore = (props) => {
  console.log(props);
  const router = useRouter();

  // if fallback is true in getStaticPaths then use the router
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log('upVote button clicked');
  }

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href={'/'}><a>Back to home</a></Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImage}
            alt={name}
          />
        </div>

        <div className={cls('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/places.svg" height={24} width={24} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/nearMe.svg" height={24} width={24} />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" height={24} width={24} />
            <p className={styles.text}>1</p>
          </div>

          <button 
            className={styles.upvoteButton}
            onClick={handleUpvoteButton}>
            Up Vote
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore





























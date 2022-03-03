import { useRouter } from 'next/router'
import Link from 'next/link'
import coffeeStoresData from '../../data/coffee-stores'
import Head from 'next/head'

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

  const { address, name, neighbourhood } = props.coffeeStore;

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href={'/'}><a>Back to home</a></Link>
      <p>{address}</p>
      <p>{name}</p>
      <p>{neighbourhood}</p>
    </div>
  )
}

export default CoffeeStore
import { useRouter } from 'next/router'
import Link from 'next/link'

const fooBar = () => {
  const route = useRouter();
      console.log(route);
  return <div>
    <h1>Page {route.query.slug}</h1>
    <Link href={'/'}>
      <a>Back to home</a>
    </Link>
  </div>
}

export default fooBar
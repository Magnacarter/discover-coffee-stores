import { useRouter } from 'next/router'
import Link from 'next/link'

const NextJs = () => {
  const router = useRouter();
  return <div>
    <h1>Welcome to Next.js with Ankita</h1>
    <Link href={'/foobar'}><a>Back to home</a></Link>
  </div>
}

export default NextJs
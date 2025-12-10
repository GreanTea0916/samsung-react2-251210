import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/movies/tt1877830">The Batman</Link>
      <Link href="/async">Async</Link>
    </header>
  )
}

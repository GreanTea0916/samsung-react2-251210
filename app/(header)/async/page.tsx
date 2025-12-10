import A from './A'
import B from './B'
import { Suspense } from 'react'
import Loader from '@/components/Loader'

export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <h1>Async Page!</h1>
      <Suspense
        fallback={
          <Loader
            color="red"
            className="relative"
          />
        }>
        <A />
      </Suspense>
      <Suspense
        fallback={
          <Loader
            color="green"
            className="relative"
          />
        }>
        <B />
      </Suspense>
    </>
  )
}

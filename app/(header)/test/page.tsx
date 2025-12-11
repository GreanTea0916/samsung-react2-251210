'use client'
import { cachedAction, nonCachedAction } from '@/serverActions/test'

export default function Page() {
  return (
    <>
      <button
        onClick={() => {
          cachedAction()
        }}>
        Call Cached
      </button>
      <button
        onClick={() => {
          nonCachedAction()
        }}>
        CallNonCached
      </button>
    </>
  )
}

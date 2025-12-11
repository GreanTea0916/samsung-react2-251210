'use server'

export async function cachedAction() {
  'use cache'
  console.log(new Date().toISOString())
}

export async function nonCachedAction() {
  console.log(new Date().toISOString())
}

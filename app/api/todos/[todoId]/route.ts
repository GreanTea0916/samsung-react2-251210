import { api } from '../todoApi'
// import { api } from '@/app/api/todos/todoApi'
import type { NextRequest } from 'next/server'

interface Context {
  params: Promise<{ todoId: string }>
}
interface PutRequestBody {
  title: string
  done: boolean
}

export async function PUT(request: NextRequest, { params }: Context) {
  // 요청 파라미터 조회
  const { todoId } = await params
  // 요청 쿼리스트링 조회
  const a = request.nextUrl.searchParams.get('a')
  const b = request.nextUrl.searchParams.get('b')
  console.log('searchParams::', a, b)
  // 요청 바디
  const body = ((await request.json()) || {}) as PutRequestBody
  const { data: todo } = await api.put(`/${todoId}`, body)
  return Response.json(todo)
}

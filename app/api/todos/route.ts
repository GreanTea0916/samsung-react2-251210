// http://localhost:3000/api/todos
// HTTP 메소드: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD...
import type { NextRequest } from 'next/server'
import { api } from './todoApi'

// 목록 조회
export async function GET() {
  const { data: todos } = await api.get('/')
  return Response.json(todos)
}

// 항목 생성
export async function POST(request: NextRequest) {
  const { title } = (await request.json()) || {}
  const { data: todo } = await api.post('/', {
    title
  })
  return Response.json(todo)
}

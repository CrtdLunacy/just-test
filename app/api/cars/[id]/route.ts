import {NextResponse} from "next/server";
export async function GET(_request: Request, { params } : { params:  { id: string }}) {
  const res = await fetch(`${process.env.NEXT_API_SERVER_URL}/cars/${params.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()

  return NextResponse.json(data)
}

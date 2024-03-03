import {NextRequest, NextResponse} from "next/server";

export interface Car {
  id: string;
  Image: string;
  Brand: string;
  Model: string;
  Color: string;
  Price: number;
  Year: number;
  Engine_Type: "Petrol" | "Diesel" | "Electric";
  Transmission?: "Automatic" | "Manual" | "Automated Manual";
  Range?: number;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sort = searchParams.get("_sort") || "Year";

  const res = await fetch(`${process.env.NEXT_API_SERVER_URL}/cars?_sort=${sort}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })

  const data = await res.json()

  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const car = await request.json();
  const res = await fetch(`${process.env.NEXT_API_SERVER_URL}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(car),
  })

  const data = await res.json()

  return Response.json(data)
}

import { NextRequest, NextResponse } from 'next/server';

let providers = [
  { id: 1, name: 'Dr Arjun K', specialty: 'General Medicine' },
  { id: 2, name: 'Dr Meera S', specialty: 'Pediatrics' },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(providers, { status: 200 });
}

import { NextRequest, NextResponse } from 'next/server';

let appointments: any[] = [
  {
    id: '1',
    patient: 'John Doe',
    provider: 'Dr Arjun K',
    time: '2023-11-20T10:00:00Z',
    status: 'scheduled'
  },
  {
    id: '2',
    patient: 'Jane Smith',
    provider: 'Dr Meera S',
    time: '2023-11-21T14:30:00Z',
    status: 'completed'
  }
];

export async function GET(req: NextRequest) {
  return NextResponse.json(appointments, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newAppointment = { id: Date.now().toString(), ...data, status: 'scheduled' };
    appointments.push(newAppointment);

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

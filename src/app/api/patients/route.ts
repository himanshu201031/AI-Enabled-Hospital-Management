import { NextRequest, NextResponse } from 'next/server';

let patients: any[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    dob: '1980-01-01',
    sex: 'male',
    phone: '1234567890',
    email: 'john.doe@example.com',
  }
];

export async function GET(req: NextRequest) {
  return NextResponse.json(patients, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Check for duplicate patient
    const isDuplicate = patients.some(
      (p) =>
        p.firstName.toLowerCase() === data.firstName.toLowerCase() &&
        p.lastName.toLowerCase() === data.lastName.toLowerCase() &&
        p.dob === data.dob
    );

    if (isDuplicate) {
      const existingPatient = patients.find(
        (p) =>
          p.firstName.toLowerCase() === data.firstName.toLowerCase() &&
          p.lastName.toLowerCase() === data.lastName.toLowerCase() &&
          p.dob === data.dob
      );

      return NextResponse.json(
        {
          error: 'Patient already exists',
          details: { isDuplicate: true, existingPatient }
        },
        { status: 409 }
      );
    }

    const newPatient = { id: Date.now().toString(), ...data };
    patients.push(newPatient);

    return NextResponse.json(newPatient, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

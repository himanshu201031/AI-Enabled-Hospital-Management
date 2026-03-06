import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    // mock response based on symptoms
    const result = {
      urgency: 'Medium',
      confidence: 0.74,
      conditions: [
        { name: 'Viral Pharyngitis', probability: 0.68 },
        { name: 'Streptococcal Pharyngitis', probability: 0.22 },
      ],
      recommended: ['Hydration', 'Rest', 'Consider rapid strep test'],
      explanation: 'Fever and sore throat with stable vitals suggest viral infection.',
    };
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

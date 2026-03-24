import { getData } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const classes = getData('classes');
    return NextResponse.json(classes);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

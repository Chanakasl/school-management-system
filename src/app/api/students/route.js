import { getData } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const students = getData('students');
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

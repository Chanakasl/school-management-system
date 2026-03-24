import { getData } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const teachers = getData('teachers');
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

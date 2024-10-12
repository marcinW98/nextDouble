import { NextResponse } from 'next/server';

// Eksportujemy funkcję dla metody POST
export async function POST() {
  // Tworzymy odpowiedź
  const res = NextResponse.json({ message: 'Logged out' });

  // Usuwamy cookie z tokenem
  res.cookies.delete('token');

  return res;
}
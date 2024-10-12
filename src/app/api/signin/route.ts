import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export const SECRET_KEY = "secretKey";

// Eksportujemy funkcję dla metody POST
export async function POST(req: Request) {
  try {
    const { username, password } = await req.json(); // Odczytujemy dane JSON

    // Prosta logika weryfikacji użytkownika
    if (username === 'admin' && password === 'password') {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

      // Ustawiamy cookie z tokenem w odpowiedzi
      const res = NextResponse.json({ message: 'Logged in successfully' });
      res.cookies.set('token', token, {
        httpOnly: true,
        maxAge: 3600,
        path: '/',
      });
      return res;
    } else {
      // Zwracamy błąd 401, jeśli dane logowania są nieprawidłowe
      return NextResponse.json({ message: 'Invalid login or password' }, { status: 401 });
    }
  } catch (error) {
    // Obsługa błędów (np. błąd parsowania JSON)
    return NextResponse.json({ message: 'An error occurred during login' }, { status: 500 });
  }
}
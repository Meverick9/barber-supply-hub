import { NextResponse } from 'next/server';

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/ВАШ_ID/export?format=csv';

export async function GET() {
  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL, { cache: 'no-store' });
    const csv = await response.text();
    
    // Парсим CSV
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    
    const products = lines.slice(1).map(line => {
      const values = line.split(',');
      return {
        id: values[0],
        name: values[1],
        price: parseFloat(values[2]),
        currency: values[3],
        amazonLink: values[4],
        lastUpdated: values[5],
      };
    }).filter(p => p.id); // Убираем пустые строки

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch prices' }, { status: 500 });
  }
}
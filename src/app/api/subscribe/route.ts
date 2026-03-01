import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, lang = 'en' } = await req.json()
    if (!email || !email.includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    // Replace with Mailchimp/ConvertKit call here
    console.log(`[Subscribe] ${email} | lang:${lang}`)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

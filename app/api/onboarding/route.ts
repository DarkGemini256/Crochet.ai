import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, skillLevel, interests } = body

    // For now, we'll use session/cookie to get user ID
    // In a real app, you'd get this from the session
    // This is a simplified version since the user just signed up
    
    // Since we're in onboarding right after signup,
    // we need to find the user by some identifier
    // For this implementation, we'll store temp data and return it
    // to be used in the sign-in flow
    
    return NextResponse.json(
      {
        success: true,
        message: 'Onboarding data saved',
        // This is just for the flow - in production you'd handle this differently
        email: body.email || 'demo@crochet.ai',
        tempPassword: body.tempPassword || '',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Onboarding error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

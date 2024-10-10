import { NextResponse } from 'next/server'

export async function POST() {
  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL

  if (!deployHookUrl) {
    return NextResponse.json(
      { message: 'Deploy hook URL not configured.' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(deployHookUrl, {
      method: 'POST'
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { message: 'Failed to trigger deployment.', error: errorText },
        { status: response.status }
      )
    }

    return NextResponse.json({ message: 'Deployment triggered successfully!' })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { message: 'Error triggering deployment.', error: errorMessage },
      { status: 500 }
    )
  }
}

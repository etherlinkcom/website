import { NextResponse } from 'next/server'

export async function POST() {
  const deployHookUrl =
    'https://api.vercel.com/v1/integrations/deploy/prj_FV9dNZ8DaDYz3ycwYie2lAu9GbXR/M8bfMLSkJH'

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

    const jsonResponse = await response.json() // Parse the actual response body

    return NextResponse.json({
      message: 'Deployment triggered successfully!',
      response: jsonResponse
    })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { message: 'Error triggering deployment.', error: errorMessage },
      { status: 500 }
    )
  }
}

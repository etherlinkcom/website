import ClientLayout from './ClientLayout'
import { Analytics } from '@vercel/analytics/react'
import FathomComponent from './components/fathom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/footer'
import { GoogleTagManager } from '@next/third-parties/google'
import { CookieBanner } from './components/CookieBanner'
import { getDynamicTagsMap } from '../utils/airtable/ecosystem'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://etherlink.com')
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const tagsMap = await getDynamicTagsMap()

  return (
    <html lang='en' className='scroll-smooth'>
      <GoogleTagManager gtmId='GTM-MQ8V746L' />
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <Analytics />
        <ClientLayout tagsMap={tagsMap}>
          <FathomComponent />
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </ClientLayout>
        {/* PostHog */}
        <Script id='posthog' strategy='afterInteractive'>
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_9mlNa6hpPaOYJ8gWJrxAyqc7ZCvrz5KUTuH0Mv7hY0J',{api_host:'https://us.i.posthog.com', defaults:'2025-05-24'})`}
        </Script>
      </body>
    </html>
  )
}

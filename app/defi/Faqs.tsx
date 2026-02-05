import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { FAQS } from './fixture'
import rehypeRaw from 'rehype-raw'

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <div className='mx-auto max-w-[768px] pt-10 md:pt-0 pb-10 md:pb-24 px-6'>
      <div className='overflow-hidden rounded-2xl border border-grey-500'>
        <div className='p-6 border-b border-grey-500'>
          <h2 className='text-2xl font-bold text-grey-50'>FAQs</h2>
        </div>
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-button-${i}`
          return (
            <div
              key={i}
              className='flex flex-col gap-4 border-b border-grey-500 last:border-0 px-6 py-8 hover:cursor-pointer'
              onClick={() => toggle(i)}
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className='w-full flex items-center justify-between gap-4 text-left'
                type='button'
              >
                <span className='text-base font-semibold text-grey-100'>
                  {item.title}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-neutral-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.23 7.21a.75.75 0 011.06.02L10 10.172l3.71-2.94a.75.75 0 01.94 1.16l-4.2 3.33a.75.75 0 01-.94 0l-4.2-3.33a.75.75 0 01.02-1.16z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>

              {/* Content */}
              <div
                id={panelId}
                role='region'
                aria-labelledby={buttonId}
                className={`text-sm text-grey-200 -tracking-[0.32px] transition-[grid-template-rows] duration-200 grid ${isOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-90'
                  }`}
              >
                <div className='min-h-0 overflow-hidden prose prose-invert prose-sm max-w-none'>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      a: ({ node, ...props }) => (
                        <a
                          {...props}
                          className='text-neonGreen-600 underline' // optional styling
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul
                          className='list-disc list-inside space-y-1'
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          className='list-decimal list-inside space-y-1'
                          {...props}
                        />
                      )
                    }}
                  >
                    {item.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

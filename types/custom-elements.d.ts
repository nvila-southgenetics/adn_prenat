import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
      'agent-id': string
    }
  }
}

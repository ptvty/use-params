'use client'

import { useParams, usePathname, useSearchParams, useSelectedLayoutSegments } from 'next/navigation'

function push(url) {
  window.history.pushState(null, '', url)
}

export default function Home() {

  const location = window.location.href
  const pathname = usePathname()
  const params = useParams()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const segments = useSelectedLayoutSegments()

  return (
    <div>
      <pre>window.location: {location}</pre>
      <pre>usePathname: {pathname}</pre>
      <pre>useParams: {JSON.stringify(params)}</pre>
      <pre>useSearchParams: {JSON.stringify(search)}</pre>
      <pre>useSelectedLayoutSegments: {JSON.stringify(segments)}</pre>

      <button onClick={() => push('foo')}>push foo</button>
      <br />
      <button onClick={() => push('bar')}>push bar</button>
      <br />
      <button onClick={() => push('/?search=baz')}>push ?search=baz</button>

    </div>
  );
}

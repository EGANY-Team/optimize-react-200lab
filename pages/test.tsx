import Link from 'next/link'
import Container from '../components/Container'

function TestPage() {
  return (
    <Container>
      <h2>Test page</h2>
      <Link href="/">Back to Home page</Link>
    </Container>
  )
}

export default TestPage

import { Button } from '@components/Button'
import { styled } from '@stitchesConfig'
import type { NextPage } from 'next'

const Container = styled('div', {
  display: 'grid',
  padding: '1em 0.5em',
  maxWidth: '700px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gridAutoRows: 'minmax(70px, auto)',
  placeItems: 'center',
})

const Home: NextPage = () => {
  return (
    <Container>
      <Button>button</Button>
      <Button disabled>button</Button>

      <Button outline>button</Button>
      <Button textOnly>button</Button>
      <Button textOnly disabled>
        button
      </Button>
      <Button shadowDisable textOnly>
        button
      </Button>

      <Button size="md" color="secondary">
        button
      </Button>
      <Button size="sm" color="secondary">
        button
      </Button>
      <Button size="lg" color="secondary">
        button
      </Button>

      <Button color="danger">button</Button>
      <Button color="primary">button</Button>
    </Container>
  )
}

export default Home

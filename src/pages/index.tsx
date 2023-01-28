type Props = {
  title: string
}

const foo = 'bla'

function Home({ title = 'Me Joga' }: Props) {
  return <div>{title} | Home</div>
}

export default Home

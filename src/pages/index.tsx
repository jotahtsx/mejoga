type Props = {
    title: string
}

function Home({ title = 'Me Joga' }: Props) {
    return <div>{title} | Home</div>
}

export default Home
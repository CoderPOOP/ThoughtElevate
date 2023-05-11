import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover, Share and Elevate
            <br/>
            <span className="blue_gradient text-center">
            Thoughts to the World!
            </span>
        </h1>

        <p className="desc text-center">
            ThoughtElevate is an open-source prompting tool for the modern world to discover, create & share creative thoughts
        </p>

        <Feed />
    </section>
  )
}

export default Home;
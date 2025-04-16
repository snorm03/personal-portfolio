export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/1600x900/?technology)",
      }}
    >
      <h1 className="text-white text-4xl font-bold backdrop-blur-md p-4 rounded">
        Welcome! I'm Sarah, a Web Designer & Developer.
      </h1>
    </section>
  );
}

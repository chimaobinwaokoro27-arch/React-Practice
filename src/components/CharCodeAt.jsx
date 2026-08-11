function CharCodeAt() {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        Alphabet A-Z
      </h1>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13">
        {alphabet.map((letter) => (
          <div
            key={letter}

          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharCodeAt;
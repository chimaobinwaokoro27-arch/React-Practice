function LetterMatching() {
const names = [
    "Bo",
    "Maximillian",
    "Kai",
    "Genevieve",
    "Mia",
    "Bartholomew",
    "Leo",
    "Alexandria",
  ];
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h2 className="mb-6 text-3xl font-bold">
        Names
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {names.map((name, index) => (
          <p

          >
            <span className="mr-2 font-bold text-blue-400">
              {index + 1}.
            </span>

            {name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LetterMatching;
function Vowels() {
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

  const vowels = "aeiou";

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        Names
      </h1>

      <div className="space-y-4">
        {names.map((name) => (
          <div
            
        
          >
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className={
                  vowels.includes(letter.toLowerCase())
                    ? "text-yellow-400 font-bold"
                    : ""
                }
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vowels;
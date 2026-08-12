function Name() {
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
      <h1 className="mb-6 text-3xl font-bold">Names</h1>

      <div className="space-y-4">
        {names.map((name) => {
          const firstLetter = name[0].toLowerCase();
          const lastLetter = name[name.length - 1].toLowerCase();

          return (
            <div
            
    
            >
              <span>{name}</span>

              {firstLetter === lastLetter && (
                <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
                  Same!
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Name;

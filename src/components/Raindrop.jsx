// Raindrops.js

const Raindrops = () => {
  const drops = Array.from({ length: 100 }); // 100 drops for heavier rain

  return (
    <div className="rain-container">
      {drops.map((_, i) => {
        const left = Math.random() * 100; // random horizontal position (0-100vw)
        const duration = 0.5 + Math.random() * 2; // random fall speed (0.5s-2.5s)
        const height = 10 + Math.random() * 20; // random height for variety
        const width = 1 + Math.random() * 2; // random width for variety
        const delay = Math.random() * 5; // random delay so they start at different times

        return (
          <div
            key={i}
            className="raindrop"
            style={{
              left: `${left}vw`,
              height: `${height}px`,
              width: `${width}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};


export default Raindrops;
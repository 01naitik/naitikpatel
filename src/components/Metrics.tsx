
const Metrics = () => {
  const metrics = [
    { number: "+25", label: "Happy Clients" },
    { number: "+30", label: "Projects Completed" },
    { number: "+20", label: "Logo Designs" },
    { number: "2024", label: "B.Tech Graduate" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-2 text-black">
                {metric.number}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

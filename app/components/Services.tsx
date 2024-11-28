const Services = () => {
  const services = [
    {
      title: 'Research Institutes',
      description: 'Supporting groundbreaking research with premium equipment and chemicals',
      icon: '🔬',
    },
    {
      title: 'Research Centers',
      description: 'Providing specialized solutions for advanced research facilities',
      icon: '🧪',
    },
    {
      title: 'Colleges and Universities',
      description: 'Equipping educational institutions with quality lab essentials',
      icon: '🎓',
    },
    {
      title: 'Government Organizations',
      description: 'Partnering with government bodies for scientific excellence',
      icon: '🏛️',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Delivering excellence across various sectors of the scientific community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-6 backdrop-blur-sm border border-white/10 rounded-xl
                hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import "./Services.css";

const services = [
  {
    id: 1,
    title: "Multi-Family Residential Framing",
    image: "/services/service-1.jpg",
    description:
      "We specialize in large-scale multi-family residential wood framing projects, delivering precise execution, efficient scheduling, and consistent quality across every phase of construction."
  },
  {
    id: 2,
    title: "Commercial & Mixed-Use Structures",
    image: "/services/service-2.jpg",
    description:
      "Our team provides structural framing solutions for commercial and mixed-use developments, ensuring safety compliance, coordination, and durability in complex build environments."
  },
  {
    id: 3,
    title: "On-Site Prefabrication",
    image: "/services/service-3.jpg",
    description:
      "Through on-site prefabrication, we improve build efficiency, reduce material waste, and maintain tighter quality control for framing components."
  },
  {
    id: 4,
    title: "Custom Residential Projects",
    image: "/services/service-4.jpg",
    description:
      "We work closely with builders and homeowners on custom residential projects, delivering craftsmanship-driven framing with attention to every detail."
  }
];

export default function Services() {
  return (
    <section className="services-page section">
      <div className="container">

        {/* Header */}
        <div className="services-header">
          <span className="eyebrow">Our Services</span>
          <h1 className="services-title">
            Precision framing solutions <br />
            for modern construction
          </h1>
          <p className="services-intro">
            Set-Square Construction delivers reliable, safety-driven framing
            services for residential and commercial developments across British
            Columbia.
          </p>
        </div>

        {/* Services */}
        <div className="services-list">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                <div className="service-arrow">
                  <span className="line"></span>
                  <span className="arrow">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

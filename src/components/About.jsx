import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-gray-50 py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Header --> */}
          <div class="text-center mb-12">
            <h2 class="text-3xl font-semibold text-gray-800">
              Company <span className="text-yellow-500">Profile</span>
            </h2>
            <p class="text-lg text-gray-600 mt-4">
              Laxmi Instruments: Quality Products & World-Class Services
            </p>
          </div>

          {/* <!-- Content --> */}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* <!-- Left Column (Text) --> */}
            <div class="space-y-6 text-gray-700">
              <p class="text-lg">
                Laxmi Instruments was established in 2003 and is engaged
                primarily in the activities of Chromatography Analytical
                Instruments. We are also manufacturers of chromatography
                instruments, accessories, and lab furniture, along with
                bio-equipment such as bio-safety cabinets.
              </p>
              <p class="text-lg">
                Our company is fully equipped with state-of-the-art machinery
                and a comprehensive testing system. We strive to provide the
                best products within customers' limits while ensuring
                world-class services.
              </p>
              <p class="text-lg">
                In addition to chromatography instruments, we specialize in
                manufacturing purification panels for gas chromatography, fume
                hoods for ICP-MS and AAS, glove boxes, and high-pressure gas
                tubing and piping systems with associated high-pressure
                manifolds and their components.
              </p>
              <p class="text-lg">
                We also offer consulting services for mechanical pressure
                instruments, electrical fittings, civil, and architectural
                needs.
              </p>
              <p class="text-lg">
                Additionally, we provide industrial gas cylinders (H2, N2, Air,
                He, Ar, cHu, C2H2, N2O) for lab requirements.
              </p>
            </div>

            {/* <!-- Right Column (Image or Graphics) --> */}
            <div class="relative">
              <img
                src="https://via.placeholder.com/500x400?text=Company+Image"
                alt="Company Image"
                class="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

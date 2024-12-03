import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Get in touch with Laxmi Instruments
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid grid-cols-1  gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <h3 className="text-xl font-semibold text-gray-800">
              Factory Address
            </h3>
            <p className="text-lg">
              <strong>Laxmi Instruments</strong>
              <br />
              Address: 31-Yadav Comp., Beside Prakash Dairy, Raghvendra Mandir
              Road, Opp. Ajit Glass, Oshiwara, Jogeshwari (W), Mumbai-400102
              (Maharashtra)
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Contact Details
            </h3>
            <p className="text-lg">
              <strong>Contact Person:</strong> V. Kailash
              <br />
              <strong>Mobile:</strong> 9323193755, 9920533755
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:kailash@laxmiinstruments.com"
                className="text-blue-500 hover:underline"
              >
                kailash@laxmiinstruments.com
              </a>
              <br />
              <strong>Website:</strong>{" "}
              <a
                href="https://www.laxmiinstruments.com"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.laxmiinstruments.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ModernTemplate = ({portfolio}) => {
  const {hero, skills, portfolio: projects, contact} = portfolio;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {hero?.fullName || "Your Name"}
          </h1>
          <p className="text-xl text-blue-600 mb-6">
            {hero?.title || "Your Title"}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {hero?.about || "Your description"}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills?.skills?.map((skill, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center"
              >
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            )) || (
              <p className="text-gray-600 text-center col-span-full">
                No skills added yet
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects?.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )) || (
              <p className="text-gray-600 text-center col-span-full">
                No projects added yet
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contact?.email && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Email</h3>
                <p>{contact.email}</p>
              </div>
            )}
            {contact?.phone && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Phone</h3>
                <p>{contact.phone}</p>
              </div>
            )}
            {contact?.linkedin && (
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">LinkedIn</h3>
                <p>{contact.linkedin}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernTemplate;

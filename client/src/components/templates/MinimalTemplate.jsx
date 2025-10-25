const MinimalTemplate = ({portfolio}) => {
  const {hero, skills, portfolio: projects, contact} = portfolio;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 mb-3">
            {hero?.fullName || "Your Name"}
          </h1>
          <p className="text-gray-700 leading-relaxed">
            {hero?.about || "Your description"}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 px-6 border-b">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills?.skills?.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
              >
                {skill}
              </span>
            )) || <p className="text-gray-600">No skills added yet</p>}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 px-6 border-b">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Projects</h2>
          <div className="space-y-8">
            {projects?.map((project, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )) || <p className="text-gray-600">No projects added yet</p>}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light text-gray-900 mb-8">Contact</h2>
          <div className="space-y-4">
            {contact?.email && (
              <div>
                <span className="text-gray-600">Email: </span>
                <span className="text-gray-900">{contact.email}</span>
              </div>
            )}
            {contact?.phone && (
              <div>
                <span className="text-gray-600">Phone: </span>
                <span className="text-gray-900">{contact.phone}</span>
              </div>
            )}
            {contact?.linkedin && (
              <div>
                <span className="text-gray-600">LinkedIn: </span>
                <span className="text-gray-900">{contact.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinimalTemplate;

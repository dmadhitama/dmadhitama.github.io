import { getBio } from "@/lib/data";
import { formatYear } from "@/lib/utils";
import { Mail, Globe, MapPin, Phone } from "lucide-react";

export default function ResumePage() {
  const bio = getBio();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white">
            <h1 className="text-4xl font-bold mb-2">{bio.basics.name}</h1>
            <p className="text-xl opacity-90 mb-6">{bio.basics.label}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={`mailto:${bio.basics.email}`} className="flex items-center gap-2 hover:underline">
                <Mail size={16} />
                {bio.basics.email}
              </a>
              <a href={bio.basics.website} className="flex items-center gap-2 hover:underline">
                <Globe size={16} />
                {bio.basics.website.replace(/^https?:\/\//, '')}
              </a>
              {bio.basics.location && (
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {bio.basics.location.city}, {bio.basics.location.region}
                </span>
              )}
              {bio.basics.phone && (
                <span className="flex items-center gap-2">
                  <Phone size={16} />
                  {bio.basics.phone}
                </span>
              )}
            </div>
          </div>

          <div className="px-8 py-8">
            {bio.basics.summary && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{bio.basics.summary}</p>
              </section>
            )}

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {bio.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-sm font-medium"
                  >
                    {interest.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bio.skills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                    <p className="text-gray-600 text-sm">{skill.keywords.join(", ")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                Education
              </h2>
              {bio.education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.institution}</h3>
                      <p className="text-gray-700">{edu.studyType}, {edu.area}</p>
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {formatYear(edu.startDate)} - {edu.endDate === "Present" ? "Present" : formatYear(edu.endDate)}
                    </span>
                  </div>
                  {edu.courses && edu.courses.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                Work Experience
              </h2>
              {bio.work.map((job, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                      <p className="text-gray-700 font-medium">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {formatYear(job.startDate)} - {job.endDate === "Present" ? "Present" : formatYear(job.endDate)}
                    </span>
                  </div>
                  {job.website && (
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {job.website.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                  {job.summary && (
                    <p className="text-gray-600 mt-2">{job.summary}</p>
                  )}
                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>

            {bio.volunteer && bio.volunteer.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  Activities & Volunteer Work
                </h2>
                {bio.volunteer.map((vol, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{vol.position}</h3>
                        <p className="text-gray-700">{vol.organization}</p>
                      </div>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                        {formatYear(vol.startDate)} - {vol.endDate === "Present" ? "Present" : formatYear(vol.endDate)}
                      </span>
                    </div>
                    {vol.summary && (
                      <p className="text-gray-600 mt-2">{vol.summary}</p>
                    )}
                    {vol.highlights && vol.highlights.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                        {vol.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}

            {bio.awards && bio.awards.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  Awards & Recognition
                </h2>
                {bio.awards.map((award, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
                        <p className="text-gray-700">{award.awarder}</p>
                      </div>
                      <span className="text-sm text-gray-600">{award.date}</span>
                    </div>
                    {award.summary && (
                      <p className="text-gray-600 text-sm">{award.summary}</p>
                    )}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

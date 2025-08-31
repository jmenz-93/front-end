import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import MUImage from '../components/mu';
import UWMImage from '../components/uwm';
import { BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, SparklesIcon, XIcon } from '../components/icons';



const educationDetails = {
    uwm: {
        title: "University of Wisconsin-Milwaukee",
        degree: "Bachelor's in Information Science & Technology",
        info: [
            {label: "Graduated", value: "May 2017"},
            { label: "GPA", value: "3.8 / 4.0" },
            { label: "Honors", value: "Graduated Magna Cum Laude" },
            { label: "Relevant Coursework", value: "Advanced Algorithms, Database Systems, Operating Systems, Web Development, AI" },
        ],
    },
    mu: {
        title: "Marquette University",
        degree: "Master's in Computer and Information Science",
        imageUrl: "/mu.png", // Add image URL here
        info: [
            { label: "GPA", value: "3.9 / 4.0" },
            { label: "Capstone Project", value: "Real-time Data Processing Pipeline for IoT Devices" },
            { label: "Relevant Coursework", value: "Software Architecture, DevOps & CI/CD, Cloud Computing, Secure Software Development" },
        ],
    },
};

const skillDetails: { [key: string]: { title: string; description: string } } = {
  'SQL': { title: 'SQL', description: 'Fill in details about how you have used SQL...' },
  'Python': { title: 'Python', description: 'Fill in details about how you have used Python...' },
  'dbt': { title: 'dbt', description: 'Fill in details about how you have used dbt...' },
  'GitLab': { title: 'GitLab', description: 'Fill in details about how you have used GitLab...' },
  'GitHub': { title: 'GitHub', description: 'Fill in details about how you have used GitHub...' },
  'CI/CD': { title: 'CI/CD', description: 'Fill in details about how you have used CI/CD...' },
  'AWS': { title: 'AWS', description: 'Fill in details about how you have used AWS...' },
  'Tailwind CSS': { title: 'Tailwind CSS', description: 'Fill in details about how you have used Tailwind CSS...' },
  'REST': { title: 'REST', description: 'Fill in details about how you have used REST...' },
  'GraphQL': { title: 'GraphQL', description: 'Fill in details about how you have used GraphQL...' },
};


export function Career() {
  const [educationModalData, setEducationModalData] = useState<typeof educationDetails.uwm | null>(null);
  const [skillModalData, setSkillModalData] = useState<string | null>(null);

  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="sr-only">Career & Education</h1>

          {/* --- Summary Section --- */}
          <section className="mb-16">
          <article className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-center text-lg">
              Full‑stack engineer focused on building performant, accessible web apps. Passionate about clean design,
              type‑safe tooling, and thoughtful DX. I enjoy collaborating across functions and delivering measurable impact.
            </p>
          </article>
        </section>

        {/* --- Skills Section --- */}
        <section className="mb-20">
            <div className="flex items-center mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100/60">
                    <CodeBracketIcon className="h-6 w-6 text-teal-600" />
                </div>
                <h2 className="ml-4 text-sm font-bold uppercase tracking-widest text-slate-600">Core Technologies</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.keys(skillDetails).map((skill) => (
                  <div
                    key={skill}
                    onClick={() => setSkillModalData(skill)}
                    className="group cursor-pointer bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
                  >
                    <p className="text-center font-medium text-slate-700 transition-colors group-hover:text-teal-600">{skill}</p>
                  </div>
                ))}
            </div>
        </section>

        {/* --- Work Experience Section --- */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100/60">
                <BriefcaseIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="ml-4 text-sm font-bold uppercase tracking-widest text-slate-600">Work Experience</h2>
          </div>
          <div className="relative ml-6 border-l-2 border-slate-200">
            {/* Current Position */}
            <div className="relative mb-10 ml-12">
              <span className="absolute -left-[1.8rem] top-1 h-4 w-4 rounded-full bg-blue-500 ring-8 ring-white" />
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">Software Engineer III, Northwestern Mutual</h3>
                <p className="text-sm text-slate-500 mb-4">2022 - Present</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-6">
                  <li>Led feature delivery that improved user conversion by 12% through A/B testing and performance optimizations.</li>
                  <li>Reduced CI/CD build times by 30% by restructuring pipeline jobs and optimizing dependency caching.</li>
                  <li>Mentored two junior engineers, establishing team-wide testing standards with Jest and React Testing Library.</li>
                </ul>
              </div>
            </div>
            {/* Previous Position 1 */}
            <div className="relative mb-10 ml-12">
              <span className="absolute -left-[1.8rem] top-1 h-4 w-4 rounded-full bg-slate-300 ring-8 ring-white" />
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">Junior Developer, Startup Inc.</h3>
                <p className="text-sm text-slate-500 mb-4">2020 - 2022</p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-6">
                  <li>Shipped responsive UI improvements that contributed to a 15% reduction in bounce rate on mobile devices.</li>
                  <li>Developed and maintained a reusable component library in TypeScript, accelerating feature development.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

          {/* --- Education Section --- */}
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100/60">
                <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="ml-4 text-sm font-bold uppercase tracking-widest text-slate-600">Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article
                onClick={() => setEducationModalData(educationDetails.uwm)}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="mr-5 flex-shrink-0">
                    <UWMImage imageUrl="/uwm.png" linkUrl="https://uwm.edu/" altText="UWM" size="w-16" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">University of Wisconsin-Milwaukee</h3>
                    <p className="text-sm text-slate-500">Bachelor's in Computer Science</p>
                  </div>
                </div>
              </article>
              <article
                onClick={() => setEducationModalData(educationDetails.mu)}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="mr-5 flex-shrink-0">
                    <MUImage imageUrl="/mu.png" linkUrl="https://www.marquette.edu/" altText="MU" size="w-16" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Marquette University</h3>
                    <p className="text-sm text-slate-500">Master's in Computer and Information Science</p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* --- Certifications Section --- */}
          <section>
            <div className="flex items-center mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100/60">
                    <SparklesIcon className="h-6 w-6 text-amber-600" />
                </div>
                <h2 className="ml-4 text-sm font-bold uppercase tracking-widest text-slate-600">Certifications</h2>
            </div>
            <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <ul className="space-y-3 text-center text-sm text-slate-600">
                <li>AWS Certified Cloud Practitioner <span className="text-slate-500 font-medium">(2024)</span></li>
                <li>Professional Scrum Master (PSM I) <span className="text-slate-500 font-medium">(2023)</span></li>
                </ul>
            </article>
        </section>
        </div>
      </div>

      {/* --- Education Modal --- */}
      <Transition appear show={!!educationModalData} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setEducationModalData(null)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-md" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={() => setEducationModalData(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                  {educationModalData && (
                    <>
                      <div className="flex items-start gap-4">
                        {/* <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                          <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
                        </div> */}
                        <div>
                          <DialogTitle as="h3" className="text-xl font-bold text-slate-900">
                            {educationModalData.title}
                          </DialogTitle>
                          <p className="text-md text-slate-600 mt-1">{educationModalData.degree}</p>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-slate-200 pt-6">
                        <dl className="space-y-4">
                          {educationModalData.info.map((item) => (
                            <div key={item.label}>
                              <dt className="text-sm font-medium text-slate-500">{item.label}</dt>
                              <dd className="mt-1 text-sm text-slate-800">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* --- Skill Modal --- */}
      <Transition appear show={!!skillModalData} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setSkillModalData(null)}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-md" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={() => setSkillModalData(null)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
                  >
                    <XIcon className="h-6 w-6" />
                  </button>
                  {skillModalData && (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                          <CodeBracketIcon className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <DialogTitle as="h3" className="text-xl font-bold text-slate-900">
                            {skillDetails[skillModalData].title}
                          </DialogTitle>
                        </div>
                      </div>
                      <div className="mt-6 border-t border-slate-200 pt-6">
                        <p className="text-sm text-slate-700 leading-6 whitespace-pre-wrap">
                          {skillDetails[skillModalData].description}
                        </p>
                      </div>
                    </>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default React.memo(Career);
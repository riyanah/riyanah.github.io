import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
import Image from '@/components/Image';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import ThemeSwitch from '@/components/ThemeSwitch';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pb-4 pt-6 md:space-y-5">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h2 className="mb-1 text-xl font-bold tracking-tight text-zinc-600 dark:text-white md:text-2xl">
              🤗 Hi, I'm
            </h2>
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-zinc-800 dark:text-white md:text-5xl">
              Riyan Ahmed
            </h1>
          </div>
          {/* <div className="relative mb-8 mr-auto w-[100px] sm:mb-0 sm:w-[200px]">
            <Image
              src="/static/images/profile.jpg"
              alt="avatar"
              width="200px"
              height="200px"
              className="rounded-full"
            />
          </div> */}
        </div>
        <p className="space-y-4 text-zinc-500 dark:text-slate-300">
          <p className="my-4 leading-loose">
            I'm a 3rd-year Computer Science student at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-500 decoration-2 underline-offset-2 transition duration-100 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 dark:text-white dark:decoration-rose-400 dark:hover:text-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-rose-400 dark:focus:ring-rose-400/40"
              href="https://carleton.ca/"
              rel="noreferrer"
              target="_blank"
            >
              Carleton University
            </a>
            , with a passion for backend engineering. I am moved by the positive impact tech can
            bring about.
            <br />
            I'm VP of Events at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
              href="https://www.linkedin.com/company/cublueprint/"
              rel="noreferrer"
              target="_blank"
            >
              CU Blueprint
            </a>
            , a student-run club that builds open-source software for non-profits. Previously, I
            have done Software Development Internships at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-blue-800 decoration-2 underline-offset-2 transition duration-100 hover:text-blue-800 hover:decoration-blue-800/30 focus:text-blue-500 focus:ring-blue-500/40 dark:text-white dark:decoration-sky-400 dark:hover:text-sky-400 dark:hover:decoration-sky-400/30 dark:focus:text-sky-400 dark:focus:ring-sky-400/40"
              href="https://www.lockheedmartin.com/en-ca/index.html"
              rel="noreferrer"
              target="_blank"
            >
              Lockheed Martin
            </a>
            , and at{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-rose-500 decoration-2 underline-offset-2 transition duration-100 hover:text-rose-500 hover:decoration-rose-500/30 focus:text-rose-500 focus:ring-rose-500/40 dark:text-white dark:decoration-rose-400 dark:hover:text-rose-400 dark:hover:decoration-rose-400/30 dark:focus:text-rose-400 dark:focus:ring-rose-400/40"
              href=""
              rel="noreferrer"
              target="_blank"
            >
              Public Services and Procurement Canada
            </a>
            .
            <br />
            Please feel free to connect with me and chat on{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40"
              href="https://www.canada.ca/en/public-services-procurement.html"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              className="focusable rounded-sm font-medium text-zinc-800 underline decoration-green-500 decoration-2 underline-offset-2 transition duration-100 hover:text-green-500 hover:decoration-green-500/30 focus:text-lime-500 focus:ring-lime-500/40 dark:text-white dark:decoration-lime-400 dark:hover:text-lime-400 dark:hover:decoration-lime-400/30 dark:focus:text-lime-400 dark:focus:ring-lime-400/40"
              href="mailto:riyan.ahmed@outlook.com"
              rel="noreferrer"
              target="_blank"
            >
              Email
            </a>
            .
          </p>
        </p>

        <div className="mt-8 flex flex-wrap gap-4 text-center">
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://www.linkedin.com/in/riyanahmed"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-zinc-800 px-2.5 py-2 font-medium text-white shadow-lg shadow-zinc-800/10 transition selection:bg-white/30 hover:bg-zinc-800/80 hover:shadow-zinc-800/5 focus:ring-zinc-500/40 dark:bg-zinc-300 dark:text-zinc-900 dark:shadow-zinc-300/10 dark:selection:bg-zinc-900/30 dark:hover:bg-zinc-300/80 dark:hover:shadow-zinc-300/5 dark:focus:ring-zinc-300/40 md:w-auto md:px-3 md:pl-2.5"
            href="https://github.com/riyanah"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.47 2 11.988c0 4.42 2.862 8.153 6.838 9.476.5.087.687-.212.687-.474 0-.238-.013-1.024-.013-1.86C7 19.59 6.35 18.517 6.15 17.955c-.113-.287-.6-1.174-1.025-1.411-.35-.187-.85-.65-.013-.662.788-.012 1.35.724 1.538 1.024.9 1.51 2.338 1.086 2.912.824.088-.65.35-1.086.638-1.336-2.225-.25-4.55-1.111-4.55-4.931 0-1.087.387-1.986 1.025-2.685-.1-.25-.45-1.273.1-2.646 0 0 .837-.263 2.75 1.023a9.29 9.29 0 0 1 2.5-.337c.85 0 1.7.113 2.5.337 1.912-1.298 2.75-1.023 2.75-1.023.55 1.373.2 2.397.1 2.646.637.7 1.025 1.586 1.025 2.685 0 3.832-2.337 4.681-4.562 4.931.362.312.675.912.675 1.848 0 1.336-.013 2.41-.013 2.747 0 .262.188.574.688.474C19.137 20.141 22 16.395 22 11.988 22 6.47 17.525 2 12 2Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-lime-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-lime-500/10 transition selection:bg-white/30 hover:bg-lime-500/80 hover:shadow-lime-500/5 focus:ring-lime-500/40 dark:bg-lime-400 dark:text-zinc-900 dark:shadow-lime-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-lime-400/80 dark:hover:shadow-lime-400/5 dark:focus:ring-lime-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="mailto:riyan.ahmed@outlook.com"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M7.727 2.959A10 10 0 0 1 22 11.999v.9a3.7 3.7 0 0 1-6.642 2.244 4.6 4.6 0 1 1-.741-6.928A1 1 0 0 1 16.6 8.4v4.5a1.7 1.7 0 1 0 3.4 0V12a8 8 0 1 0-3.136 6.353 1 1 0 1 1 1.216 1.587A10 10 0 1 1 7.727 2.96Zm6.873 9.04a2.6 2.6 0 1 0-5.2 0 2.6 2.6 0 0 0 5.2 0Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>
          {/* <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-blue-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-blue-500/10 transition selection:bg-white/30 hover:bg-blue-500/80 hover:shadow-blue-500/5 focus:ring-blue-500/40 dark:bg-blue-400 dark:text-zinc-900 dark:shadow-blue-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-blue-400/80 dark:hover:shadow-blue-400/5 dark:focus:ring-blue-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://twitter.com/raphael_chelly"
            rel="noreferrer"
            target="_blank"
          >
            <svg height="24" role="presentation" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M21.5 5.894a7.571 7.571 0 0 1-2.239.636 4.024 4.024 0 0 0 1.714-2.235 7.646 7.646 0 0 1-2.475.98A3.83 3.83 0 0 0 15.654 4c-2.516 0-4.366 2.433-3.797 4.959-3.239-.168-6.111-1.776-8.034-4.22-1.021 1.816-.53 4.19 1.206 5.393a3.78 3.78 0 0 1-1.765-.505c-.043 1.87 1.252 3.622 3.126 4.011-.548.155-1.15.19-1.76.07.495 1.604 1.934 2.771 3.641 2.804A7.642 7.642 0 0 1 2.5 18.185 10.757 10.757 0 0 0 8.476 20c7.237 0 11.326-6.334 11.079-12.015a8.101 8.101 0 0 0 1.945-2.09Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Twitter</span>
          </a> */}

          <a
            className="focusable flex flex-none cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 px-2.5 py-2 font-medium text-white shadow-lg shadow-indigo-500/10 transition selection:bg-white/30 hover:bg-indigo-500/80 hover:shadow-indigo-500/5 focus:ring-indigo-500/40 dark:bg-indigo-400 dark:text-zinc-900 dark:shadow-indigo-400/10 dark:selection:bg-zinc-900/30 dark:hover:bg-indigo-400/80 dark:hover:shadow-indigo-400/5 dark:focus:ring-indigo-400/40 sm:w-auto sm:px-3 sm:pl-2.5"
            href="https://devpost.com/riyan-ahmed"
            rel="noreferrer"
            target="_blank"
          >
            <span className="hidden sm:inline">Devpost</span>
          </a>

          <ThemeSwitch />
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>

        <div className="content mt-12 sm:mt-24">
          <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences</h2>
          <ul className="mt-8">
            {/* <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
              <a
                className="link focusable font-medium text-zinc-800 dark:text-white"
                href="https://www.octopia.com/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/static/images/workxp/octopia.jpg"
                  alt="Octopia"
                  width="50px"
                  height="50px"
                  className="rounded-md"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="mb-1 flex items-center">
                  <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                    Octopia
                  </span>
                  <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    2021
                    <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                    Today
                  </span>
                </p>
                <p className="flex items-center truncate">
                  <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                    Marketing Project Manager
                  </span>
                </p>
              </div>
            </li> */}
            <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
              <a
                className="link focusable font-medium text-zinc-800 dark:text-white"
                href="https://www.lockheedmartin.com/en-ca/index.html"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/static/images/workxp/lockheed.jpg"
                  alt="Octopia"
                  width="50px"
                  height="50px"
                  className="rounded-md"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="mb-1 flex items-center">
                  <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                    Lockheed Martin
                  </span>
                  <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    2023
                    <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                    2023
                  </span>
                </p>
                <p className="flex items-center truncate">
                  <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                    Software Developer Intern
                  </span>
                </p>
              </div>
            </li>
            <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
              <a
                className="link focusable font-medium text-zinc-800 dark:text-white"
                href="https://www.linkedin.com/company/cublueprint/"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/static/images/workxp/cub.jpg"
                  alt="Octopia"
                  width="50px"
                  height="50px"
                  className="rounded-md"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="mb-1 flex items-center">
                  <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                    CU Blueprint
                  </span>
                  <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    2022
                    <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                    2023
                  </span>
                </p>
                <p className="flex items-center truncate">
                  <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                    Frontend Developer on the Urban Minds team
                  </span>
                </p>
              </div>
            </li>
            <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
              <a
                className="link focusable font-medium text-zinc-800 dark:text-white"
                href="https://www.canada.ca/en/public-services-procurement.html"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src="/static/images/workxp/pspc.jpg"
                  alt="Octopia"
                  width="50px"
                  height="50px"
                  className="rounded-md"
                />
              </a>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="mb-1 flex items-center">
                  <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                    Public Services and Procurement Canada
                  </span>
                  <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                    2022
                    <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                    20223
                  </span>
                </p>
                <p className="flex items-center truncate">
                  <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                    Software Developer Intern
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 
      <div className="content mb-8">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
        <p className="max-w-[46ch] leading-relaxed text-zinc-500 dark:text-slate-300">
          A selection of projects I worked on in the past few years.
        </p>
      </div>

      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </div>
      </div> */}

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}

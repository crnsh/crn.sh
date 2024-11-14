import { Link } from "next-view-transitions";
import { getBlogPosts } from "~~/blog";

function UpRightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

type ExperienceItem = {
  name: string;
  link: string;
  position: string;
  description: string;
};

function ExperienceSection({
  title,
  items,
}: {
  title: string;
  items: ExperienceItem[];
}) {
  return (
    <section className="text-left">
      <h3 className="mb-8 text-xl font-medium">{title}</h3>

      {items.map((item, index) => (
        <div key={index} className="mb-8">
          <a
            href={item.link}
            target="_blank"
            className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
          >
            {item.name}
          </a>

          <p className="mt-3">{item.position}</p>

          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default function HomePage() {
  const workItems = [
    {
      name: "gumroad",
      link: "https://gumroad.com",
      position: "software engineer (apr 2024 - present)",
      description:
        "building gumroad and flexile",
    },
    {
      name: "maybe",
      link: "https://maybe.co",
      position: "contributor (jan 2023 - feb 2024)",
      description:
        "built features and won a bounty",
    },
  ] satisfies ExperienceItem[];

  const projectItems = [
    {
      name: "onnx2mlgo",
      link: "https://github.com/crnsh/onnx2mlgo",
      position: "creator",
      description:
        "onnx to mlgo compiler",
    },
    {
      name: "github-h-index",
      link: "https://github.com/crnsh/github-h-index",
      position: "creator",
      description:
        "github h-index calculator",
    },
    {
      name: "all projects →",
      link: "https://github.com/crnsh",
      position: "",
      description: "",
    },
  ] satisfies ExperienceItem[];

  const posts = getBlogPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )
    .slice(0, 4);

  return (
    <main className="text-left">
      <h1 className="mb-6 text-2xl font-medium tracking-tighter">
        karan handa
      </h1>

      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
          <WorkIcon />
          <p className="inline-flex">engineer @ gumroad</p>
        </div>
      </div>

      <p className="prose prose-neutral mb-10 dark:prose-invert">
        i build.
      </p>

      <div className="my-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <ExperienceSection title="work" items={workItems} />
        <ExperienceSection title="projects" items={projectItems} />
      </div>

      {/* <h3 className="mb-8 text-xl font-medium">blog</h3>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="">
            <div className="flex w-full justify-between">
              <p className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600">
                {post.metadata.title.toLowerCase()}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {new Date(post.metadata.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .toLowerCase()}
              </p>
            </div>
          </Link>
        ))}

        <Link
          href="/blog"
          className="decoration-neutral-4000 mt-4 font-medium underline decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
        >
          all posts →
        </Link>
      </div> */}

      <h3 className="mb-6 mt-12 text-xl font-medium">links</h3>
      <ul className="font-sm flex flex-col space-x-0 space-y-3 text-neutral-600 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:karan.handa.fox@gmail.com"
          >
            <p className="mr-2 h-7">email</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/crnshx"
          >
            <p className="mr-2 h-7">x.com</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/crnsh"
          >
            <p className="mr-2 h-7">github</p>
            <UpRightArrowIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/crnsh/"
          >
            <p className="mr-2 h-7">linkedin</p>
            <UpRightArrowIcon />
          </a>
        </li>
      </ul>
    </main>
  );
}

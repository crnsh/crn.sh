import { getNowPlaying } from "~~/lib/spotify";

const AudioWaveform = ({ color = "currentColor", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <rect
          key={index}
          x={4 + index * 4}
          y="12"
          width="1.5"
          height="1.5"
          rx="0.75"
          fill={color}
        >
          <animate
            attributeName="height"
            values="1.5;12;1.5"
            dur="1.2s"
            repeatCount="indefinite"
            begin={`${index * 0.2}s`}
          />
          <animate
            attributeName="y"
            values="12;6;12"
            dur="1.2s"
            repeatCount="indefinite"
            begin={`${index * 0.2}s`}
          />
        </rect>
      ))}
    </svg>
  );
};

export async function Footer() {
  return (
    <footer className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
      <hr className="mb-4 border-t border-neutral-400 dark:border-neutral-600" />
      <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <span className="font-medium">karan handa</span>
      </div>
    </footer>
  );
}

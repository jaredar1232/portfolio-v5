export default function Resume() {
  return (
    <div className="text-white pt-0 pb-10 md:pb-8">
      <div className="w-full max-w-52 h-auto mx-auto hover:shadow-[0_4px_8px_rgba(255,255,255,0.4)] hover:-translate-y-[2px] active:shadow-[0_2px_4px_rgba(255,255,255,0.2)] rounded-md duration-300">
        <a
          href="https://d1o11p1jeyf1dw.cloudfront.net/Resume-JaredRothenberg.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center w-full h-full font-normal uppercase text-xl md:text-lg text-customBlueForText bg-white text-center py-4 px-1 md:py-2 rounded-md transition-shadow duration-300 no-underline hover:bg-gradient-to-t hover:from-customBlue hover:to-customBlueDark hover:text-white hover:shadow-lg whitespace-nowrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" />
          </svg>
          <span className="whitespace-nowrap text-inheirit">View Resume</span>
        </a>
      </div>
    </div>
  );
}
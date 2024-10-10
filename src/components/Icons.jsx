export default function Icons({ anIcon }) {
  return (
    <div className="text-center m-2">
      <div className="mx-auto rounded-md w-10 h-10 md:w-16 md:h-16">
        <img
          className="w-full h-full"
          src={`/${anIcon}.png`}
          alt={`${anIcon} logo`}
        />
      </div>
      <div className="text-sm md:text-base text-black">{anIcon}</div>
    </div>
  );
}
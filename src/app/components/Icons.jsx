import Image from 'next/image'

export default function Icons({ anIcon }) {
  return (
    <div className="text-center m-2">
      <div className="mx-auto rounded-md w-10 h-10 md:w-16 md:h-16">
        <Image
          style={{
            width: '100%',
            height: 'auto',
          }}
          src={`/${anIcon}.webp`}
          alt={`${anIcon} logo`}
        />
      </div>
      <div className="text-sm md:text-base text-black">{anIcon}</div>
    </div>
  );
}
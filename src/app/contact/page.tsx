import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className=" min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to GrooveZone, your music companion! Discover, create, and
          share tunes hassle-free. With reliable features, GrooveZone
          personalizes your musical journey. Explore new beats, craft playlists,
          or share your vibe with ease.
        </p>
        <input
          type="text"
          placeholder="   example@web.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="  Write Your FeedBack....."
          rows={4}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
        
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default page;

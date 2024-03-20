'use client'
import Link from "next/link";
import courseData from "../data/music_course.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image"

//new type define via interface keyword
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image:string;

}
const FeaturedCourses = () => {
  const featuredCourse = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 ">
      <div>
        <div className="text-center">
          {/* section heading */}
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      {/* featured couses Todo: turn on  */}
      <div className="mt-10">
        {/* course cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
           <BackgroundGradient className="flex flex-wrap flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
            <Image
          src={course.image}
          alt={course.title}
          height="180"
          width="180"
          className="object-contain"
        />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {course.description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <Link href={`/courses/${course.slug}`}><span className="text-md">Buy now </span></Link>
          <span className="bg-zinc-700 text-sm rounded-full text-[0.6rem] px-2 py-0 text-white">
           $ {course.price}
          </span>
        </button>
            </div>
           </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      {/* btn */}
      {/* todo turn on the btn */}
      <div className="mt-20 text-center">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black/[0.96] text-black dark:text-white border-neutral-200 dark:border-slate-900"
          >
            <span className="font-semibold  bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              View All Courses
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;

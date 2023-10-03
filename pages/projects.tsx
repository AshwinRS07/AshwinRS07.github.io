import { Ad } from '@/components/Ad';
import { Container } from 'layouts/Container';
import Image from 'next/legacy/image';
{/*
Project List:

Software Development:
Campus Job Portal -- Not hosted yet
Online Bookstore -- Not hosted yet
Movie Ticket Reservation -- Not hosted yet
Portfolio Website -- Hosted
Maze Solving Bot -- Hosted
River Crossing Game Engine -- Not hosted yet
Duck Simulator -- Not hosted yet

Machine Learning:
Code Summarization -- Hosted
Music Genre Classification -- Hosted
Vehicle Classification/Numberplate Detection -- Hosted
EV Charging/Parking Garage location analysis -- Hosted

*/}
function ButtonLink({ text, href }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transitionbg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700 bg-midnight no-underline`}
    >
      {text}
      <svg
        className={`mt-0.5 ml-2 -mr-1 stroke-2 stroke-white dark:stroke-midnight`}
        fill='none'
        width='10'
        height='10'
        viewBox='0 0 10 10'
        aria-hidden='true'
      >
        <path
          className='transition opacity-0 group-hover:opacity-100'
          d='M0 5h7'
        ></path>
        <path
          className='transition group-hover:translate-x-[3px]'
          d='M1 1l4 4-4 4'
        ></path>
      </svg>
    </a>
  );
}

export default function Projects() {
  return (
    <Container title='Projects - Ashwin Shenolikar'>
      <h1>
        <span
          className='block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400'>
          Projects
        </span>
        <span className='block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl'>
          A selection of my favorite works.
        </span>
      </h1>

      <div className='space-y-12'>
        <div
          className='relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-indigo-900 to-indigo-200 dark:border-slate-700 border-slate-100'>
          <div
            className='w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-600 to-transparent'></div>
          <div className='grid grid-cols-1 min-h-[500px] md:grid-cols-2'>
            <div className='self-end col-span-1 m-8 text-center md:text-left'>
              <h2 className='mt-0'>Campus Job Portal</h2>
              <p>
                Developed a networking and job portal for Virginia Tech, connecting students, professors, and staff;
                consisting of 16 RESTful
                API calls made in the backend in a 5-person collaboration.
              </p>
              <ButtonLink
                text='Visit Campus Job Portal'
                href='http://hdl.handle.net/10919/113750'
              />
            </div>
            <div className='md:absolute md:top-4 md:right-[-200px] md:w-[800px]'>
              <Image
                objectFit='contain'
                src='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686260020/Campus_Job_Portal_logo_i1xurd.png'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686260020/Campus_Job_Portal_logo_i1xurd.png'
                width={500}
                height={500}
                layout='intrinsic'
                alt={'Campus Job Portal'}
              />
            </div>
          </div>
        </div>

        <br />
        <br />

        {/*<div className="flex justify-center">*/}
        {/*  <Ad />*/}
        {/*</div>*/}

        <div
          className='relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100'>
          <div
            className='w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent'></div>
          <div className='grid grid-cols-1 min-h-[500px] max-h-[500px] md:grid-cols-2'>
            <div className='md:w-[650px] max-h-[500px]'>
              <Image
                className='absolute bottom-20 md:bottom-0 md:-left-16'
                objectFit='scale-down'
                src='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686260039/bookstore-logo.6edc632b_zvdrsi.png'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686260039/bookstore-logo.6edc632b_zvdrsi.png'
                width={500}
                height={500}
                layout='intrinsic'
                alt={'Online Bookstore Logo'}
              />
            </div>
            <div className='self-end order-first col-span-1 m-8 text-center md:order-last md:text-left'>
              <h2 className='mt-0'>Online Bookstore Web Application</h2>
              <p>
                Designed and coded an online bookstore, where users to order books from a multi-genre catalog,
                with a functional shopping cart, with 12 REST APIs and 5+ backend packages.
              </p>
              {/*Upload BookHub to GitHub*/}
              {/*<ButtonLink*/}
              {/*  text='Visit Bookhub!'*/}
              {/*  href=''*/}
              {/*/>*/}
            </div>
          </div>
        </div>

        <br />
        <br />

        <div
          className='relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-slate-50 dark:from-slate-800 dark:to-blue-900 to-blue-300 dark:border-slate-700 border-slate-100'>
          <div
            className='w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent'></div>
          <div className='grid grid-cols-1 min-h-[500px] md:grid-cols-2'>
            <div className='self-end col-span-1 m-8 text-center md:text-left'>
              <h2 className='mt-0'>Movie Ticket Reservation System</h2>
              <p>
                Formulated and developed a Java AWT application with MySQL Database, incorporating a Singleton
                pattern and Factory pattern using agile methodology.
              </p>
              <ButtonLink
                text='Visit APSIT Theatre!'
                href='https://github.com/AshwinRS07/Projects'
              />
            </div>
            {/*<div className='md:absolute md:top-4 md:right-[-200px] md:w-[800px]'>*/}
            {/*  <Image*/}
            {/*    objectFit='fill'*/}
            {/*    src='https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png'*/}
            {/*    placeholder='blur'*/}
            {/*    blurDataURL='https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png'*/}
            {/*    width={900}*/}
            {/*    height={552}*/}
            {/*    layout='intrinsic'*/}
            {/*    alt={'Bundle, LLC on a Macbook Pro'}*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        </div>

        <br />
        <br />

        {/* Add A New Project*/}
        <div
          className='relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b from-purple-50 dark:from-purple-900/50 dark:to-fuchsia-700 to-fuchsia-300 dark:border-slate-700 border-slate-100'>
          <div
            className='w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-300 dark:via-fuchsia-600 to-transparent'></div>
          <div className='grid grid-cols-1 min-h-[500px] max-h-[500px] md:grid-cols-2'>
            <div className='md:w-[650px] max-h-[500px]'>
              <Image
                className='absolute bottom-20 md:bottom-0 md:-left-16'
                objectFit='scale-down'
                src='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686335163/Meshmerize_squared_bt99o3.jpg'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/dmltcfxo4/image/upload/v1686335163/Meshmerize_squared_bt99o3.jpg'
                width={500}
                height={500}
                layout='intrinsic'
                alt={'Robot Image'}
              />
            </div>
            <div className='self-end order-first col-span-1 m-8 text-center md:order-last md:text-left'>
              <h2 className='mt-0'>Maze Solving Bot</h2>
              <p>
                Created a robot powered with an Arduino NANO unit which can traverse a maze randomly, and then use an
                optimization algorithm to remember and traverse the best path from the first run on a second run
              </p>
              {/*Upload BookHub to GitHub*/}
              <ButtonLink
                text='Visit Meshmerize!'
                href='https://github.com/AshwinRS07/Meshmerize'
              />
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}

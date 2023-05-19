import { Ad } from '@/components/Ad';
import { Container } from 'layouts/Container';
import Image from 'next/legacy/image';

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
    <Container title='Projects - Braydon Coyer'>
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
                href=''
              />
            </div>
            <div className='md:absolute md:top-4 md:right-[-200px] md:w-[800px]'>
              <Image
                objectFit='fill'
                src='https://res.cloudinary.com/braydoncoyer/image/upload/v1646346494/mbpro_css_art_challenge_thh7yw.png'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/braydoncoyer/image/upload/v1646346494/mbpro_css_art_challenge_thh7yw.png'
                width={900}
                height={552}
                layout='intrinsic'
                alt={'CSS Art Challenge on a Macbook Pro'}
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
                objectFit='fill'
                src='https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/braydoncoyer/image/upload/v1638225420/pomegradient_ipadpro_vhapql.png'
                width={1978}
                height={1713}
                layout='intrinsic'
                alt={'NgLimeade on an iPad'}
              />
            </div>
            <div className='self-end order-first col-span-1 m-8 text-center md:order-last md:text-left'>
              <h2 className='mt-0'>Online Bookstore Web Application</h2>
              <p>
                Designed and coded an online bookstore, where users to order books from a multi-genre catalog,
                with a functional shopping cart, with 12 REST APIs and 5+ backend packages.
              </p>
              <ButtonLink
                text='Visit Pomegradient'
                href='https://www.pomegradient.com'
              />
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
                text='Visit Bundle'
                href='https://www.bundleapps.io'
              />
            </div>
            <div className='md:absolute md:top-4 md:right-[-200px] md:w-[800px]'>
              <Image
                objectFit='fill'
                src='https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png'
                placeholder='blur'
                blurDataURL='https://res.cloudinary.com/braydoncoyer/image/upload/v1638221102/mbpro_bundle_site_zg8jbe.png'
                width={900}
                height={552}
                layout='intrinsic'
                alt={'Bundle, LLC on a Macbook Pro'}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { getPublishedArticles, getWorkTimelineData } from '@/lib/notion';

import { Ad } from '@/components/Ad';
import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { ButtonType } from '@/lib/types';
import { Container } from 'layouts/Container';
import CustomLink from '@/components/CustomLink';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { TimelineItem } from '@/components/TimelineItem';
import { TimelineList } from '@/components/TimelineList';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';

export default function About({ workTimeline }) {
  const { push } = useRouter();
  return (
    <Container title="About Me - Ashwin Shenolikar">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-indigo-500 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          My Story, so far. {/*My Story, so far*/}
        </span>
      </h1>
      {/* For Embedded Text Links: {' '}<CustomLink href={siteMetadata.<LinkName>}>Text</CustomLink>*/}
      <p>
        I’m Ashwin, a software developer, newbie open source contributor, and hobbyist game developer.
        My mission is to be cautiously curious and never stop learning while developing
        meaningful, efficient and pixel-perfect products, that satisfy my customer's
        needs as much as they do my own high standard of product quality.
      </p>
      <p>
        As of now, I am volunteering as an Application Developer at Virginia Tech, while
        I search for my first big role! Feel free to reach out with any opportunities you're
        aware of by the way :D.
        Simultaneously, I am developing personal projects ranging from Web products to 2D game dev,
         and contributing to open source repositories when I can!
      </p>
      <p>
        I have recently graduated from Virginia Tech's Master's in Engineering course,
        with a dual focus in Software Development and Machine Learning.
        Over the 6 years of my academic journey in the world of Computer Science, 
        I worked with and learned modern software development techniques and
        actually implemented projects using current industry software development model and frameworks, 
        this website being a great example of one of my React.js projects.
        <div className="hidden md:block md:float-right">
          <Image
            className="md:mr-8"
            src="https://res.cloudinary.com/dmltcfxo4/image/upload/v1696295617/Leetcode_SS_cjtxv9.png"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dmltcfxo4/image/upload/v1696295617/Leetcode_SS_cjtxv9.png"
            width={200}
            height={100}
            alt={'Leetcode_stats'}
          />
        </div>
      </p>
      <div>
        <div className="hidden md:block md:float-right">
          <Image
            className="md:mr-8"
            src="https://res.cloudinary.com/dmltcfxo4/image/upload/v1684980240/IMG_0161_nlthrx.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/dmltcfxo4/image/upload/v1684980240/IMG_0161_nlthrx.jpg"
            width={340}
            height={448}
            alt={'article cover'}
          />
        </div>
        <p>
          During my Master's, I have worked as a Graduate Assistant at the upcoming Virginia Tech Innovation
          Campus, and have been instrumental in a lot of the projects and events during my employment.
        </p>
        <p>
          Prior to coming to the USA for my Master's, I was doing my Bachelor's in Computer
          Science and Engineering in the University of Mumbai's A.P. Shah Institute of Technology,
          where I helped my institute's nascent department grow considerably by organizing technical and non-technical events,
          also assisting my department with securing a national level accreditation for education quality.

        </p>
        {/*<p>*/}
        {/*  During my undergrad, I not only learned in detail about Computer Science as a whole,*/}
        {/*  I had invaluable mentors who taught me about the semantic gap between industry and academia,*/}
        {/*  and cultured in me a trait of being cautious, curious and competitive to excel in my post-academic pursuits,*/}
        {/*  which I value to this day and going forward.*/}
        {/*</p>*/}
        <p>
          Apart from my academic pursuits, I enjoy going on treks, reading, learning
          new languages and instruments(Spanish and Guitar as of now), gaming, and going for
          badminton and/or cricket in my free time.
        </p>
        <p>
          You can find me on <a href={siteMetadata.linkedin}>LinkedIn</a> where I
          am rather active, or you can follow me
          on <CustomLink href={siteMetadata.github}>GitHub</CustomLink> to check out my latest contributions and projects!
        </p>
        <div></div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Brief rundown of my most recent experiences.</p>
        {workTimeline ? (
          <TimelineList>
            {workTimeline.map((workItem, index) => (
              <TimelineItem
                key={index}
                title={workItem.title}
                meta={workItem.company}
                link={workItem.company_url}
                meta_small={workItem.duration}
                content={workItem.description}
              />
            ))}
          </TimelineList>
        ) : null}
        <Button
          onButtonClick={() => push(siteMetadata.resume)}
          buttonType={ButtonType.PRIMARY}
        >
          View my resume
        </Button>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>

      {/* Add about: Student Organizations, VT Innovation Campus, Treks*/}


      {/*<div className="mb-12">*/}
      {/*  <h2>I love to share my knowledge through writing.</h2>*/}
      {/*  <p>Check out a few of my most recent publishings.</p>*/}
      {/*  <ArticleList articles={recentArticles} />*/}
      {/*</div>*/}
      {/*<hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>*/}
      {/*<div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">*/}
        {/*<div className="col-span-3">*/}
        {/*  <h2>Interested in my gear?</h2>*/}
        {/*  <p>*/}
        {/*    I keep a list of software, applications, extensions, hardware and a*/}
        {/*    list of supplies I've used to set up my office for those who are*/}
        {/*    interested.*/}
        {/*  </p>*/}
        {/*  <Button*/}
        {/*    buttonType={ButtonType.PRIMARY}*/}
        {/*    onButtonClick={() => push('/toolbox')}*/}
        {/*  >*/}
        {/*    Check out my toolbox*/}
        {/*  </Button>*/}
        {/*</div>*/}
        {/*<div className="col-span-2">*/}
        {/*  <Image*/}
        {/*    className="rounded-3xl group-hover:opacity-75"*/}
        {/*    objectFit="cover"*/}
        {/*    src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"*/}
        {/*    placeholder="blur"*/}
        {/*    blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"*/}
        {/*    width={260}*/}
        {/*    height={260}*/}
        {/*    layout="responsive"*/}
        {/*    alt={'article cover'}*/}
        {/*  />*/}
        {/*</div>*/}
      {/*</div>*/}
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const workTimeline = [
    {
      title: 'Application Developer',
      company: 'Virginia Tech',
      company_url: 'https://www.ise.vt.edu/',
      duration: 'Presently Working',
      description: 'I work to maintain and enhance the VT ISE department\'s website using the latest technologies to integrate additional features and increase prospective student engagement.\n' +
        'Currently working with Python and data science libraries (numpy, pandas, sklearn) to develop AI models for gleaning program development insights.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Nucsoft Ltd',
      company_url: 'https://www.nucsoft.com/',
      duration: '',
      description: 'Created an embedded system with onboard web server to control multiple HVAC systems improving energy usage by 14%.\n' +
        'Coded C++ backend and JavaScript+jQuery web server and deployed on ESP8266 micro-controller with minimal latency.'
    },
    {
      title: 'Graduate Student Assistant',
      company: 'Virginia Tech - Innovation Campus',
      company_url: 'https://www.vt.edu/innovationcampus/index.html',
      duration: '',
      description: 'Worked as a graduate student assistant for the Virginia Tech Innovation Campus HQ, directly under the Administrative Head, \n' +
      'with tasks such as event management, inventory management, usage and handling of the office space security systems, and additional tasks as per requirement. \n'
    },
    {
      title: 'Core Member',
      company: 'APSIT - CMSA | Computer Society of India',
      company_url: 'https://www.apsit.edu.in/cmsa',
      duration: '',
      description: 'Worked as a core council member for the computer science department of my undergraduate college, being actively involved in departmental activities and practices, \n' +
        'conducting technical events and guest lectures, and maintaining the department\'s infrastructure throughout the duration of the position.\n'
    }
    /*Developed an embedded systems project to optimize energy usage by HVAC units. This was done in the form of a 'smart thermostat': An Arduino-powered board-ESP8266,
    with IR blasters and the capability to host a web server developed by me, allowing for remote control of every such unit sharing the server. The Tech Stack used was
    C++, HTML, CSS, Javascript, jQuery and Arduino IDE with hardware component connections.
    I interned there and worked on an embedded systems project involving both hardware and software components. Learned about coding software for real-time use at an end-product and
    wrote the entire code for the project single-handedly. The hardware used contained modules such as infrared blasters and receivers, ESP8266, and Arduino NANO and UNO modules, with some more peripherals.
    The end result was a custom automated Thermostat with a central webserver to remotely control the AC units within the range of the device.
    At the same time learned about basic systems management at the office level.
*/
  ];

  return {
    props: {
      recentArticles: null, //articles.slice(0, 3),
      workTimeline
    },
    revalidate: 200
  };
};
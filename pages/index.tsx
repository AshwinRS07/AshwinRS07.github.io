import { ButtonType, SubscribeSize } from '@/lib/types';
import { getPublishedArticles } from '@/lib/notion';

import { ArticleList } from '@/components/ArticleList';
import { Button } from '@/components/Button';
import { Container } from 'layouts/Container';
import { GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import { Subscribe } from '@/components/Subscribe';
import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';
import avatarImage from 'public/images/avatar.png';
import image1 from 'public/images/photo-1550684848-86a5d8727436_j4pgmt.jpg'
import image2 from 'public/images/photo-1661273714315-43546846c175_o2ihp4.jpg'
import image3 from 'public/images/5_basic_angular_testing_tips_banner.jpg'


export default function Home({ recentArticles }) {
  const { push } = useRouter();
  {/*Change Cover images?*/}
  recentArticles = [
    {
      title: 'Campus Job Portal',
      coverImage: image1,
      publishedDate: 'December 2022'
    },
    {
      title: 'Online Bookstore Web App',
      coverImage: image2,
      publishedDate: 'December 2022'
    },
    {
      title: 'Movie Ticket Reservation',
      coverImage: image3,
      publishedDate: 'May 2019'
    },
  ]
  return (
    <Container>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
              I'm{' '}
              <span className="text-teal-500 dark:text-teal-400">Ashwin</span>.
              A curious full-stack engineer with expertise in Python and Java {/*Possibly Change?*/}
            </h1>
            <div className="order-1 md:order-2"> {/*Change size?*/}
              <Image
                alt="Ashwin Shenolikar"
                height={160}
                width={160}
                src={avatarImage}
                placeholder="blur"
                blurDataURL={siteMetadata.avatarImage}
                className="col-span-1 rounded-full"
                layout="fixed"
              />
            </div>
          </div>
          <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/projects')}
            >
              Check out my projects {/*Change to something nicer*/}
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/about')}
            >
              More about me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>I love to share my knowledge through creating applications.</h2> {/*Something more attractive?*/}
          <p>Check out a few of my most recent projects.</p>
          <ArticleList articles={recentArticles} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/projects')}
            >
              See all projects
            </Button>
          </div>
          {/*<div className="mt-16">*/}
          {/*  <Subscribe size={SubscribeSize.LARGE} />*/}
          {/*</div>*/}
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.BLOG_DATABASE_ID);

  return {
    props: {
      recentArticles: null
    },
    revalidate: 30
  };
};

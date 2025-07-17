import siteMetadata from '@/data/siteMetadata';
import linkedIcon from 'public/images/linkedin.png';
import githubIcon from 'public/images/github.png';
import Image from 'next/legacy/image';

const navigation = {
  general: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: siteMetadata.resume }
  ],
  social: [
    {
      name: 'LinkedIn',
      href: siteMetadata.linkedin,
      icon: linkedIcon
    },
    {
      name: 'GitHub',
      href: siteMetadata.github,
      icon: githubIcon
    }
    // {
    //   name: 'CodePen',
    //   href: siteMetadata.codepen,
    //   icon: () => (
    //     <svg
    //       stroke="currentColor"
    //       fill="currentColor"
    //       strokeWidth="0"
    //       viewBox="0 0 512 512"
    //       className="w-5 h-5 transform hover:rotate-[-4deg] transition"
    //       height="1em"
    //       width="1em"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
    //     </svg>
    //   )
    // }
  ]
};

export function Footer() {
  return (
    <>
      <footer>
        <hr />
        <div className="flex items-center justify-between mb-20">
          <div role="list" className="mt-4 space-y-4">
            {navigation.general.map((item) => (
              <a
                target="_blank"
                key={item.name}
                href={item.href}
                className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline"
                rel="noreferrer"
              >
                <span className="block text-base text-gray-600 no-underline cursor-pointer hover:text-gray-800 dark:hover:text-gray-300 dark:text-gray-400 hover:underline">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center order-2 space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 important"
                >
                  <span className="sr-only">{item.name}</span>
                  <Image
                    alt="Ashwin"
                    height={50}
                    width={50}
                    src={item.icon}
                    placeholder="blur"
                    blurDataURL={item.href}
                    className="col-span-1"
                    layout="fixed"
                  />
                </a>
              ))}
            </div>
            {/*<p className='order-1 text-base'>*/}
            {/*  &copy; {new Date().getFullYear()} {siteMetadata.author}*/}
            {/*</p>*/}
          </div>
        </div>
      </footer>
    </>
  );
}

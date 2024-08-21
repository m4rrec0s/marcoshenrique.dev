import {
  JavaScriptIcon,
  NextJsIcon,
  PostgreesIcon,
  PrismaIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  DockerIcon,
  PythonIcon,
  CssIcon,
  HtmlIcon,
  NodeJsIcon,
  GitHubIcon,
  GitIcon,
} from '../icons/technologies-icons';

const technologyIcons = [
  <JavaScriptIcon key="javascript" height={35} width={35} />,
  <TypeScriptIcon key="typescript" height={35} width={35} />,
  <NodeJsIcon key="nodejs" height={35} width={35} />,
  <PythonIcon key="python" height={35} width={35} />,
  <ReactIcon key="react" height={35} width={35} />,
  <HtmlIcon key="html" height={35} width={35} />,
  <CssIcon key="css" height={35} width={35} />,
  <NextJsIcon key="nextjs" height={35} width={35} />,
  <TailwindIcon key="tailwind" height={35} width={35} />,
  <PrismaIcon key="prisma" height={35} width={35} />,
  <PostgreesIcon key="postgrees" height={35} width={35} />,
  <DockerIcon key="docker" height={40} width={40} />,
  <GitIcon key="git" height={35} width={35} />,
  <GitHubIcon key="github" height={35} width={35} />,
];

const ScrollCarousel = () => {

  return (
    <div className="opacity-40 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {technologyIcons.map((icon, index) => (
          <li key={index} className="max-w-none">
            <div className='w-9 h-9'>
              {icon}
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 max-w-none animate-infinite-scroll" aria-hidden="true">
        {technologyIcons.map((icon, index) => (
          <li key={index} className="max-w-none">
            <div className='w-9 h-9'>
              {icon}
            </div>
          </li>
        ))}
      </ul>
  </div>
  );
};

export default ScrollCarousel;
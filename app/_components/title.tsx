interface TitleProps {
  title: string;
  span: string;
  paragraph?: string;
}

const Title = ({ title, span, paragraph }: TitleProps) => {
  return (
    <div className="w-full justify-center items-center text-center max-w-[600px] px-5">
      <h3 className="bg-gradient-to-r from-[#038C7F] to-[#A9D9D0] bg-clip-text font-semibold uppercase tracking-widest text-transparent">
        {span}
      </h3>
      <h2 className="mt-4 text-3xl font-bold">{title}</h2>
      <p className="mt-2 dark:text-white/60 text-center">{paragraph}</p>
    </div>
  );
};

export default Title;

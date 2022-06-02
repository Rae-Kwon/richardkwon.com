interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex justify-start w-full 3xl:w-3/4">
      <h3 className="text-subheading text-3xl">{title}</h3>
    </div>
  );
};
export default Title;

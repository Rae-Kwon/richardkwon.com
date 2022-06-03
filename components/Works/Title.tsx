interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex justify-start w-full 3xl:w-3/4">
      <h4 className="text-subheading text-3xl">{title}</h4>
    </div>
  );
};
export default Title;

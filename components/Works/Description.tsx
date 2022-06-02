interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return <p className="text-xl 3xl:w-3/4">{description}</p>;
};
export default Description;

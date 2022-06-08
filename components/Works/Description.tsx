interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return <p className="text-xl">{description}</p>;
};
export default Description;

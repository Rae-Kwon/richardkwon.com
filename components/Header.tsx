interface HeaderProps {
  heading: string;
}

const Header = ({ heading }: HeaderProps) => {
  return (
    <h3 className="text-5xl font-subheadings mb-20 underline underline-offset-8">
      {heading}
    </h3>
  );
};
export default Header;

interface HeaderProps {
  heading: string;
}

const Header = ({ heading }: HeaderProps) => {
  return (
    <h2 className="text-5xl font-subheadings mb-20 underline underline-offset-8">
      {heading}
    </h2>
  );
};
export default Header;

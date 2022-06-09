import Cloud from "./Cloud";

const Clouds = () => {
  return (
    <div className="absolute">
      <Cloud cloudDuration={131} cloudScale={4} cloudStartPos="20%" />
      <Cloud cloudDuration={48} cloudScale={2} cloudStartPos="90%" />
      <Cloud cloudDuration={71} cloudScale={1} cloudStartPos="50%" />
      <Cloud cloudDuration={76} cloudScale={0.5} cloudStartPos="43%" />
      <Cloud cloudDuration={108} cloudScale={4} cloudStartPos="83%" />
      <Cloud cloudDuration={68} cloudScale={2} cloudStartPos="73%" />
      <Cloud cloudDuration={55} cloudScale={1} cloudStartPos="69%" />
      <Cloud cloudDuration={61} cloudScale={0.5} cloudStartPos="100%" />
      <Cloud cloudDuration={51} cloudScale={4} cloudStartPos="10%" />
      <Cloud cloudDuration={63} cloudScale={2} cloudStartPos="14%" />
      <Cloud cloudDuration={48} cloudScale={1} cloudStartPos="73%" />
      <Cloud cloudDuration={42} cloudScale={0.5} cloudStartPos="51%" />
    </div>
  );
};
export default Clouds;

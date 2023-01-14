import NavBar from "@components/nav_bar/nav_bar";
import Text from "@components/text/text";

const Home = () => {
  return (
    <>
      <NavBar />
      <Text.TitleSansLargeBold>Hello World</Text.TitleSansLargeBold>
      <Text.FunMedium>Welcome to Viva Pinata RTP</Text.FunMedium>
    </>
  );
};

export default Home;

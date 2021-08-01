import { Global, css, connect, styled, Head, action } from "frontity";
import Switch from "@frontity/components/switch";

import tw from "tailwind.macro";
import ResetStyles from "../assets/index.css"

import Image from '../assets/images/sport-bg.jpg'

import List from "./list";
import Header from "./header";

const Root = ({ state , action }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={[globalStyles, css(ResetStyles)]} />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/animate-css-grid@latest"></script>
      </Head>


      <Container>
        <Header></Header>

        <Switch>
          <List when={data.isArchive} />
        </Switch>
      </Container>
    </>
  );
};

const Button = styled("button")`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`};
`;

const Container = styled("div")`
  background-color: #1a1a1a;
  ${tw`w-10/12 mx-auto shadow-xl min-h-screen`};
`;

const globalStyles = css`
  *{
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    height: 100vh;
    background-image:  url(${Image});
    background-repeat: no-repeat;
    background-size:   cover;
    background-attachment: fixed;
  }
`;
export default connect(Root);
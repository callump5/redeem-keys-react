import { Global, css, connect, styled, Head } from "frontity";
import tw from "tailwind.macro";

import Image from '../assets/images/sport-bg.jpg'

import Nav from "./nav";

const Root = ({state}) => {
    return (
        <>
            <Global styles={globalStyles} />
            <Container>
              <Nav></Nav>
              <Button>Button</Button>
            </Container>
            
        </>
    );
};

const Button = styled("button")`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`};
`;

const Container = styled("div")`
  background-color: #1a1a1a;
  ${tw`w-8/12 mx-auto shadow-xl min-h-screen`};
`;

const globalStyles = css`
  body {
    margin: 0;
    height: 100vh;
    background-image:  url(${Image});
    background-repeat: no-repeat;
    background-size:   cover
  }
`;
export default connect(Root);
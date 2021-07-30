import { connect, styled, css } from "frontity";
import Nav from "./nav";
import LogoImg from "../assets/images/logo-transparent-2.png"
import tw from "tailwind.macro";

const Header = ({state}) => {

    return (
        <HeaderContainer>
            <Nav menu={state.theme.LeftMenu}></Nav>
            <ImageContainer>
                <Image src={LogoImg}></Image>
            </ImageContainer>
            <Nav menu={state.theme.RightMenu}></Nav>
        </HeaderContainer>
    )

}


const HeaderContainer = styled("div")`
    ${tw`flex flex-row`};
    background: #2D2D2D;
    padding: 15px;
    nav:last-child {
        flex-direction: row-reverse !important;

    }
`;

const ImageContainer = styled("div")`
    width: 20%;
    padding: 0 20px
`;

const Image = styled('img')`
    width: 100%;
`;


export default connect(Header);
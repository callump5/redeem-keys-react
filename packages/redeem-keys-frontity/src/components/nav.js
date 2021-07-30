import { connect, styled } from "frontity"
import NavItem from "./nav-item";
import tw from "tailwind.macro";

const Nav = ({state, menu}) => {

    
    return(
        <>
            <NavContainer>
                <NavList>
                    {menu.map(([name, link, img]) => {
                        return (
                            <NavItem key={name} name={name} link={link} img={img}></NavItem>
                        )
                    })}
                </NavList>
            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`
    ${tw`flex`};
    width: 40%;
`;
const NavList = styled('ul')`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0; 
`;


export default connect(Nav);
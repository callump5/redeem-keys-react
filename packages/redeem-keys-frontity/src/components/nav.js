import Link from "@frontity/components/link"
import { connect, styled } from "frontity"

const Nav = ({state}) => {
    const data = state.theme.menu;
    
    return(
        <>
            <NavContainer>
                {data.map(([name, link]) => {
                    return(
                        <Link key={name} link={link}>{name}</Link>
                    )
                })}
            </NavContainer>
        </>
    )
}

const NavContainer = styled.nav`

`

export default connect(Nav);
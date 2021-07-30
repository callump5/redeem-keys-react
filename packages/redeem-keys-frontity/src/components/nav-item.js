import { connect, styled } from "frontity"
import IconLink from "./icon-link";
import Link from "@frontity/components/link";

const NavItem = ({ state, ...props }) => {
    if(props.img){
        return(
            <IconLinkContainer>
                <IconLink link={props.link} img={props.img} name={props.name}></IconLink>
            </IconLinkContainer>
        )
    } else {
        return(
            <IconLinkContainer>
                <Link link={props.link}>{props.name}</Link>        
            </IconLinkContainer>
        )
    }
}

const IconLinkContainer = styled("li")`
    display: flex;
    align-items: center;
    margin: 10px 12px;

    & a {
        color: #f4b405;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 13px
    }
    
`;
    
export default connect(NavItem);
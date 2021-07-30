import { connect, styled } from "frontity";
import Link from "@frontity/components/link";


const IconLink = ({state, ...props}) => {
    return(
        <>
            <Icon src={props.img}></Icon>
            <Link link={props.link}>{props.name}</Link>
        </>
    )
}


const Icon = styled("img")`
    width: 30px !important;
    margin-right: 5px;
    filter: invert(100);
`;

export default connect(IconLink);
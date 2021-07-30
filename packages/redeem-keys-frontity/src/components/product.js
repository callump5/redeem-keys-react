import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Link from "@frontity/components/link";

const Product = ({state, item}) => {
    // console.log(item);
    
    return(
        <ProductContainer link={item.link}>
            <Title>{item.title.rendered}</Title>
        </ProductContainer>
    )
}

const Title = styled('h3')`

`;

const ProductContainer = styled(Link)`


`;


export default connect(Product);
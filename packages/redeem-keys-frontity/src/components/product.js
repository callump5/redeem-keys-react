import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Link from "@frontity/components/link";
import ProductThumbnail from "./product-thumbnail";
import { useTransitions, animated } from "react-spring"

const Product = ({state, item, libraries}) => {
    // console.log(item.link);
    const Html2React = libraries.html2react.Component;

    const expandDiv = (e) => {
        const target = e.target.closest(".parent");
        const cpLink = document.querySelector('.cpLink')
        console.log(target, cpLink);
        target.style.width = '100%'
        cpLink.click()
    }
    return(

        <ProductContainer className='parent' data-id={item.id} onClick={expandDiv} >
            <ProductThumbnail id={item.featured_media}/>
            <ProductInfo>
                <Title><Link className='cpLink' link={item.link}>{item.title.rendered}</Link></Title>
                <Price><Html2React html={item._price_html}></Html2React></Price>
            </ProductInfo>
        </ProductContainer>        
    )
}


const ProductContainer = styled('div')`
width: 20%;
transition: all .3s;
${tw`shadow-lg rounded-sm`}
`;

const ProductInfo = styled('div')`
 ${tw`py-3 text-lg`}
`;

const Price = styled('div')`
`;

const Title = styled('h3')`
`;






export default connect(Product);
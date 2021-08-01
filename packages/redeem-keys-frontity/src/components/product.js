import {connect, styled} from "frontity";
import tw from "tailwind.macro";
import Link from "@frontity/components/link";
import ProductThumbnail from "./product-thumbnail";
import { useTransitions, animated } from "react-spring"

const Product = ({state, item, libraries}) => {
    console.log(item.link);
    const Html2React = libraries.html2react.Component;

    const expandGridItem = (e) => {
        const target = e.target.closest(".rks-product");

        const items = document.querySelectorAll('.rks-product--expanded');

        items.forEach(function(i, el){

            i.classList.remove('rks-product--expanded');
            
        }) 

        target.classList.toggle('rks-product--expanded');

    }
    return(

        <ProductContainer className='rks-product grid-item card' data-id={item.id} onClick={expandGridItem} >
            <Container className='rks-product__container'>
                <ProductThumbnail className='rks-product__thumbnail'id={item.featured_media}/>
                <ProductInfo>
                    <Title><Link className='cpLink' link={item.link}>{item.title.rendered}</Link></Title>
                    <Price><Html2React html={item._price_html}></Html2React></Price>
                </ProductInfo>
            </Container>
        </ProductContainer>        
    )
}
// const grid = document.querySelector('.css-myrz2d-Grid')

//  animateCSSGrid.wrapGrid(grid, { easing : 'backOut', stagger: 10, duration: 400 });


const Container = styled('div')``;

const ProductContainer = styled('div')``;

const ProductInfo = styled('div')``;

const Price = styled('div')``;

const Title = styled('h3')``;

export default connect(Product);
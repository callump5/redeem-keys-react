import { connect, styled } from "frontity";
import tw from "tailwind.macro";
import Image from "@frontity/components/image";

const ProductThumbnail = ({state, id}) => {

    const media = state.source.attachment[id].media_details.sizes.full;

    if (!media) return null;
    const width = media.width;
    const height = media.height;
    const url = media.source_url;
    // console.log(width, height);

    const Thumbanil = styled('div')`
        background-image: url(${url});
        height: 300px;
        width: 100%;
        ${tw` w-full object-fill  rounded-sm bg-cover bg-no-repeat bg-center`}
    `


    
    // const srcset =
    // Object.values(media.media_details.sizes)
    //     // Get the url and width of each size.
    //     .map((item) => [item.source_url, item.width])
    //     // Recude them to a string with the format required by `srcset`.
    //     .reduce(
    //     (final, current, index, array) =>
    //         final.concat(
    //         `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
    //         ),
    //     ""
    //     ) || null;

    return (
        <Container>
           <Thumbanil></Thumbanil>
        </Container>
    );

}

const Container = styled("div")`

`;


export default connect(ProductThumbnail);
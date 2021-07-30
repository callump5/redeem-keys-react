import {connect, styled} from "frontity";
import Product from "./product";

const List = ({state}) => {
    const data = state.source.get(state.router.link);
    const source = state.source;
    console.log(data.items, source);
    return (

        <Grid>
            {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Product key={item.id} item={item} />;
            })}
        </Grid>

    )
}

const Grid = styled("div")`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export default connect(List);
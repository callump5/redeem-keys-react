import {connect, styled, actions} from "frontity";
import Product from "./product";

const List = ({state, actions}) => {
    const data = state.source.get(state.router.link );
    
    const source = state.source;

    return (

        <Grid>
            {data.items.map(({ type, id }) => {
                
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Product key={item.id} item={item} data-id={item.id}  />;
            })}
        </Grid>

    )
}

const Grid = styled("div")`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

export default connect(List);
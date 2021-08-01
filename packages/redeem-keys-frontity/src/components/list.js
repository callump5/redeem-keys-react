import {connect, styled, actions, Head} from "frontity";
import Product from "./product";


const List = ({state, actions}) => {
    const data = state.source.get(state.router.link );
    
    const source = state.source;

    return (


        <Grid>
            {data.items.map(({ type, id }) => {
                
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Product key={item.id} item={item}  />;
            })}
        </Grid>




    )
}

const Grid = styled("div")`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 16px;
    grid-auto-flow: dense;
    padding: 20px

    .grid-item {
        transition: all .3s;
        grid-column: span 1;
        grid-row: span 1;
    }
`;
    

    
    // .card--expanded {
    //     grid-column: span 4;
    //     grid-row: span 2 ;
    // }


export default connect(List);
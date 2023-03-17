import Item from "./Item";

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item brand="Ferrari" launch={1995} />
                <Item brand="Fiat" launch={1998} />
                <Item />
            </ul>
        </>
    )
}

export default List
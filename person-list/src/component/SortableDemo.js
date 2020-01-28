import React from "react";
import Sortable from 'react-sortablejs';


class SortableDemo extends React.Component {

    state = {
        items: ['Apple', 'Banana', 'Cherry', 'Guava', 'Peach', 'Strawberry']
    };

    render() {
        const items = this.state.items.map((val, i) => (<li key={i} data-id={val}>{val}</li>));

        return (
            <div>
                <Sortable
                    tag="ul" // Defaults to "div"
                    onChange={(order, sortable, evt) => {
                        this.setState({ items: order });
                    }}
                >
                    {items}
                </Sortable>
            </div>
        );
    }
}

export default SortableDemo;

import { useContext } from "react";
import { ProductContext } from './ProductContext.jsx'
import Card from "./Card.jsx";
import { useOutletContext } from "react-router";
import CenterMessage from "./CenterMessage.jsx";

export default function Shop() {

    const [loading, data, error] = useContext(ProductContext);
    const { handleClick, count } = useOutletContext()
    console.log(data)

    if (error) {
        const message = 'Unexpected error!';
        return (
            <CenterMessage message={message}></CenterMessage>
        )
    }

    if (loading) {
        const message = 'Loading...';
        return (
            <CenterMessage message={message}></CenterMessage>
        )
    }

    return (
        <ul className="flex flex-wrap place-content-center gap-3 py-10 m-auto">
            {data.map(product => {
                if (product.id) {
                    return (
                        <Card
                            title={product.title}
                            image={product.images[0]}
                            price={product.price}
                            handleClick={handleClick}
                            count={count}
                            id={product.id}
                            key={product.id}
                        />
                    )
                }
            })}
        </ul>
    )
}
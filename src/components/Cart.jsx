import { useContext } from "react";
import { ProductContext } from './ProductContext.jsx'
import Card from "./Card.jsx";
import { useOutletContext } from "react-router";
import CenterMessage from "./CenterMessage.jsx";

export default function Cart() {

    const [loading, data, error] = useContext(ProductContext);
    const { handleClick, count } = useOutletContext()

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

    const productList = data.filter(product => {
        const current = (count.get(product.id) || 0)
        return current > 0;
    })
    
    if (productList.length === 0) {
        const message = "Your basket is empty"
        return (
            <CenterMessage message={message}></CenterMessage>
        )
    }
    
    const orderTotal = productList.reduce((acc, curr) => acc + curr.price * count.get(curr.id), 0);

    return (
        <div className="flex place-content-between">
            <ul className="flex flex-wrap gap-3 p-10 ">
                {productList.map(product =>  {
                    return (
                        <li>
                            <Card
                                title={product.title}
                                image={product.images[0]}
                                price={product.price}
                                handleClick={handleClick}
                                count={count}
                                id={product.id}
                                key={product.id}
                            />
                        </li>
                    )
                })}
            </ul>
            <div className="border p-3 w-fit h-fit flex flex-col rounded-xl m-10 bg-white">
                <div>
                    <h1 className="font-bold pb-4">ORDER SUMMARY</h1>
                    <ul className="pb-2">
                        {productList.map(product =>
                            <li>
                                <p className="text-gray-600">{count.get(product.id)} x {product.title}</p>
                            </li>
                        )}
                    </ul>
                    <hr />
                </div>
                <div className="flex justify-between pt-4">
                    <p>Order total:</p>
                    <p>${orderTotal}.00</p>
                </div>
            </div>
        </div>
    )
}
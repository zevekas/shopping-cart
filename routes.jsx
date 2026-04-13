import Cart from "./src/components/Cart";
import Shop from "./src/components/Shop";
import Home from "./src/components/Home";
import App from "./src/App";


export default [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }    
]
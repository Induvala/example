import React from "react";
import ProductCard from "./ProductList";

const products = [
    {
        id: 1,
        image: "https://picsum.photos/200/300",
        colors: ["#f5ba0a", "#574f19", "#4c4c4c", "#ffffff", "#f5ba0a", "#f5ba0a", "#f5ba0a", "#f5ba0a"],
        title: "Product name is displayed. Product name is displayed...",
        subtitle: "{Brand} Group Code - Color Name",
        price: "$000,000"
    },
    {
        id: 2,
        image: "https://picsum.photos/200/300",
        colors: ["#f5ba0a", "#574f19", "#4c4c4c", "#ffffff", "#f5ba0a", "#f5ba0a", "#f5ba0a", "#f5ba0a"],
        title: "Product name is displayed. Product name is displayed...",
        subtitle: "{Brand} Group Code - Color Name",
        price: "$000,000"
    }, {
        id: 3,
        image: "https://picsum.photos/200/300",
        colors: ["#f5ba0a", "#574f19", "#4c4c4c", "#ffffff", "#f5ba0a", "#f5ba0a", "#f5ba0a", "#f5ba0a"],
        title: "Product name is displayed. Product name is displayed...",
        subtitle: "{Brand} Group Code - Color Name",
        price: "$000,000"
    }, {
        id: 4,
        image: "https://picsum.photos/200/300",
        colors: ["#f5ba0a", "#574f19", "#4c4c4c", "#ffffff", "#f5ba0a", "#f5ba0a", "#f5ba0a", "#f5ba0a"],
        title: "Product name is displayed. Product name is displayed...",
        subtitle: "{Brand} Group Code - Color Name",
        price: "$000,000"
    },
    // you can duplicate the above object or add new products
    // here I added 4 copies for demo:
];

const ProductSection: React.FC = () => {
    return (
        <section className="max-w-7xl mx-auto py-10 px-4 text-center">
            <h2 className="text-lg font-semibold">

                Product display title goes here.  </h2>

            <p className="text-sm text-gray-500 mb-8">
                Subtitle text goes here if needed.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard
                        image={product.image}
                        colors={product.colors}
                        title={product.title}
                        subtitle={product.subtitle}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductSection;

import React from 'react'

export default function Products() {
    const products = [
        { id: 1, title: 'Product 1', image: 'url-to-image-1' },
        { id: 2, title: 'Product 2', image: 'url-to-image-2' },
        { id: 3, title: 'Product 3', image: 'url-to-image-3' },
        // Add more products as needed
    ];
    
    const ProductCard = ({ title, image }) => {
        return (
            <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
            </div>
        );
    };
    return (
        <section id='products' className="p-6 pt-28 px-20">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <div className="grid grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} title={product.title} image={product.image} />
                ))}
            </div>
        </section>
    );
  
}

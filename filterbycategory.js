function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Headphones", category: "Electronics" },
    { name: "Jeans", category: "Clothing" },
    { name: "Phone", category: "Electronics" }
];

const filterProductsByCategory = filterByCategory(products);

const electronicsProducts = filterProductsByCategory("Electronics");
console.log(electronicsProducts);
// Output: [{ name: "Laptop", category: "Electronics" }, { name: "Headphones", category: "Electronics" }, { name: "Phone", category: "Electronics" }]

const clothingProducts = filterProductsByCategory("Clothing");
console.log(clothingProducts);
// Output: [{ name: "Shirt", category: "Clothing" }, { name: "Jeans", category: "Clothing" }]
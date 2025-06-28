const ProductCard = ({ image, title }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <span className="product-title">{title}</span>
        </div>
    )
}

export default ProductCard;
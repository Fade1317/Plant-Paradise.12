import PlantCard from '../components/PlantCard';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, image: '/images/aloe.jpg', category: 'Succulents' },
  { id: 2, name: 'Snake Plant', price: 15, image: '/images/snake.jpg', category: 'Indoor' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 30, image: '/images/fig.jpg', category: 'Trees' },
  // Add 3 more plants!
];

function ProductListingPage() {
  return (
    <div className="products">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default ProductListingPage;

import CategoriesBox from './CategoriesBox';
import ClothingPic from '../imgs/clothing-pic.jpg';
import JewelryPic from '../imgs/jewelry-pic.jpg';
import AccessoriesPic from '../imgs/accessories-pic.jpg';
import ElectronicsPic from '../imgs/electronics-pic.jpg';


import './Categories.css';

export default function Categories() {
    const categoryList = [
        {
            'id': 1,
            'title': 'Accessories',
            'img': { AccessoriesPic }
        },
        {
            'id': 2,
            'title': 'Clothing',
            'img': { ClothingPic }
        },
        {
            'id': 3,
            'title': 'Electronics',
            'img': { ElectronicsPic }
        }
    ];

    return (
        <div className="categories">
            <h2 className="categories__header">Categories</h2>
            <div className="categories__boxes">
                {categoryList.map(category => (
                    <CategoriesBox id={category.id} title={category.title} />
                ))}
            </div>
        </div >
    )
}
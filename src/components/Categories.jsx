import CategoriesBox from './CategoriesBox';
import ClothingPic from '../imgs/clothing-pic.jpg';
import JewelryPic from '../imgs/jewelry-pic.jpg';
import AccessoriesPic from '../imgs/accessories-pic.jpg';


import './Categories.css';

export default function Categories() {
    const categoryList = [
        {
            'id': 1,
            'title': 'Clothing',
            'img': { ClothingPic }
        },
        {
            'id': 2,
            'title': 'Jewelry',
            'img': { JewelryPic }
        },
        {
            'id': 3,
            'title': 'Accessories',
            'img': { AccessoriesPic }
        }
    ];

    return (
        <div className="categories">
            {categoryList.map(category => (
                <CategoriesBox key={category.id} title={category.title} img={category.img} />
            ))}
        </div >
    )
}
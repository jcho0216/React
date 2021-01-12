import StyledCategory from './StyledCategory';
import CategoriesBlock from './CategoriesBlock';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'buisiness',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    }
]

const Categories = ({ onSelect, category}) => {
return (
    <CategoriesBlock>
        {categories.map(c => (
            <StyledCategory 
            key={c.name}
            active={category===c.name}
            onClick={() => onSelect(c.name)}
            >{c.text}</StyledCategory>
        ))}
    </CategoriesBlock>
);
};

export default Categories;
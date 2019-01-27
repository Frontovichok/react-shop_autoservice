import React from 'react';
import { Dropdown} from 'semantic-ui-react';

const options = [
    { text: 'По алфавиту', value: 'alphabet' },
    { text: 'Популярные', value: 'popular' },
    { text: 'Новинки', value: 'new' },
    { text: 'Сначала дешевые', value: 'price_low' },
    { text: 'Сначала дорогие', value: 'price_high' },
    { text: 'Высокий рейтинг', value: 'rating' },
];

const SortBooks = ({ setSorting, sortBy }) => {
    const handleChange = (e, { value }) => {
        setSorting(value);
    };
    return (
        <Dropdown
            options={options}
            placeholder="Сортировать по"
            selection
            value={sortBy}
            onChange={handleChange}
        />
    );
};
export default SortBooks;

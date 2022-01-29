import React from 'react';
import classNames from 'classnames';

interface ListBoxProps<T> {
  items: T[];
  selectedItem?: number;
  setSelectedItem: (index: number, item: T) => void;
  renderItemLabel: (item: T) => string | React.ReactNode;
  filter?: string;
  filterProperty: keyof T;
}

export default function ListBox<T>({ items, setSelectedItem, renderItemLabel, selectedItem, filter, filterProperty }: ListBoxProps<T>) {
  const visibleItems = React.useMemo(() => {
    const filterByPropertyStartsWith = (item: T) => {
      if (filter && filter !== '') {
       return String(item[filterProperty])
        .toLowerCase()
        .startsWith(filter);
      }
      return true;
    };
    return items.filter(filterByPropertyStartsWith);
  }, [filter, items]);

  const ListItems = () => (
    <ul>
      {items.map((item, index) => visibleItems.includes(item) ? (
         <li
          key={index}
          onClick={() => setSelectedItem(index, item)}
          className={classNames({
            selected: (selectedItem !== undefined) && (selectedItem === index)
          })}>
          {renderItemLabel(item)}
        </li>
      ) : null )}
    </ul>
  );

  const EmptyList = () => (
    <ul>
      <li className="empty" key="empty">
        No Items Found
      </li>
    </ul>
  );

  return (
    <div id="List" className="mr-4">
      {visibleItems.length > 0 ? <ListItems /> : <EmptyList />}
    </div>
  );
}

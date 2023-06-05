import { useState, useMemo } from "react";

export const useSort = (items = []) => {
    const [isDescSort, setDescSort] = useState(false);
    const sortedItems = useMemo(()=>{
        const sortableItems = [...items];
        sortableItems.sort((a,b) => {
            if (+a.price < +b.price) return isDescSort ? 1 : -1;
            if (+a.price > +b.price) return isDescSort ? -1 : 1;
            return 0;
        });
        return sortableItems;
    },[isDescSort, items]);

    return {
        isDescSort,
        setDescSort,
        sortedItems
    };
}
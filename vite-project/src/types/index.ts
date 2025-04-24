/** Описание одной вещи */
export interface Item {
    id: number
    name: string
}

/** Функция переключения вещи */
export type ToggleItemFn = (item: Item) => void

/** Пропсы для компонента ItemList.vue */
export interface ItemListProps {
    items: Item[]
    selectedItems: Item[]
    onToggle: ToggleItemFn
}

/** Пропсы для компонента SelectionInfo.vue */
export interface SelectionInfoProps {
    selectedCount: number
    max: number
}

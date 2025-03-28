export interface IShopItems {
    name: string
    price: string
    url: string
}

export interface IShopCardComponent extends IShopItems {
    onClickHandler: (name: string, price: string, url: string) => void
}

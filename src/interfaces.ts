export { };


//Interface för product-info
export interface IProducts {

    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: {
        thumbnail: string,
        large: string
    },
    stock_status: string,
    stock_quantity: number
}




// tänkte här att man kunde göra en extended Interface för att få med 
// IOrder["order_items"] och senare ta ut dem när man order?
export interface IProductsExt {

    id: number,
    name: string,
    description: string,
    price: number,
    on_sale: boolean,
    images: {
        thumbnail: string,
        large: string
    },
    stock_status: string,
    stock_quantity: number,
    order_items:
    {
        product_id: number,
        qty: number | undefined,
        item_price: number,
        item_total: number | undefined
    },



}

/*
export interface IProducts {
    status: string, //"success"
    data: [
        {
            id: number,
            name: string,
            description: string,
            price: number,
            on_sale: boolean,
            images: {
                thumbnail: string,
                large: string
            },
            stock_status: string,
            stock_quantity: null | number


        }
    ]
}
*/
//för POST kundinfo + orderinfo

/*
export interface IOrder {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    order_total: number,
    order_items: [
        {
            product_id: number,
            qty: number,
            item_price: number,
            item_total: number
        },
    ]
}*/
/*
export interface IOrder {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    order_total: number,
    order_items: [
        {
            product_id: number,
            qty: number,
            item_price: number,
            item_total: number
        },
    ]
}*/
/*
export interface IOrder {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    order_total: number,
    order_items: [
        {
            product_id: number,
            qty: number,
            item_price: number,
            item_total: number
        }[]
    ]
}*/
export interface IOrder {
    customer_first_name: string,
    customer_last_name: string,
    customer_address: string,
    customer_postcode: string,
    customer_city: string,
    customer_email: string,
    order_total: number,
    order_items:
    {
        product_id: number,
        qty: number,
        item_price: number,
        item_total: number
    }[]

}




export interface IResponse {
    status: string,
    message?: string,
    data: {
        order_items?: any;
        id: number,
        order_date: string,
        customer_first_name: string,
        customer_last_name: string,
        customer_address: string,
        customer_postcode: string,
        customer_city: string,
        customer_email: string,
        customer_phone: null,
        order_total: number,
        created_at: string,
        updated_at: string,
        items: [
            {
                id: number,
                order_id: number,
                qty: number,
                item_price: number,
                item_total: number,
            }
        ]

    }
}

export interface IError {
    status: string,
    message: string,
    data: {
        order_items: [
            string
        ]
    }
}



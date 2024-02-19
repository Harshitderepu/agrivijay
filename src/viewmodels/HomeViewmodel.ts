import { ProductCardModel } from "@/models";

export class HomeViewModel {
    productItemCard: ProductCardModel[] = [
        {
            "imageSrc": "/Home/Shop/image_1.png",
            "productName": "ELECTRIC",
            "currentPrice": "$13.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Shop/image_2.png",
            "productName": "SOLAR",
            "currentPrice": "$14.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Fresh" // Tag not provided in the HTML
        },
        {
            "imageSrc": "/Home/Shop/image_3.png",
            "productName": "AGTECH",
            "currentPrice": "$15.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Millets"
        },
        {
            "imageSrc": "/Home/Shop/image_4.png",
            "productName": "BIOGAS",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Shop/image_5.png",
            "productName": "ORGANIC",
            "currentPrice": "$11.00",
            "originalPrice": "$20.00",
            "rating": 5, // Rating not provided in the HTML
            "categoryTag": "Health"
        },
       
    ];
    offerData: ProductCardModel[] = [
        {
            "imageSrc": "/Home/Offer/image_1.png",
            "productName": "Mung Bean",
            "currentPrice": "$11.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_2.png",
            "productName": "Brown Hazelnut",
            "currentPrice": "$12.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_3.png",
            "productName": "Onion",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
        {
            "imageSrc": "/Home/Offer/image_4.png",
            "productName": "Cabbage",
            "currentPrice": "$17.00",
            "originalPrice": "$20.00",
            "rating": 5,
            "categoryTag": "Vegetable"
        },
    ];
    galleryData = [
        {
            name: "Organic Juice",
            imageSrc: "/Home/Gallery/image_1.jpg"
        },
        {
            name: "Organic Food",
            imageSrc: "/Home/Gallery/image_2.jpg"
        },
        {
            name: "Nuts Cookis",
            imageSrc: "/Home/Gallery/image_3.jpg"
        }
    ]

    constructor() {

    }
    chunkArray(array: any[], size: number): any[][] {
        const chunkedArr = [];
        let index = 0;
        while (index < array.length) {
            chunkedArr.push(array.slice(index, size + index));
            index += size;
        }
        return chunkedArr;
    }

}
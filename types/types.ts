type imageType = {
    src: string;
    alt: string;
};

export type objectDataType = {
    [key: string]: {
        title: string;
        price: string;
        images: imageType[];
        details: string;
    };
};

export type cartItemDataType = {
    id: string;
    price: number;
    size: string;
    image: imageType;
};
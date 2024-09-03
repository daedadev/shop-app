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

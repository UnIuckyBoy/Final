import React, { useState } from "react";

const Productos = () => {

    const images = ["buzo.jpg", "pantalon.jpg", "remera.jpg"]
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const selectNewImage = (index, images, next = true) => {
        const condition = next ? selectedIndex < images.length : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition
        setSelectedImage(images[nextIndex]);
        selectedIndex(nextIndex);
    };

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    }
    return (
        <>
            <img src={require(`../../public/images/dropHisoka/${selectedImage}`)} alt="Hisoka" />
        </>
    );
}

export default Productos;
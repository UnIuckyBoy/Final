import React from "react";
import images from '../exports/images1'
import '../styles/components/pages/Novedades.css'
import { motion } from "framer-motion";

const Novedades = () => {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: -963}}>
                {images.map(image => (
                    <motion.div className="item">
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
export default Novedades;
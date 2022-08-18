import React from "react";
import images from '../exports/images1'
import '../styles/components/pages/Novedades.css'
import { motion } from "framer-motion";

const Nosotros = () => {
    return (
        <>
        <h1>
            Drops mas recientes
        </h1>
        <motion.div className="slider-container">
            <motion.div className="slider" drag='x' dragConstraints={{right: 0, left: -1000}}>
                {images.map(image => (
                    <motion.div className="item">
                        <img src={image} alt="" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </>
    );
}
export default Nosotros;
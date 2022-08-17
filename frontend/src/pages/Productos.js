import React from "react";
import images2 from '../exports/images2'
import images3 from '../exports/images3'
import images4 from '../exports/images4'
import '../styles/components/pages/Productos.css'
import { motion } from "framer-motion";

const Productos = () => {
    return (
        <>
        <div className="galeria1">
            <h1>
                Drop Hisoka
            </h1>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{ right: 0, left: -1210 }}>
                    {images2.map(image => (
                        <motion.div className="item">
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        <div className="galeria2">
            <h1>
                Drop Jujutsu
            </h1>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{ right: 0, left: -1210 }}>
                    {images3.map(image => (
                        <motion.div className="item">
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        <div className="galeria3">
            <h1>
                Drop Sasuke
            </h1>
            <motion.div className="slider-container">
                <motion.div className="slider" drag='x' dragConstraints={{ right: 100, left: 0 }}>
                    {images4.map(image => (
                        <motion.div className="item">
                            <img src={image} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        </>
    );
}

export default Productos;
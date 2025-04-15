import { Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { forwardRef } from "react";

const MotionIcon = motion(
    forwardRef((props, ref) => <Icon ref={ref} {...props} />)
);

export const FavoriteHeartButton = ({ isFavorite, setFavorites, index }) => {
    const controls = useAnimation();

    const toggleFavorite = (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleClick = (e) => {
        e.stopPropagation();
        controls.start({ scale: [1, 1.5, 1], transition: { duration: 0.3 } });
        toggleFavorite(index);
    };

    return (
        <MotionIcon
            as={isFavorite ? AiFillHeart : AiOutlineHeart}
            fontSize="30px"
            color={isFavorite ? "red.400" : "gray.400"}
            onClick={handleClick}
            animate={controls}
            cursor="pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            _focus={{ outline: "none" }}
        />
    );
};

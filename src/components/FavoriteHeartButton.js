import { Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { forwardRef } from "react";

export const FavoriteHeartButton = ({ isFavorite, setFavorites, index }) => {
    const controls = useAnimation();

    // お気に入りボタンのアニメーション設定
    const MotionIcon = motion(
        forwardRef((props, ref) => <Icon ref={ref} {...props} />)
    );

    // お気に入りボタンを押したときの動き
    const toggleFavorite = (index) => {
        setFavorites((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const handleClick = (e) => {
        e.stopPropagation();
        controls.start({ scale: [1, 2, 1], transition: { duration: 0.3 } });
        toggleFavorite(index);
    };

    return (
        <MotionIcon
            as={isFavorite ? AiFillHeart : AiOutlineHeart}
            fontSize="largetitle"
            color={isFavorite ? "favorite.true" : "favorite.false"}
            onClick={handleClick}
            animate={controls}
            cursor="pointer"
            whileHover={{ scale: 1.2 }}
            _focus={{ outline: "none" }}
        />
    );
};

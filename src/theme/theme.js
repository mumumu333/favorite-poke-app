import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            // ページ全体の基本スタイル
            body: {
                bg: "gray.100",
                color: "gray.700",
                fontSize: "md"
            },
        },
    },
    fonts: {
        heading: `'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', sans-serif`,
        body: `'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', sans-serif`,
    },
    colors: {
        // ボーダーの色
        border: {
            default: "#d4d4d8", // gray.300

        },
        // お気に入りボタン
        favorite: {
            true: "#f87171", // red.400
            false: "#d4d4d8" // gray.300
        }
    },

    fontSizes: {
        largetitle: "30px", // 3xl
        midiumtitle: "20px", // xl
        smalltitle: "18px" // lg
    },
});
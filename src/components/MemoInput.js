import { Textarea, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const MemoInput = ({ index, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <>
            <Text fontSize="sm" mt="20px" mb="10px">メモ</Text>
            <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => onChange(inputValue)}
            />
        </>
    )
}

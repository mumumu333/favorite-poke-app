import { Textarea, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const MemoInput = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <>
            <Text fontWeight="bold" mt="20px" mb="10px">メモ</Text>
            <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => onChange(inputValue)}
                borderColor="border.default"
            />
        </>
    )
}

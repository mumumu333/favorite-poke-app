import axios from "axios";


const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`,
});

const fetchApiData = async (endpoint, num) => {
    try {
        const res = await api.get(`${endpoint}/${num}`);
        return res.data;
    } catch (err) {
        console.error("API request failed: ", err);
    }
}

export const fetchAllData = async (num, setData) => {
    const [species, details, skill] = await Promise.all([
        fetchApiData("pokemon-species", num),
        fetchApiData("pokemon", num),
        fetchApiData("move", num),
    ])

    if (species && details && skill) {
        setData((prev) => {
            const newData = [...prev];
            const name = species.names.find((n) => n.language.name === "ja")?.name ?? "不明";
            const genus = species.genera.find((n) => n.language.name === "ja")?.genus ?? "不明";
            const skillName = skill.names.find((n) => n.language.name === "ja")?.name ?? "不明";
            const skillDetail =
                skill.flavor_text_entries.find((n) => n.language.name === "ja")?.flavor_text ?? "不明";

            newData[num - 1] = {
                name,
                genus,
                height: details.height * 10,
                weight: details.weight / 10,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`,
                skill: skillName,
                skilldetail: skillDetail,
                accuracy: skill.accuracy ?? "不明",
                power: skill.power ?? "不明",
                pp: skill.pp ?? "不明",
            };

            return newData;
        });
    }
};

import axios from "axios";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// APIでポケモンデータを取得
const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`,
});

const fetchApiData = async (endpoint, num) => {
    try {
        const res = await api.get(`${endpoint}/${num}`);
        return res.data;
    } catch (err) {
        console.error("API request failed: ", err.response ? err.response.data : err.request || err.message);
    }
}

export const fetchAllData = async (start, end, setData) => {
    // 一度に処理するリクエスト数
    const batchSize = 10;
    const batchCount = Math.ceil((end - start + 1) / batchSize);

    for (let batch = 0; batch < batchCount; batch++) {
        const batchStart = start + batch * batchSize;
        const batchEnd = Math.min(batchStart + batchSize - 1, end);

        // バッチでリクエストを非同期で送る
        const requests = [];
        for (let i = batchStart; i <= batchEnd; i++) {
            requests.push(
                Promise.all([
                    fetchApiData("pokemon-species", i),
                    fetchApiData("pokemon", i),
                    fetchApiData("move", i),
                ])
            );
        }

        // 全てのリクエストが完了するのを待つ
        const results = await Promise.all(requests);

        // 各ポケモンのデータを処理
        results.forEach(([species, details, skill], index) => {
            if (species && details && skill) {
                setData((prev) => {
                    const newData = [...prev];
                    const name = species.names.find((n) => n.language.name === "ja")?.name ?? "不明";
                    const genus = species.genera.find((n) => n.language.name === "ja")?.genus ?? "不明";
                    const skillName = skill.names.find((n) => n.language.name === "ja")?.name ?? "不明";
                    const skillDetail =
                        skill.flavor_text_entries.find((n) => n.language.name === "ja")?.flavor_text ?? "不明";

                    // インデックスを利用してデータを更新
                    newData[batchStart + index - 1] = {
                        name,
                        genus,
                        height: details.height * 10,
                        weight: details.weight / 10,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${batchStart + index}.png`,
                        skill: skillName,
                        skilldetail: skillDetail,
                        accuracy: skill.accuracy ?? "不明",
                        power: skill.power ?? "不明",
                        pp: skill.pp ?? "不明",
                    };

                    return newData;
                });
            }
        });

        // 200ms の遅延を加える
        await delay(200);
    }
};
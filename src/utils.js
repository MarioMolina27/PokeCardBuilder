export function getHexColor(type) {
    type = type.toLowerCase();

    switch (type) {
        case "normal":
            return "#E7E0E0";
        case "water":
            return "#65b9e3";
        case "fire":
            return "#fd7d24";
        case "grass":
            return "#78c850";
        case "electric":
            return "#f7d02c";
        case "fighting":
            return "#d56723";
        case "psychic":
            return "#A755BC";
        case "steel":
            return "#bdc7c8";
        case "dragon":
            return "#cba528";
        case "dark":
            return "#005761";
        case "fairy":
            return "#c93f7c";
        default:
            return "#000000";
    }
}

export function countOccurrences(array, word) {
    const count = array.reduce((accumulator, element) => {
        if (element === word) {
            return accumulator + 1;
        }
        return accumulator;
    }, 0);

    return count;
}

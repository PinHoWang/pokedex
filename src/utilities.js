
export const mapPokemonIdToImageFilename = (id) => {
    return id.toString().padStart(3, '0').concat('.png');
};
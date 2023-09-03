export const favoriteActions = Object.freeze({
    ADD : 'FAV_EKLE',
    REMOVE : 'FAV_CIKAR',
    RESET : 'FAV_RESET'
});

export const addFavorite = (movie) => {
    return {
        type: favoriteActions.ADD,
        payload: movie
    }
};

export const removeFavorite = (ID) => {
    return {
        type: favoriteActions.REMOVE,
        payload: ID
    }
};

export const resetFavorite = () => {
    return {
        type: favoriteActions.RESET
    }
};
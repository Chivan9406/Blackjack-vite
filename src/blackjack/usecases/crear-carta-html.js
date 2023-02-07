/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} Elemento HTML
 */
export const crearCartaHtml = (carta) => {
    if (!carta)
        throw new Error('La carta es obligatoria')

    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')

    return imgCarta
}
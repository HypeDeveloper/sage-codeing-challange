export function getVariation(variations, selected, defaultIndex) {
    if(!variations) return

    let selectedVariation = null

    variations.forEach(element => {
        if (element.name === selected) {
            console.log(element);
            selectedVariation = element
        }
    });
    if(!selectedVariation) selectedVariation = variations[defaultIndex];
    return selectedVariation
}


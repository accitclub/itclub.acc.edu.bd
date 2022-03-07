export const yPresentMotion = (delay = 0, initial, whileInView) => {
    return {
        initial:{opacity: 0, y: 25, ...initial},
        whileInView:{opacity: 1, y: 0, ...whileInView},
        transition:{duration: 0.4, delay: delay},
        viewport:{once: true},
    }
}

export const xLeftPresentMotion = (delay = 0, initial, whileInView) => {
    return {
        initial:{opacity: 0, x: -75, ...initial},
        whileInView:{opacity: 1, x: 0, ...whileInView},
        transition:{duration: 0.4, delay: delay},
        viewport:{once: true},
    }
}


export const xRightPresentMotion = (delay = 0, initial, whileInView) => {
    return {
        initial:{opacity: 0, x: 75, ...initial},
        whileInView:{opacity: 1, x: 0, ...whileInView},
        transition:{duration: 0.4, delay: delay},
        viewport:{once: true},
    }
}
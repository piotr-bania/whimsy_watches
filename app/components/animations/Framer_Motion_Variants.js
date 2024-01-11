export const logo_variant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" }
    }
}

export const nav_links_variant = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.5, duration: 1.0, ease: "easeOut" }
    })
}

export const title_variant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
    opacity: 1,
    x: 0,
    transition: {
        delay: 0.8,
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1]
    }
    }
}

export const subtext_variant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 2.0, duration: 1.5, ease: "easeOut" }
    }
}

export const cta_variant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 2.5, duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
    }
}

export const image_variant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 1.0 + i * 0.3, duration: 1.8, ease: "easeOut" }
    })
}

export const top_variant = {
    hidden: { opacity: 0, y: -10 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 3.0, duration: 1.0, ease: "easeOut" }
    }
}

export const bottom_variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 3.2, duration: 1.0, ease: "easeOut" }
    }
}

export const loader_variant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
    scale: [0.8, 1.1, 0.9, 1, 0.95, 1.05, 1],
    opacity: 1,
    transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1],
        repeat: 3,
        repeatType: "loop"
        }
    }
}
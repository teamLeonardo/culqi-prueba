
export const utils = {
    isToken: !!import.meta.env.VITE_TOKEN,
    formatPEN: (number: number) => new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(
        number
    ),
}
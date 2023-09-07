

require("./ui.js")
async function main() {
    const foo = await import('./ui.js')

    loadToTableVue([], 12333)
}
main()
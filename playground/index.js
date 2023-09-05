const esbuild = require('esbuild');
const plugin = require('esbuild-plugin-copy')
console.log(plugin, 'plugin');

;(async function () {
    const r = await esbuild.build({
        entryPoints: ['src/app.js'],
        bundle: true,
        outfile: "out.js",
        plugins: [plugin.___plugin({})]
    })
    console.log(r)
})()
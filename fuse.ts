import { Sparky, FuseBox, TypeScriptHelpers, BabelPlugin } from "fuse-box";


const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'bin/$name.js',
    debug: true,
    plugins: [
        TypeScriptHelpers()
    ]
})

Sparky.task("default", () => {

    fuse
        .bundle('main')
        .instructions(">main.ts")
    // .watch();

    fuse
        .run();
})

Sparky.task("test", () => {

    fuse
        .bundle('main')
        .test("**/**.test.ts", {});

    fuse
        .run();
})

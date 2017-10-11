import { Sparky, FuseBox, CopyPlugin } from "fuse-box";
import * as fs from "fs";


const fuse = FuseBox.init({
    homeDir: 'src',
    output: 'bin/$name.js',
    debug: true,
    plugins: [

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

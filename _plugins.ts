import { Site, Page } from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import svgo from "lume/plugins/svgo.ts";
import transform_images from "lume/plugins/transform_images.ts";


export default function () {
    return (site: Site) => {
        site
            .use(esbuild())
            // .use(favicon())
            .use(inline())
            .use(jsx())
            .use(metas())
            .use(sass())
            .use(postcss())
            .use(svgo())
            .use(transform_images())

            .copy("js")
            .copy("static", ".");
    }
}
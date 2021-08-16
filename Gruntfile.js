module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: "gm",
                    sizes: [
                        { name: "sm", suffix: "_1x", quality: 70, width: 540 },
                        { name: "sm", suffix: "_2x", quality: 70, width: 1080 },
                        { name: "md", suffix: "_1x", quality: 70, width: 960 },
                        { name: "md", suffix: "_2x", quality: 70, width: 1920 },
                        { name: "lg", suffix: "_1x", quality: 70, width: 1140 },
                        { name: "lg", suffix: "_2x", quality: 70, width: 2280 },
                    ],
                },
                files: [
                    {
                        expand: true,
                        src: ["**/*.{jpg,png}"],
                        cwd: "src/",
                        dest: "dest/",
                    },
                ],
            },
        },
        cwebp: {
            dynamic: {
                options: {
                    q: 70,
                },
                files: [
                    {
                        expand: true,
                        cwd: "dest/",
                        src: ["**/*.{jpg,png}"],
                        dest: "dest/",
                    },
                ],
            },
        },
    });
    grunt.loadNpmTasks("grunt-responsive-images");
    grunt.loadNpmTasks("grunt-cwebp");
    grunt.registerTask("default", ["responsive_images", "cwebp"]);
};
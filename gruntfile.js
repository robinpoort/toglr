module.exports = function(grunt) {
    // measures the time each task takes
    require("time-grunt")(grunt);

    // load time-grunt and all grunt plugins found in the package.json
    require("jit-grunt")(grunt);

    // grunt config
    grunt.initConfig({

        // Compile sass files
        sass: {
            options: {
                outputStyle: "expanded"
            },
            dist: {
                files: {
                    "dist/css/toglr.css": "src/scss/toglr.scss"
                }
            }
        },

        // Autoprefixer
        autoprefixer: {
            options: {
                browsers: ["> 3%"]
            },
            files: {
                expand: true,
                flatten: true,
                src: "src/css/*.css",
                dest: "src/css/"
            }
        },

        // CSSmin
        cssmin: {
            options: {
                roundingPrecision: -1,
                sourceMap: false,
                level: 2
            },
            site: {
                files: [{
                    expand: true,
                    cwd: '/src/css',
                    src: ['*.css'],
                    dest: '/src/css'
                }]
            }
        },

        // Browser Sync
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "./index.html"
                    ]
                },
                options: {
                    port: 8645, // TOGL on phone numpad
                    open: true, // Opens site in your default browser, no need to remember the port
                    notify: false,
                    watchTask: true,
                    injectChanges: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

        // Watch files
        watch: {
            css: {
                files: [
                    "src/scss/*.scss",
                    "src/scss/**/*.scss"
                ],
                tasks: ["sass", "cssmin", "autoprefixer"],
                options: {
                    interrupt: true,
                    atBegin: true
                }
            }
        }
    });

    // The dev task will be used during development
    grunt.registerTask("default", [
        "browserSync",
        "watch"
    ]);
};

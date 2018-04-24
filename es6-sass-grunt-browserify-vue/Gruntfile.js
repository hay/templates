function browserifyConf(src, dest, mode) {
    const conf = {
        src,
        dest,
        options : {
            transform : ["babelify"],
            browserifyOptions : {
                debug : mode === 'dev'
            }
        }
    };

    if (mode === 'dev') {
        conf.options.watch = true;
        conf.options.keepAlive = false;
    }

    if (dest.includes('bundle')) {
        conf.options.alias = {
            "vue": `vue/dist/vue.${mode === 'dev' ? 'common' : 'min'}.js`
        };
        conf.options.transform.unshift('vueify');
    };

    return conf;
}

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        clean: {
            before : ['dist/*', '.tmp/'],
            after : ['dist/css/scss', 'dist/js']
        },

        sass: {
            options : {
                style : 'compressed'
            },

            dist : {
                files : {
                    'app/css/style.css' : 'app/css/scss/style.scss'
                }
            }
        },

        autoprefixer : {
            dist : {
                files : {
                    'app/css/style.css' : 'app/css/style.css'
                }
            }
        },

        watch : {
            css : {
                files : 'app/css/scss/*.scss',
                tasks : ['style']
            }
        },

        copy: {
            all: {
                files: [
                    {
                        expand: true,
                        cwd : 'app',
                        src: '**',
                        dest: 'dist'
                    }
                ]
            }
        },

        browserify : {
            bundleSrc : browserifyConf('app/js/app.js', 'app/bundle.js', 'dev'),
            bundleDist : browserifyConf('dist/js/app.js', 'dist/bundle.js', 'prod'),
            polyfillsSrc : browserifyConf('app/js/polyfills.js', 'app/polyfills.js', 'dev'),
            polyfillsDist : browserifyConf('dist/js/polyfills.js', 'dist/polyfills.js', 'prod')
        },

        asset_cachebuster : {
            options : {
                buster : Date.now()
            },

            build : {
                files : {
                    'dist/index.html' : ['dist/index.html']
                }
            }
        },

        uglify : {
            build : {
                files : {
                    'dist/bundle.js' : ['dist/bundle.js'],
                    'dist/polyfills.js' : ['dist/polyfills.js']
                }
            }
        }
    });

    grunt.registerTask('init', [
        'style',
        'browserify:bundleSrc',
        'browserify:polyfillsSrc'
    ]);

    grunt.registerTask('build', [
        'clean:before',
        'copy:all',
        'sass',
        'autoprefixer',
        'browserify:bundleDist',
        'browserify:polyfillsDist',
        'uglify',
        'asset_cachebuster',
        'clean:after'
    ]);

    grunt.registerTask('watch-all', [
        'browserify:bundleSrc',
        'browserify:polyfillsSrc',
        'watch'
    ]);

    grunt.registerTask('style', [
        'sass',
        'autoprefixer'
    ]);

    grunt.registerTask('default', ['build']);
};
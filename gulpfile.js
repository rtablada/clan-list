var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var paths = {
  materialize: './bower_components/Materialize',
};

elixir(function(mix) {
  mix.sass('app.scss', 'public/css/', {includePaths: [`${paths.materialize}/sass`]})
    .copy(`${paths.materialize}/font/**`, 'public/fonts');
});

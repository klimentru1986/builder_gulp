# Gulp builder

## Description

Gulp builder with jade & sass

## Installation

```sh
$ git clone https://github.com/klimentru1986/builder_gulp
$ npm install
$ bower install
```

## Project Structure

```
/progect
|---- package.json
|---- bower.json
|---- gulpfile.js
|---- /gulp
|     |---- gulpplugins.js
|     |---- pipes.js
|     |---- paths.js
|     |---- paths.vendor.js
|     |---- /pipes
|---- /app
|     |---- /jade
|           |---- index.jade
|           ...
|     |---- /sass
|           |---- main.scss
|           ...
|     |---- /js
|           |---- main.js
|           ...
|     |---- /bower
|     |---- /img
|     |---- /fonts
|---- (/dev)
|---- (/dist)
```

## Bower Components Install

After installation plugin you need to write path in gulp/paths.bower.js

## Gulp Tasks

 **Build developer version**

```sh
$ gulp build
```

**Bbuild distributive version**

```sh
$ gulp build --env dist
```

**Watcher**

```sh
$ gulp watch
```

**Local server**

```sh
$ gulp
```

**Cleaner dev**

```sh
$ gulp clean
```

**Cleaner dist**

```sh
$ gulp clean --env dist
```

**Other tasks in gulpfile.js**

## Gulp Plugins

* browser-sync
* gulp-jade
* gulp-sass
* gulp-autoprefixer
* gulp-cssnano
* gulp-uglify
* gulp-modernizr
* gulp.spritesmith
* gulp-imagemin
* gulp-if
* gulp-useref
* gulp-sourcemaps
* gulp-concat
* gulp-plumber
* gulp-filter
* gulp-rimraf
* gulp-size

# frontend-nanodegree-mobile-portfolio
Web site used to optimize performance
Website Performance Optimization portfolio project

The challenge was to optimize this online portfolio, getting the index.html page speed insights to a score over 90 for mobile and desktop.

Second was to optimize the javascript for the pizza.html to get the page to run at 60fps and reduce jank.

## Getting started

Check out the repository.

To inspect the page speed insight on your phone or desktop

$> cd /path/to/your-project-folder $> python -m SimpleHTTPServer 8080

Open a browser and visit localhost:8080

Download and install ngrok to make your local server accesible remotely

$> cd /path/to/your-project-folder $> ngrok 8080 just use the https: link supplied here /dist/index.html

Optimization methods

The first thing I did was to set up a workflow using gulp to resize and compress img, minify css and html, compress javascript and make folders for src and dist files.

Minified and inlined all css.

Minified all html and javascript.

Compress and resize imgs.

In main.js pulled calculations of constants out of loops so they don't calculate every iteration. Changed all occurances of querySelectorAll to faster getElementById of getElementsByClassName. Changed the number off pizzas that genrates on load from 200 to 30.

Set .mover to backface-visability: hidden to reduce repainting time by only painting what is on the screen.

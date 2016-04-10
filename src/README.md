## Website Performance Optimization portfolio project



The challenge was to optimize this online portfolio, getting the index.html page speed insights to
a score over 90 for mobile and desktop.

Second was to optimize the javascript for the pizza.html to get the page to run at 60fps and reduce jank.

 ## Getting started

  1. Check out the repository.

  2. To inspect the  page speed insight on your phone or desktop

  	$> cd /path/to/your-project-folder
    $> python -m SimpleHTTPServer 8080

  3. Open a browser and visit localhost:8080

  4. Download and install ngrok to make your local server accesible remotely

  	$> cd /path/to/your-project-folder
    $> ngrok 8080
  	 just use the https: link supplied here  /dist/index.html

 ## Optimization methods

  1. The first thing I did was to set up a workflow using gulp to resize and compress img, minify   css and html, compress javascript and make folders for src and dist files.

  2. Minified and inlined all css.

  3. Minified all html and javascript.

  4. Compress and resize imgs.

  5. In main.js pulled calculations of constants out of loops so they don't calculate every iteration. Changed all occurances of querySelectorAll to faster getElementById of getElementsByClassName. Changed the number off pizzas that genrates on load from 200 to 30.

  6. Set .mover to backface-visability: hidden to reduce repainting time by only painting what is on the screen.



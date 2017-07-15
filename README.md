## Website Performance Optimization portfolio project

It is required to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible so that it is at least 90 measured with [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/).

Also Optimizations made to pizza.html render with a consistent frame-rate at 60fps when scrolling.This is beside Time to resize pizzas is less than 5 ms using the pizza size slide.
## Results

   * Check optmized speed score through [index.html Page](https://elhaw.github.io/frontend-nanodegree-mobile-portfolio/) using [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)



|      files           |pages speed beore optmization|pages speed After optmization|
| -------------------  |:---------------------------:|  -------------------------- |
| index.html           |            76 / 88          |         95 / 94             |
| project-2048.html    |            83 / 89          |         95 / 97             |
| project-webperf.html |            77 / 68          |         95 / 96             |    
| project-mobile.html  |            75 / 88          |         95 / 97             |  
| pizza.html           |            80 / 91          |         97 / 98             |  



* Check computational efficiency . you can check results through [pizza.htm pagel](https://elhaw.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html) with help of dev tools *console*.  



|     Time parameters             |       Before optmization    |      After optmization  |
| --------------------------------|:---------------------------:|  ---------------------- |
| Time to generate pizzas on load |          45.129 ms          |         35.7ms          |
| Time to generate last 10 frames |          22.871             |         .7ms            |
| Time to resize pizzas           |           302.525           |         .58ms           |    

> **Note:**  Results may differs beacasue of different network speed connection

* All project files sizes 

| All project file sizes | Before optmization (src) | After optmization (dist) |
|  ----------------------|:------------------------ |  ----------------------  |
|     src vs dist        |          2.86 MB         |         739 KB         |
> **Note:**  Size is reduced by approximately 25%.

## Getting Started

###### 1. Clone this repo
```
$ git clone https://github.com/udacity/frontend-nanodegree-mobile-portfolio.git
````
###### 2. install local web server      
* Follow this [link](https://stackoverflow.com/questions/24340450/localhost-on-windows-7). 
* Then download [ngrok](https://ngrok.com/).
* Point to [geting started](https://ngrok.com/docs#getting-started).

###### 3. Gulp installation
First of all, install the dependencies to run this website.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)
#### Part 1: Optimize PageSpeed Insights score for index.html
---
+ Scaled and compressed image files.
+ Reduced the number of background pizzas to 50 from 200.
+ Remove Render-Blocking JavaScript and Css.
+ Remove unsed styles from bootstrap.css using Audit in chrome dev tools.
+ Use `will-change` prperty.
+ Optmize for loop in change position function:
  * Use transfom property instead of left property.
  * Calculation outside for loop.
  * Wrapping the function with `requestAnimationFrame();`

+ Used Gulp to:
  * Minify HTML;
  * Minify CSS ;
  * Minify JS;
#### Part 2: Bringing pizza resize time to under 5 ms (pizza.html)
---
+ Wrapped  `changePizzaSizes` in a `requestAnimationFrame.
+ Refactoring code inside for loop in `changePizzaSizes` function.
+ Scaled down and compressed pizzeria.jpg.
+ Changed `querySelectorAll` to `getElementsById`.


### Used services and build tools
---
+ [Chrome Developer Tools](https://developer.chrome.com/home/devtools-pillar)
+ [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
+ [Commpressing images](http://optimizilla.com/).
+ [Gulp](http://gulpjs.com/).
+ [getElementsByClassName VS querySelectorAll](https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18).
+ [ CSS triggers By Chen](https://www.chenhuijing.com/slides/css-triggers/#/).
+ [Preload Styles and Scripts to Improve Load Times](https://jonbeebe.net/2017/07/preload-styles-and-scripts-to-improve-load-times/).
+ [Online Markdown editor](http://dillinger.io/).
### Optimization Tips and Tricks
+ [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
+ [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
+ [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
+ [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
+ [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")

License
---
Code provided under an **[GNU Lesser General Public License v3.0](https://github.com/elhaw/frontend-nanodegree-mobile-portfolio/blob/master/LICENSE.md)**




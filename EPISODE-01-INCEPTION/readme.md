## EPISODE-01 : INCEPTION ➡️ 

## ASSIGNMENT QUESTIONS WITH ANSWERS :

### 1. What is `Emmet` ?

- `Emmet` is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.

### 2.  Difference between `Library and Framework` ?

- `React (Library)`:

   Collection of Tools: React is a JavaScript library for building user interfaces, especially for single-page applications.

   Your Control: With React, you decide how to structure your application. You call the functions and methods provided by React to create components, manage state, and handle events.

   Example: Using React is like having a set of tools (like hammers and nails) to build parts of your house (user interface) as you see fit. You are free to design the structure and layout.

   `Next.js (Framework)`:

   Structure and Tools: Next.js is a framework built on top of React that provides a structured way to develop web applications. It includes additional features like server-side rendering, static site generation, and routing out of the box.

   `Framework's Control`: With Next.js, the framework provides a defined structure for your application. It handles routing and rendering, and you plug your React components into this structure. The framework controls the flow and dictates certain conventions you need to follow.

   `Example`: Using Next.js is like having a pre-designed house plan (framework) where the main structure is  already determined (routing, rendering). You still build the rooms and decorate (using React components),  but within the guidelines set by Next.js.

   React gives you the flexibility to design your application as you wish, while Next.js offers a structured approach with additional features to streamline development.

### 3. What is `CDN`? Wht do we use it ?

- A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

### 4. Why React is known as React ? 

- `React` is named React because of its ability to react to changes in data. React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.\

### 5. What is `crossorigin` in script tag ?

- The `crossorigin` attribute sets the mode of the request to an `HTTP CORS Request`. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

  Syntax -

``` 
 <script crossorigin="anonymous|use-credentials">

```

### 6. What is the difference between React and ReactDOM ?

 -  React is a JavaScript library for building User Interfaces whereas ReactDOM is also JavaScript library that allows React to interact with the DOM. The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

 ### 7.  What is difference between `react.development.js` and `react.production.js` files via CDN? 

 - Development is the stage of an application before it's made public while production is the term used for the same application when it's made public. Development build is several times (maybe 3-5x) slower than the production build.

 ### 8. What is async and defer ?

 - `Async` - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.


Syntax :

```
<script src="demo_async.js" async></script>
```

`Defer` - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

Syntax :

```
<script src="demo_defer.js" defer></script>
```
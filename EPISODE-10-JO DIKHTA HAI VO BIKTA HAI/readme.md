### EPISODE-1O(JO DIKHTA HAI VO BIKTA HAI)) :

### ASSIGNMENT QUESTIONS WITH ANSWERS (THEORY) :

### 1. Explore all the ways of writing css.?

- 1. This is the most common method where CSS rules are written in separate .css files and linked to HTML files using the <link> tag.

- Example :

```
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Native CSS Example</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>Hello, World!</h1>
    </div>
  </body>
</html>
```

```
/* styles.css */
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
}
h1 {
  color: #333;
  font-size: 2rem;
}
```

- 2. By writing Inline CSS:

- CSS styles can be directly applied to HTML elements using the style attribute.

- Example : 
```
<div
  style="max-width: 960px; margin: 0 auto; padding: 20px; background-color: #f0f0f0;"
>
  <h1 style="color: #333; font-size: 2rem;">Hello, World!</h1>
</div>
```
- Inline CSS is typically used when styling needs to be applied dynamically or when styles are specific to individual elements.





 
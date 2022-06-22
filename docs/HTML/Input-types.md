---
title: Input Types
sidebar_position: 3
---

## Text input

```html
<input type="text" maxlength="30" placeholder="text input" />
```

<input type="text" maxlength="30" placeholder="text input"/>

---

## Textarea

```html
<textarea
  wrap="virtual"
  name="Textarea"
  rows="3"
  cols="20"
  maxlength="100"
  placeholder="Textarea input"
></textarea>
```

<textarea wrap="virtual" name="Textarea" rows="3" cols="20" MAXLENGTH="100" placeholder="Textarea input"></textarea>

---

## Number

```html
<input type="number" placeholder="0-10" />
```

<input type="number" placeholder="0-10"/>

---

## Password

```html
<input type="password" id="pass" name="password" minlength="8" required />
```

<input type="password" id="pass" name="password" minlength="8" required />

---

## Email

```html
<input type="email" />
```

<input type="email"/>

---

## Date

```html
<input type="date" />
```

<input type="date"/>

---

## Time

```html
<input type="time" />
```

<input type="time"/>

---

## Date-Time Local

```html
<input type="datetime-local" />
```

<input type="datetime-local"/>

---

## Month

```html
<input type="month" id="start" name="start" min="2018-03" value="2018-05" />
```

<input type="month" id="start" name="start" min="2018-03" value="2018-05" />

---

## Week

```html
<input
  type="week"
  name="week"
  id="camp-week"
  min="2018-W18"
  max="2018-W26"
  required
/>
```

<input type="week" name="week" id="camp-week"
       min="2018-W18" max="2018-W26" required/>

---

## Checkbox

```html
<div>
  <input type="checkbox" id="one" name="one" checked />
  <label for="one">One</label>
  <input type="checkbox" id="two" name="two" />
  <label for="two">Two</label>
</div>
```

<div>
      <input type="checkbox" id="one" name="one" checked />
      <label for="one">One</label>
      <input type="checkbox" id="two" name="two" />
      <label for="two">Two</label>
</div>

## Radio

```html
<div>
  <input type="radio" id="one" name="radio" value="one" checked />
  <label for="one">One</label>
  <input type="radio" id="two" name="radio" value="two" />
  <label for="two">Two</label>
</div>
```

<div>
  <input type="radio" id="one" name="radio" value="one" checked />
  <label for="one">One</label>
  <input type="radio" id="two" name="radio" value="two" />
  <label for="two">Two</label>
</div>

---

## Color

```html
<div>
  <input type="color" id="one" name="one" value="#e66465" />
  <label for="one">One</label>
</div>

<div>
  <input type="color" id="two" name="two" value="#f6b73c" />
  <label for="two">Two</label>
</div>
```

<div>
  <input type="color" id="one" name="one" value="#e66465" />
  <label for="one">One</label>
</div>

<div>
  <input type="color" id="two" name="two" value="#f6b73c" />
  <label for="two">Two</label>
</div>

---

## File

```html
<label for="avatar">Upload a image:</label><br />
<input type="file" id="image" name="image" accept="image/png, image/jpeg" />
```

<label for="avatar">Upload a image:</label><br />
<input type="file" id="image" name="image" accept="image/png, image/jpeg" />

---

## Range

```html
<div>
  <input type="range" id="volume" name="volume" min="0" max="11" />
  <label for="volume">Volume</label>
</div>
```

<div>
  <input type="range" id="volume" name="volume"
         min="0" max="11"/>
  <label for="volume">Volume</label>
</div>

---

## Search

```html
<input type="search" id="site-search" name="q" />
```

<input type="search" id="site-search" name="q"/>

---

## Tel

```html
<input type="email" />
```

<input type="email"/>

---

## Email

```html
<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{4}-[0-9]{4}"
  required
/>

<small>Format: 1234-5678</small>
```

<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[0-9]{4}-[0-9]{4}"
  required
/>

<small>Format: 1234-5678</small>

---

## URL

```html
<input
  type="url"
  name="url"
  id="url"
  placeholder="https://example.com"
  pattern="https://.*"
  size="30"
  required
/>
```

<input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required/>

---

## Image

```html
<input
  type="image"
  id="image"
  alt="Login"
  src="/media/examples/login-button.png"
/>
```

<input type="image" id="image" alt="Login" src="/media/examples/login-button.png"/>

---

## Button

```html
<input type="button" value="input but button" />
```

<input type="button" value="input but button"/>

---

## Hidden ???

#### Probably good to know, and not to use.

```html
<input type="hidden" />
```

<input type="hidden"/>

---

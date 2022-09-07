---
title: HTML tags
sidebar_position: 4
---

# < Lesser used HTML Tags >

---

## Overview Table

with visible functionality

|       Tag       |                                     Example                                      |
| :-------------: | :------------------------------------------------------------------------------: |
|      cite       |                   Example of <cite> how Cite would look</cite>                   |
|      code       |                   Example of <code> how Data would look</code>                   |
|       kbd       |                    Example of <kbd> how kbd would look</kbd>                     |
|      mark       |                   Example of <mark> how Mark would look</mark>                   |
|        q        |                  Example of <q> how inline quote would look</q>                  |
| Ruby annotation | <ruby>漢<rp>(</rp><rt>kan</rt><rp>)</rp>字<rp>(</rp><rt>ji</rt><rp>)</rp></ruby> |
|      samp       |              Example of <samp> how Sample Output would look</samp>               |
|      small      |               Example of <small> how Small Text would look</small>               |
|       sub       |                 Example of <sub> how Subscript would look</sub>                  |
|       sup       |                Example of <sup> how Superscript would look</sup>                 |
|   blockquote    |          Example of <blockquote> how blockquote would look</blockquote>          |
|     Details     |              <details><summary>Summary</summary>Details.</details>               |

## A

### `<address>` | Address

HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

Example:

<code>
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:xhappy@xl.com">xhappy@xl.com</a><br />
  <a href="tel:+6512345678">(+65) 1234-5678</a>
</address>
</code>

```html
<p>Contact the author of this page:</p>

<address>
  <a href="mailto:xhappy@xl.com">xhappy@xl.com</a><br />
  <a href="tel:+6512345678">(+65) 1234-5678</a>
</address>
```

-

### `<article>`| Article Contents

The Article Contents element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable

Example:
<code>

<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Review</h3>
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <h3>User reviews</h3>
    <article class="user_review">
      <h4>Too scary!</h4>
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
  </section>
</article></code>

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Review</h3>
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <h3>User reviews</h3>
    <article class="user_review">
      <h4>Too scary!</h4>
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
  </section>
</article>
```

-

### `<aside>` | Aside

The Aside element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

Example:

```html
<p>
  Salamanders are a group of amphibians with a lizard-like appearance, including
  short legs and a tail in both larval and adult forms.
</p>

<aside>
  <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>
  Several species of salamander inhabit the temperate rainforest of the Pacific
  Northwest, including the Ensatina, the Northwestern Salamander and the
  Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects,
  worms and other small creatures.
</p>
```

-

### `<audio>` | Audio

The Embed Audio element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.

Example:
<code>

<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</figure>
</code>

```html
<figure>
  <figcaption>Listen to the T-Rex:</figcaption>
  <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</figure>
```

-

### `<area>` | Image Map Area

The Image Map Area element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext link.

This element is used only within a `<map>` element.

Example: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area">Click here</a>

---

## B

### `<blockquote>` | Block Quotation

The Block Quotation element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation

Example:

<code>
<figure>
    <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    </blockquote>
    <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>
</code>

```html
<figure>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>
      Words can be like X-rays, if you use them properly—they’ll go through
      anything. You read and you’re pierced.
    </p>
  </blockquote>
  <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</figure>
```

---

## C

### `<caption>` | Table Caption

The Table Caption element specifies the caption (or title) of a table.

Example:
<code>

<table>
  <caption>Example Caption</caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table></code>

```html
<table>
  <caption>
    Example Caption
  </caption>
  <tr>
    <th>Login</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>user1@sample.com</td>
  </tr>
  <tr>
    <td>user2</td>
    <td>user2@sample.com</td>
  </tr>
</table>
```

### `<cite>` | Citation

The Citation element is used to describe a reference to a cited creative work, and must include the title of that work.

Example:

<code>
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
</code>

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

-

### `<canvas>` | Graphics Canvas

Use `<canvas>` element with either the canvas scripting API or the WebGL API to draw graphics and animations.

-

### `<code>` | Inline code

Example:
<code>
<code>Example</code>
</code>

```html
<code>Example</code>
```

---

## D

### `<data>` | Data

The Data element links a given piece of content with a machine-readable translation.

Example:

<code>
<p>New Products</p>
<ul>
 <li><data value="398">Mini Ketchup</data></li>
 <li><data value="399">Jumbo Ketchup</data></li>
 <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
</code>

```html
<p>New Products</p>
<ul>
  <li><data value="398">Mini Ketchup</data></li>
  <li><data value="399">Jumbo Ketchup</data></li>
  <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>

(CSS)
<style>
  data:hover::after {
    content: " (ID " attr(value) ")";
    font-size: 0.7em;
  }
</style>
```

-

### `<dl>` | Description

`<dl>`: The Description List element
`<dt>`: The Description Term element
`<dd>`: The Description Details element

Example:

<code>
<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>
</code>

```html
<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>
</dl>
```

-

### `<details>` | Details

The Details disclosure element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the `<summary>` element.

Example:

<code>
<details>
    <summary>I have keys but no doors. I have space but no room. You can enter but can’t leave. What am I?</summary>
    A keyboard.
</details>
</code>

```html
<details>
  <summary>
    I have keys but no doors. I have space but no room. You can enter but can’t
    leave. What am I?
  </summary>
  A keyboard.
</details>
```

-

### `<del>` | Del

Deleted Text element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The `<ins>` element can be used for the opposite purpose: to indicate text that has been added to the document.

Example:

<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>

```html
<blockquote>
  There is <del>nothing</del> <ins>no code</ins> either good or bad, but
  <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

---

## F

### `<figure>` | Figure Caption

Figure with Optional Caption element represents self-contained content, potentially with an optional caption, which is specified using the `<figcaption>` element. The figure, its caption, and its contents are referenced as a single unit.

Example:

<code>
<figure>
    <img src="https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg"
         alt="Cute Cat"/>
    <figcaption>A Cute Cat</figcaption>
</figure>
</code>

```html
<figure>
  <img
    src="https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg"
    alt="Cute Cat"
  />
  <figcaption>A Cute Cat</figcaption>
</figure>
```

---

## I

### `<iframe>` | Inline Frame

represents a nested browsing context, embedding another HTML page into the current one.

Example:
<code>

<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
</code>

```html
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
>
</iframe>
```

---

## K

### `<kbd>` | Keyboard

Example:
<code>

<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render a page.</p>
</code>

```html
<p>
  Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render a
  page.
</p>
```

---

## M

### `<mark>` | Mark

Example:
<code>
<mark>Example</mark>
</code>

```html
<mark>Example</mark>
```

-

### `<menu>` | Menu

HTML element is a semantic alternative to `<ul>`

Example:
<code>

<menu><li>item</li><li>item</li><li>item</li></menu>
</code>

```html
<menu>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</menu>
```

-

### `<meter>` | Meter

Meter element represents either a scalar value within a known range or a fractional value.

Example:
<code>
<label for="fuel">Fuel level:</label>
<meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="55">
at 50/100
</meter>
</code>

```html
<label for="fuel">Fuel level:</label>

<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="50">
  at 50/100
</meter>
```

---

## O

### `<object>` | Object

represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.

Example:
<code>
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>
</code>

```html
<object
  type="application/pdf"
  data="/media/examples/In-CC0.pdf"
  width="250"
  height="200"
></object>
```

---

## P

### `<progress>` | Progress

displays an indicator showing the completion progress of a task, typically displayed as a progress bar.

Example:
<code>
<label for="file">File progress:</label>
<progress id="file" max="100" value="70"> 70% </progress>
</code>

```html
<label for="file">File progress:</label>
<progress id="file" max="100" value="70">70%</progress>
```

---

## Q

### `<q>` | Inline quotation

Example:
<code>
Sample <q>Quote</q>
</code>

```html
Sample <q>Quote</q>
```

---

## R

### `<ruby>` | The Ruby Annotation element

Children Elements `<rp> <rt>`

Example:
<code>
<ruby>
漢
<rp>(</rp>
<rt>kan</rt>
<rp>)</rp>
字
<rp>(</rp>
<rt>ji</rt>
<rp>)</rp>
</ruby>
</code>

```html
<ruby>
  漢
  <rp>(</rp>
  <rt>kan</rt>
  <rp>)</rp>
  字
  <rp>(</rp>
  <rt>ji</rt>
  <rp>)</rp>
</ruby>
```

---

## S

### `<samp>` | Sample Output

used to enclose inline text which represents sample (or quoted) output from a computer program.

Example:
<code>

<p>I was trying to boot my computer, but I got this hilarious message:</p>
<p><samp>Keyboard not found <br/>Press F1 to continue</samp></p>
</code>

```html
<p>I was trying to boot my computer, but I got this hilarious message:</p>
<p>
  <samp>Keyboard not found <br />Press F1 to continue</samp>
</p>
```

-

### `<small>` | Small Text

Example:
<code>
Example<hr/><small>Small Text Copywrite 2022 etc</small>
</code>

```html
Example
<hr />
<small>Small Text Copywrite 2022 etc</small>
```

-

### `<sub>` | Subscript

Example:

<code>
<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
</code>

```html
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as
  "caffeine."
</p>
```

-

### `<sup>` | Superscript

Example:

<code>
<p>The <b>Pythagorean theorem</b> is often expressed as the following equation:</p>
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
</code>

```html
<p>
  The <b>Pythagorean theorem</b> is often expressed as the following equation:
</p>
<p>
  <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
</p>
```

-

### `<source>` | Source

The `<source>` HTML element specifies multiple media resources for the `<picture>`, the `<audio>` element, or the `<video>` element. It is an empty element, meaning that it has no content and does not have a closing tag.

---

## T

### `<time>` | Time (Date)

<time>Example</time>

Example:

<code>

</code>

```html

```

-

### `<caption>` | Table Caption

The Table Caption element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.

Example:
<code>

<p>The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in London's Hyde Park.</p>

<p>The concert starts at <time datetime="20:00">20:00</time> and you'll be able to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.</p>
</code>

```html
<p>
  The Cure will be celebrating their 40th anniversary on
  <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
</p>

<p>
  The concert starts at <time datetime="20:00">20:00</time> and you'll be able
  to enjoy the band for at least <time datetime="PT2H30M">2h 30m</time>.
</p>
```

### `<table>` | Table

Children tags for table element
`<thead> <tbody> <tfoot>`
`<tr> <th> <td>`

Example:

<code>
<table>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
</table>
</code>

```html
<table>
  <thead>
    <tr>
      <th>Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Totals</th>
      <td>21,000</td>
    </tr>
  </tfoot>
</table>
```

---

## V

### `<video>` | Video

Example:

<code>
<video controls width="250">

    <source src="/media/cc0-videos/flower.webm"
            type="video/webm">

    <source src="/media/cc0-videos/flower.mp4"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.

</video>
</code>

```html
<video controls width="250">
  <source src="/media/cc0-videos/flower.webm" type="video/webm" />

  <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />

  Sorry, your browser doesn't support embedded videos.
</video>
```

---

## W

### `<wbr>` | Line Break Opportunity

represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.

---

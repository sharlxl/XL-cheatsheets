---
title: Intro
sidebar_position: 1
---

## Strict mode

> Strict mode applies to entire scripts or to individual functions. It doesn't apply to block statements enclosed in `{}` braces; attempting to apply it to such contexts does nothing. eval code, Function code, event handler attributes, strings passed to `setTimeout()`, and related functions are entire scripts, and invoking strict mode in them works as expected.

```javascript
// Whole-script strict mode syntax

"use strict";

// Function-level strict mode syntax
function strict() {
  "use strict";
  function nested() {
    return "And so am I!";
  }
  return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() {
  return "I'm not strict.";
}
```

---

## Operators

- addition +
- prefix increment ++a
- postfix increment a++
- subtract -
- prefix decrement --a
- postfix decrement a--
- multiplication \*
- division /
- remainder %
- AND &
- Logical AND &&
- OR |
- logical OR ||
- NOT ~
- XOR ^
- Left Shift <<
- Right Shift >>
- Zero Fill Right shift >>>
- Logical NOT !
- typeOf
- assignment =
- equals ==
- strict equals ===
- unequals !=
- strict unequals !==
- greater than >
- greater or equal >=
- less than <
- less or equal <=
- a=a+b a+=b

---

## Event

Events are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change.

### Mouse

- onclick
- oncontextmenu
- ondblclick
- onmousedown
- onmouseenter
- onmouseleave
- onmousemove
- onmouseover
- onmouseout
- onmouseup

### Keyboard

- onkeydown
- onkeypress
- onkeyup

### Frame

onabort, onbeforeunload, onerror, onhashchange, onload, onpageshow, onpagehide, onresize, onscroll, onunload

### Form

onblur, onchange, onfocus, onfocusin, onfocusout, oninput, oninvalid, onreset, onsearch, onselect, onsubmit

### Drag

ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop

### CLipboard

oncopy, oncut, onpaste

### Media

onabort, oncanplay, oncanplaythrough, ondurationchange, onended, onerror, onloadeddata, onloadedmetadata, onloadstart, onpause, onplay, onplaying, onprogress, onratechange, onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange, onwaiting

### Animation

animationend, animationiteration, animationstart

### Misc

transitionend, onmessage, onmousewheel, ononline, onoffline, onpopstate, onshow, onstorage, ontoggle, onwheel, ontouchcancel, ontouchend, ontouchmove, ontouchstart

---

## SVG

Scalable Vector Graphics (SVG) are an XML-based markup language for describing two-dimensional based vector graphics

[SVG elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)

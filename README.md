# Toglr
Simple CSS only responsive menu toggler. Works great for single level menus. Inspired by apple.com

## Demo
* https://robinpoort.github.io/toglr/ (still need to style this)

## Features:
- Has anchor buttons fallback for when JS is disabled
- When JS is disabled anchors are keyboard accessible, however focus is "lost" after pressing. On opening the open button disappears and the next tab will be to the closing button.
- Using CSS `:target` to open the menu when JS is disabled
- Bare bones CSS
- Showing/hiding different open/close labels 
- Added onKeyPress for enabling enter key on the label to `:check` the input

## Use

```html
<!-- Replace no-js class with js class -->
<script type="text/javascript">function hasClass(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}var el=document.documentElement;var cl="no-js";if(hasClass(el,cl)){var reg=new RegExp("(\\s|^)"+cl+"(\\s|$)");el.className=el.className.replace(reg," js")}</script>

<!-- The input, place first so we have full CSS control -->
<input class="toglr-input" type="checkbox" id="open-menu" />

<!-- Toggler element(s) -->
<div class="toglr-togglers">
    <label class="toglr-label" for="open-menu" onKeyPress="this.click()" tabindex="0" aria-label="Menu toggle">
        <span class="toglr-label-open">Open menu</span>
        <span class="toglr-label-close">Close menu</span>
    </label>
    <a class="toglr-open" href="#open-menu">Open menu</a>
    <a class="toglr-close" href="#close-menu">Close menu</a>
</div>

<!-- The navigation -->
<nav class="toglr-nav" aria-labelledby="main-menu-label">
    <h2 id="main-menu-label" class="visually-hidden">Main Menu</h2>
    <ul class="toglr-menu">
        <li role="menuitem">
            <a href="#">Item</a>
        </li>
        <li role="menuitem">
            <a href="#">Item</a>
        </li>
        <li role="menuitem">
            <a href="#">Item</a>
        </li>
        <li role="menuitem">
            <a href="#">Item</a>
        </li>
        <li role="menuitem">
            <a href="#">Item</a>
        </li>
    </ul>
</nav>
```

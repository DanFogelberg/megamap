# Megamap

The website consists of a grid of tiles which you can change the type of. Some tiles have special effects such as fire spreading. You can paint the map as you like, but there is no goal so it is quite useless.

useless-web-dan.netlify.app

# Installation

Download files and run index.html.

# Code Review

1. `style.css:13-17` - You could use both woff and woff2 here, some older browsers/browser versions are not compatible with woff2.
1. `functions.js:7` - Remember to name variables well, it was hard to understand the difference of newTile and nextTile for example.
1. `functions.js:88` - the setNewTile function decides what nextTile is, this function could use some comments for clarity aswell.
1. `script.js:36` - As commented this function is indeed hard to read. I suggest looking into using an object for the fire logic. ex: `activeTile.fire.up.(0,+1)` if that makes sense
1. `script.js:15` - Here we append the newly created section to the body element. This ends up making the section appear after the footer in the DOM. I suggest placing the section in a wrapper of some sort earlier in the DOM.

# Testers

Tested by the following people:

1. Jane Doe
2. John Doe

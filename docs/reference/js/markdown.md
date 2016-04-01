# Markdown Syntax

Syntax to create formatted text in Touch Develop.

### @parent td/comment
 

Markdown is a popular syntax used by developers to describe and annotate documents. Touch Develop supports a large subset of the markdown syntax, and adds a few new features. Markdown syntax applies to [comments](/microbit/js/comment) added using the [Touch Develop editor](/microbit/js/editor).

## Basic markdown syntax

### Headings

Use #, ##, or ### at the beginning of a line to specify a heading:

* ``use # for heading 1``
* ``use ## for heading 2``
* ``use ### for heading 3``

### Bulleted lists

Use a * for a bullet:

``* this is a bullet``

### Numbered lists

Type a number, a period, and a space before each item in a numbered list. Like this:

> `1. first item`

> `2. second item`

> `3. third item`

The numbers in a numbered list appear as 1. in the Touch Develop editor, however, the numbers will update when the script is previewed or published.

### Character formatting

Use a single `*` for italic and `**` for bold:

``*italic*`` => *italic*

``**bold**`` => **bold**

### Links

* to add a link, type the URL: ``http://touchdevelop.com`` => http://touchdevelop.com
* to specify link text (instead of the URL), put the link text in [ ] brackets and the link in ( )

For example:

``[TouchDevelop website](http://touchdevelop.com)`` => [TouchDevelop website](http://touchdevelop.com)

### Columns

To format text into columns, insert ``### ~column `` at the start of each column and ``### ~`` at the end of the column.

## Touch Develop syntax

The markdown syntax in this section is non-standard and specific to Touch Develop.

### Inline code

Use this syntax: ```basic => show number```

To show code like this:  `basic-> show number`

(``->`` is replaced with `->`)

### HTML entities

You can use HTML entities like ``&amp;amp;``, ``&amp;lt;``, or ``&amp;#123;``. You can also use ``&`` verbatim if it cannot be confused with HTML entity.

### Pictures

You can include pictures in a script by adding an art resource to your script. All pictures must first be uploaded to the Touch Develop cloud before they can be used in a script. Here's how:

1. Click `script`, **+ add new**, and then click **picture resource**.

2. You can upload a new picture or search existing pictures.

3. Give it a name, let's say you call it ``alien``.

2. In your script, use ``(picture ...)`` with the picture name (in this case, alien) and an optional caption:
WARN: missing picture: ...
WARN: unknown picture: ...

* ``![](/static/mb/image-0.png)``

![](/static/mb/image-0.png)

By default, pictures are 12x12. You can specify a different size as in `![](/static/mb/image-0.png)`, up to 30x20.

![](/static/mb/image-0.png)

To insert a picture inline with text ![](/static/mb/image-0.png), use: `(picture ...)` without any size information. For example: ``![](/static/mb/image-0.png)``
WARN: missing picture: ...
WARN: unknown picture: ...

You can skip adding an art resource, and instead use the publication ID of a picture directly.

### Declarations

Any named declaration from a script can be rendered in a script using `{decl:name}`. For example, you can render global variables, functions, etc...
WARN: no such decl: name

* `
```
var v: number = 0
```

` where `v` is a global variable in the script:

```
var v: number = 0
```

### Code snippets

Any code that is not a comment is treated as a snippet.

You can use ``{highlight}`` comment to start highlighting statements in the snippet. Use ``{/highlight}`` to stop. The comment needs to have ``{highlight}`` or ``{/highlight}`` and nothing else.
MACRO: highlightMACRO: /highlightMACRO: highlightMACRO: /highlight

If you want to render some comments inside the snippets as comments (and not regular text), then surround the snippet with ``{code}`` ... ``{/code}``, for example:
MACRO: codeMACRO: /code

```
let theAnswer = 42 // ***
// and now show the answer:
basic.showNumber(theAnswer, 150)
```

Note that comments inside block structures are always rendered as regular comments, not text. For example:

```
if (false) {
    // This code is never executed.
}
```

### Boxes and frames

You can use `### ~<type> ` and `### ~` (each on separate comment line) to enclose a block of text in a coloured box. For example:

### ~hint 

This is how `### ~hint ` looks like. Some helpful information goes here.

### ~

The following box types are supported:

* `hint`, `exercise`, `example` - self-explanatory
* `nointernet` - block with heading "no internet?" for giving instructions for offline operations
* `screen` - does not show in print
* `print` - does not show when not printing
* `portrait` - shows (with no frame or heading) when device is held in portrait orientation; in print it shows with heading "device in portrait" and a frame
* `landscape` - likewise

### Special tutorial features

You'll use markdown syntax when creating Touch Develop tutorials. See [create a tutorial](/microbit/js/create-tutorials) for more info.

### ~hide

### Embedding videos

* any video: ``{video:<screenshot url>:<mp4 url>}`` where ``<screenshot url>`` is a screenshot of the video,  and ``<mp4 url>`` is the video url that plays
MACRO: video
If you want to include documents, slides, and videos from other sites, just use regular `http://...` link.

### ~


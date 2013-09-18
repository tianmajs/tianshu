<!doctype HTML>
<html>
<head>
<meta charset="utf-8" />
<title>天书</title>
<style>
body {
font-family: Tahoma;
font-size: 10pt;
line-height: 170%;
padding: 0 10pt;
}

nav {
background: gray;
color: white;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
top: 0;
left: 0;
bottom: 0;
width: 200px;
}

header {
padding-left: 200px;
}

article {
padding-left: 200px;
}

footer {
padding-left: 200px;
}
</style>
</head>
<body>
<header>
<x-markdown src="section/00_header.md" />
</header>
<nav>
<x-index />
</nav>
<article>
<x-markdown src="section/01_install.md" />
<x-markdown src="section/02_usage.md" />
</article>
<footer>
<x-markdown src="section/99_footer.md" />
</footer>
</body>
</html>
天书
======

想用`markdown`编写带索引的单页结构HTML文档的话，可以试试天书。

### 安装

>	npm install tianshu -g

### 使用

首先参考`demo/`目录，使用`markdown`编写一些章节文件（位于`demo/section/`），并使用`HTML`编写好页面模板文件（位于`demo/index.tpl`）。在模板文件中，使用`x-markdown`标签引用`.md`文件，并使用`x-index`标签指定索引输出位置。

准备好所有文件后，使用以下命令将模板文件编译为HTML文件。

>	tianshu index.tpl

如果希望生成的`index.html`好看一些，可以在`index.tpl`里写一些CSS。

### 开源协议

本程序基于MIT协议开源。

	Copyright (c) 2013-2014 Alibaba.com, Inc.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is furnished
	to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
	DEALINGS IN THE SOFTWARE.

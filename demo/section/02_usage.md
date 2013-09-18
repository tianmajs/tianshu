### 使用

首先参考`demo/`目录，使用`markdown`编写一些章节文件（位于`demo/section/`），并使用`HTML`编写好页面模板文件（位于`demo/index.tpl`）。在模板文件中，使用`x-markdown`标签引用`.md`文件，并使用`x-index`标签指定索引输出位置。

准备好所有文件后，使用以下命令将模板文件编译为HTML文件。

>	tianshu index.tpl

如果希望生成的`index.html`好看一些，可以在`index.tpl`里写一些CSS。

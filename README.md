# captor

一条命令生成页面截图

```shell
  Usage: captor <url> [filename] [options]


  Options:

    -V, --version          output the version number
    -W, --width <width>    set viewport width
    -H, --height <height>  set viewport height
    -V, --view             screenshot viewport
    -F, --full             screenshots of the full page
    -h, --help             output usage information
```

## Usage

对指定页面的首屏生成截图，默认 viewport 为 1200*800

```
captor http://www.jd.com
```

## Options

* `-F, --full`，自动滚动页面，生成全屏截图。特别适用于除首屏外，其它屏的数据都是懒加载进来的页面
* `-V, --version`，查看版本号
* `-h, --help`，查看帮助信息

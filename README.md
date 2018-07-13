# captor

一条命令生成页面截图

<img width="744" src="http://img10.360buyimg.com/uba/jfs/t21007/198/486345813/123287/6f3285a7/5b4841b1N44c55e6c.png" />

## Usage

对指定页面的首屏生成截图，默认 viewport 为 1200*800

```
captor http://www.jd.com
```

## Options

* `-F, --full`，自动滚动页面，生成全屏截图。特别适用于除首屏外，其它屏的数据都是懒加载进来的页面
* `-V, --version`，查看版本号
* `-h, --help`，查看帮助信息

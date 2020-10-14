# imagemin
gulpを用いた画像圧縮ツール

### 対応形式
jpeg / png / gif / svg

### 使い方
1. 圧縮したい画像を`./images/src/`に格納。
1. `gulp`
1. `./images/dest/`に圧縮された画像が格納される。
1. `./images/src/`こちらに入る
1. `./images/dest/`入れたファイルは削除される。
1. `./images/archive/`に元ファイルのバックアップが取られる。

#### その他機能
1. `gulp clean` : `./images/dest/`内のファイルを全て削除

### インストール
`npm i`
`npm install --save-dev gulp`

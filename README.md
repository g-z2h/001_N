# Errorda!!

## サービスの概要

**Errorda!!はError解決のプロセスと成長過程を可視化するためのものです。**
**エラー文を検索する際にエラー文の保存とクローム検索を一度に行います。**

- Error解決に掛かった時間を記録します。
- Error解決直後に解決に至るまでに閲覧したURLや解決のヒントなどをメモに残すことができます。
- 未経験エンジニアをマネジメントする方（未経験エンジニアがどのように検索しているか知り、フィードバックするためのOJT補助ツール）

## 想定されるユーザー

- プログラミングを行なっている方
- Error解決の記録を体系的に整理し残したい方
- 気軽にアウトプットする練習がしたい方

### このアプリを作った背景

**自分がErrorを解決するにあたってこんなサービスがあったらと思っていたからです。** プログラミングをする過程で得た気づきやErrorの解決方法などを体系的に残すことは難しく、Errorを後でまとめようと思うが数日経ってしまい忘れて記録することができないということはよくあると思います。
そういった背景から、自分がErrorを解決するにあたってErrorに直面した際にどのようなワードで検索をしているのかの把握し、自分独自のError解決辞書を作成するといったものができないかと思い本アプリを作成しました。

## ユーザーが持つ課題

- ①Error解決に役に立つサイトを都度ルールなくブックマーク登録することによって結果検索性の低下
- ②Error解決後に「なぜ」の時間を取らないため再度同じErrorに詰まることがある
- ③記録を体系的に残すことができず、Error解決量と成長量がイメージしにくい（実感しにくい）
- ④直面したエラーに対してすぐメモを残し、かつ検索できるツールがない

## 課題の解決方法（このサービスでどうやって解決するか）

- 解決したErrorについてURLを登録しブックマーク迷子を卒業する（①）
- Error解決直後に記録を残すための時間を無意識に取れる、アウトプットの練習にもなる（②、③）
- 解決までの時間を一つの結果として捉える。（③）
- Errorda!!というサービスで解決する（④）

## 利用方法
[chrome_extensions.zip](https://github.com/g-z2h/001_N/files/8396766/chrome_extensions.zip)
1. 上記chrome_extensionsのダウンロード ※現在公開に向けて審査中
2. 任意の場所に保存
3. ダウンロードしたzipファイルをダブルクリックで解凍
4. 新規WEBページを開く。（GoogleChrome）
5. ブラウザのURLの項目に、chrome://extensionsと打ち込む
6. 画面右上の「デベロッパーモード」をONにすると、拡張機能のメニューが表示されます。
<img width="868" alt="スクリーンショット 2022-03-24 17 17 47" src="https://user-images.githubusercontent.com/75469934/159872857-8b058edf-4af5-459a-a2dc-bf5ca4b9d8b9.png">

7. 「パッケージ化されていない拡張機能を読み込む」をクリックします。
<img width="868" alt="スクリーンショット 2022-03-24 17 23 11" src="https://user-images.githubusercontent.com/75469934/159874265-985c37a5-bebb-413f-b059-c48657925b08.png">

8. 先ほど保存したファイルを読み込む

9. アイコンクリック時に初回のみユーザー名登録アラート表示（デフォルト名：error）
![スクリーンショット 2022-04-01 19 04 55](https://user-images.githubusercontent.com/75469934/161242749-78579c49-7f9f-41af-bacd-7d60126e6bbc.png)

10. 再度アイコンをクリックすると入力したユーザー名が右上に反映される。
![スクリーンショット 2022-04-01 19 07 49](https://user-images.githubusercontent.com/75469934/161243085-e9d7f509-3f5b-42da-8f26-081af2969520.png)

## 実装した機能についての GIF と説明

## 機能一覧

| No  | 機能             |
| --- | ---------------- |
| 1   | Chrome拡張機能でのユーザー名の保存       |
| 2   | Chrome拡張機能でのError文の保存         |
| 3   | Chrome拡張機能でのError文のChrome検索    |
| 4   | 登録したErrorの編集機能|
| 5   | 検索した文と改めて今回のErrorに対するタイトルの保存|
| 6   | 解決までの時間計測     |

## 使用技術

- Javascript
- Ruby 2.6.5
- Rails 6.1.4.6
- Chrome Extensions 3
- Bootstrap 5
- PostgreSQL 14.2

## GIF
![Errorda demo](https://user-images.githubusercontent.com/75469934/159679049-ecf86959-ebcc-4246-9aaa-cfc91601e949.gif)
### 工夫した点

### ChromeExtensionsを導入したこと
Error検索を行う際に別サイトにアクセスするというのは利用するハードルを
上げ、利用しなくなる一番の原因になると考えていました。
Errorの記録を残す際に３つの手順があると思います。
1. Errorについて調べる
2. なんのErrorだったのかメモをする
3. Error解決時の参考URL・メモなどを記録する

そこで普段から利用しているGoogleChromeの拡張機能を採用することにしました。
理由としては上記三項目の１と２をGoogle内での完結をしたいと思ったからです。
本格的な実装などの記事などが少なく基本的には公式のサンプルからヒントを得て実装を行いました。
## 今後の追加したい機能
- 編集画面でのpreview機能の追加（マークダウン記法に慣れるため）
- グラフを使った今までのErrorについての記録などの表示
- Chrome ウェブストアへの公開
- メモ帳としてはNotionがUIが直感的でユーザーが検索履歴を振り易いのでデータベースをNotionに載せ替えたい
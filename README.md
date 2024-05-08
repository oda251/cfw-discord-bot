# Discord Bot with Cloudflare Workers x GAS x SpreadSheet
- discordからシフト管理を行うためのプログラムです
## 仕様
### 設計
- サーバ：
  - インフラ:cloudflare workers
  - 言語：javascript
  - フレームワーク:hono (web)
  - パラメータ: .dev.vars.example参照
    - GASApi関連の情報（クライアントID、クライアントキー、リフレッシュトークン　など）
    - Discord関連の情報（トークン、guildID、channelID など）
  - 概要：
    - apiのような設計です。リクエストを受け取るとgasAPIからデータを取得し、適宜整形して返します。当サーバのエンドポイントURLをdiscordBotに登録して利用します。
- リポジトリ（データベース）：
  - インフラ：google spreadsheet
  - 言語：GAS
  - 概要:
    - 下記のテストシートのような書式に従い、GASapiでデータのやりとりを行います
    - https://docs.google.com/spreadsheets/d/11ocEIXS9FWdiuHAWGzXDWvMvNjrA-iZdBq0YAHX1h_w/edit?pli=1#gid=0
### 機能
- ある日程のシフトに割り当てられている人を知らせます（gas準拠）
  - cronで定期実行することができます（サーバ準拠）
  - discordのスラッシュコマンドから任意に呼び出せます
- ある人の、直近のシフトが何日か調べます
- intraネームについて、サーバに該当の方がいればメンションします
## Pros
- 完全無料
## Cons
- 実装が面倒
  - discord.jsなど、nodeJsランタイムに依存するライブラリが使えない
    - Cloudflare Workersでは、v8 javascriptエンジンというのを使っているらしい
      > Cloudflare Workersのランタイムは、ブラウザ環境やNode.js環境とは異なります。それは、Web Workers APIを基にしており、サーバーサイドのJavaScript実行環境を提供します。そのため、ブラウザ固有のAPI（windowオブジェクトなど）やNode.js固有のAPI（fsモジュールなど）は利用できません。(Github Copilotより)

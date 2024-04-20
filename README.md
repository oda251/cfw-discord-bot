# Discord Bot with Cloudflare Workers x GAS x SpreadSheet
- Pros:
  - 完全無料
    - Cloudflare Workersは、無料でもトラフィックが無制限
      - 万一DDoS攻撃などを受けても安心
- Cons:
  - 実装が面倒
    - discord.jsなど、nodeJsランタイムに依存するライブラリが使えない
      - Cloudflare Workersでは、v8 javascriptエンジンというのを使っているらしい
        > Cloudflare Workersのランタイムは、ブラウザ環境やNode.js環境とは異なります。それは、Web Workers APIを基にしており、サーバーサイドのJavaScript実行環境を提供します。そのため、ブラウザ固有のAPI（windowオブジェクトなど）やNode.js固有のAPI（fsモジュールなど）は利用できません。(Github Copilotより)
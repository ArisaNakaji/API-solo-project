**このリポジトリはCode Chrysalisの生徒であるときに作成しました**
**（This was created during my time as a student at Code Chrysalis）**

## 実装
1. データベースからデータを全件取得する
2. データベースから「prefecture-english-name」をエンドポイントにし、データを条件取得する
3. データベースにデータを追加する
4. データベースのデータを修正する
5. データベースのデータを削除する

## DATABASEのテーブル
| id  | prefecture-english-name | prefecture-japanese-name | sake-name    | 
| --- | ----------------------- | ------------------------ | ------------ | 
| 1   | Hokkaido                | 北海道                   | 國希         | 
| 2   | Aomori                  | 青森県                   | 田酒         | 
| 3   | Iwate                   | 岩手県                   | 南部美人     | 
| 4   | Miyagi                  | 宮城県                   | 浦霞         | 
| 5   | Akita                   | 秋田県                   | 新政         | 
| 6   | Yamagata                | 山形県                   | 十四代       | 
| 7   | Fukushima               | 福島県                   | 飛露喜       | 
| 8   | Ibaraki                 | 茨城県                   | 郷乃誉       | 
| 9   | Tochigi                 | 栃木県                   | 鳳凰美田     | 
| 10  | Gunma                   | 群馬県                   | 水芭蕉       | 
| 11  | Saitama                 | 埼玉県                   | 神亀         | 
| 12  | Chiba                   | 千葉県                   | 五人娘       | 
| 13  | Tokyo                   | 東京都                   | 澤乃井       | 
| 14  | Kanagawa                | 神奈川県                 | いづみ橋     | 
| 15  | Nigata                  | 新潟県                   | 久保田       | 
| 16  | Toyama                  | 富山県"                  | 満寿泉       | 
| 17  | Ishikawa                | 石川県                   | 天狗舞       | 
| 18  | Fukui                   | 福井県                   | 黒龍         | 
| 19  | Yamanashi               | 山梨県                   | 七賢         | 
| 20  | Nagano                  | 長野県                   | 真澄         | 
| 21  | Gifu                    | 岐阜県                   | 小左衛門     | 
| 22  | Shizuoka                | 静岡県                   | 磯自慢       | 
| 23  | Aichi                   | 愛知県                   | 醸し人九平次 | 
| 24  | Mie                     | 三重県                   | 作           | 
| 25  | Shiga                   | 滋賀県                   | 松の司       | 
| 26  | Kyoto                   | 京都府                   | 玉乃光       | 
| 27  | Osaka                   | 大阪府                   | 秋鹿         | 
| 28  | Hyogo                   | 兵庫県                   | 剣菱         | 
| 29  | Nara                    | 奈良県                   | 風の森       | 
| 30  | Wakayama                | 和歌山県                 | 黒牛         | 
| 31  | Tottori                 | 鳥取県                   | 鷹勇         | 
| 32  | Shimane                 | 島根県                   | 王祿         | 
| 33  | Okayama                 | 岡山県                   | 酒一筋       | 
| 34  | Hiroshima               | 広島県                   | 竹鶴         | 
| 35  | Yamaguchi               | 山口県                   | 獺祭         | 
| 36  | Tokushima               | 徳島県                   | 獺祭         | 
| 37  | Kagawa                  | 香川県                   | 悦凱陣       | 
| 38  | Ehime                   | 愛媛県                   | 梅錦         | 
| 39  | Kochi                   | 高知県                   | 酔鯨         | 
| 40  | Fukuoka                 | 福岡県                   | 庭のうぐいす | 
| 41  | Saga                    | 佐賀県                   | 鍋島         | 
| 42  | Nagasaki                | 長崎県                   | 福鶴         | 
| 43  | Kumamoto                | 熊本県                   | 美少年       | 
| 44  | Oita                    | 大分県                   | 西の関       | 
| 45  | Miyazaki                | 宮崎県                   | 宮寒梅       | 
| 46  | Kagoshima               | 鹿児島県                 | 芋焼酎       | 
| 47  | Okinawa                 | 沖縄県                   | 泡盛         | 

## 目標

1. Express/GraphQL, および Relational database を使用してCRUD APIサービスを作成する
2. APIのテストを書く
3. 興味のあるデータを使って、データベースをセットアップする
4. APIエンドポイントをドキュメント化して、他のデベロッパーが使用できるようにする（つまり、美しいREADMEを作成する）
5. 基本的/シンプルなフロントエンドを作成する

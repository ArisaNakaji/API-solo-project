-- drop table sake;
-- psql -d sake -f ./creating/createdata.sql;

CREATE TABLE sake (
  prefectures_id SERIAL PRIMARY KEY,
  prefectures_english_name VARCHAR(20),
  prefectures_japanese_name VARCHAR(20),
  sake_name VARCHAR(10)
);

INSERT INTO sake (prefectures_english_name,prefectures_japanese_name,sake_name) VALUES
('Hokkaido','北海道','國希'),
('Aomori','青森県','田酒'),
('Iwate','岩手県','南部美人'),
('Miyagi','宮城県','浦霞'),
('Akita','秋田県','新政'),
('Yamagata','山形県','十四代'),
('Fukushima','福島県','飛露喜'),
('Ibaraki','茨城県','郷乃誉'),
('Tochigi','栃木県','鳳凰美田'),
('Gunma','群馬県','水芭蕉'),
('Saitama','埼玉県','神亀'),
('Chiba','千葉県','五人娘'),
('Tokyo','東京都','澤乃井'),
('Kanagawa','神奈川県','いづみ橋'),
('Nigata','新潟県','久保田'),
('Toyama','富山県"','満寿泉'),
('Ishikawa','石川県','天狗舞'),
('Fukui','福井県','黒龍'),
('Yamanashi','山梨県','七賢'),
('Nagano','長野県','真澄'),
('Gifu','岐阜県','小左衛門'),
('Shizuoka','静岡県','磯自慢'),
('Aichi','愛知県','醸し人九平次'),
('Mie','三重県','作'),
('Shiga','滋賀県','松の司'),
('Kyoto','京都府','玉乃光'),
('Osaka','大阪府','秋鹿'),
('Hyogo','兵庫県','剣菱'),
('Nara','奈良県','風の森'),
('Wakayama','和歌山県','黒牛'),
('Tottori','鳥取県','鷹勇'),
('Shimane','島根県','王祿'),
('Okayama','岡山県','酒一筋'),
('Hiroshima','広島県','竹鶴'),
('Yamaguchi','山口県','獺祭'),
('Tokushima','徳島県','獺祭'),
('Kagawa','香川県','悦凱陣'),
('Ehime','愛媛県','梅錦'),
('Kochi','高知県','酔鯨'),
('Fukuoka','福岡県','庭のうぐいす'),
('Saga','佐賀県','鍋島'),
('Nagasaki','長崎県','福鶴'),
('Kumamoto','熊本県','美少年'),
('Oita','大分県','西の関'),
('Miyazaki','宮崎県','宮寒梅'),
('Kagoshima','鹿児島県','芋焼酎'),
('Okinawa','沖縄県','泡盛')
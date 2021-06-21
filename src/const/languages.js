//言語情報を含む配列LANGUAGESを定義&書き出し
export const LANGUAGES = [
  'JavaScript',
  'C++',
  'Ruby',
  'Java',
  'PHP',
  'Go'
];

//非同期処理が問題なく完了した1秒後に配列LANGUAGESを表示する関数を定義
export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
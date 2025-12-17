export const apps = [
  {
    id: '6740538794',
    path: 'odd-or-even', // 過去にリリースした際に設定したパスのため残しておく
    name: '奇数偶数どっち',
    description: 'カンタン入力で奇数か偶数かわかるアプリ',
    images: [
      '/app/odd-or-even/1_0.png',
      '/app/odd-or-even/2_0.png',
      '/app/odd-or-even/3_0.png',
    ],
    targetAge: 'ALL',
    collectingData: 'サードパーティによるデータ収集',
  },

  {
    id: '6749750301',
    name: '住所で郵便番号検索',
    description:
      '宛名書き・住所入力の作業効率化。高速・完全オフラインで郵便番号を調べられる。',
    images: [],
    targetAge: 'ALL',
    collectingData: 'サードパーティによるデータ収集',
  },
];

export const findApp = (id: string) => apps.find(app => app.id === id || app.path === id);

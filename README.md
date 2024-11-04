# フロントエンドコーディング課題

## 説明

特になし

## インストール

1. **リポジトリをクローン**: ``
2. **依存関係をインストール**: `npm ci`

## ディレクトリ構成
src
├── app
├── components
└── types

app: ページ用コンポーネントを管理
components ボタン等の部品コンポーネントを管理
types: TypeScriptの型定義を管理

## 開発の手順

- **ローカルサーバの起動**: `npm run dev`
- **テストの実行**: `npm run test`

## 使用技術

- **実装**
  - Next.js
  - Typescript
- **テスト**
  - Vitest
- **コード整形/規則**
  - Prettier
  - ESLint
  - husky
- **バージョン管理**
  - git

## 開発メモ

- gitコミット時に自動的にlinter/prettierによるコード修正・整形が行われる。（huskyによって）
- CSS-in-JSを使用

## ライセンス

TODO: 必要であれば記載

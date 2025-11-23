'use client';

/**
 * React Suspense デモコンポーネント
 * 
 * 【目的】
 * React Developer Tools でロード中の fallback を 2秒以上確認できる開発用モック
 * 
 * 【構成】
 * 1. データフェッチモック（2秒遅延）
 * 2. Suspense境界
 * 3. fallback UI
 * 4. データ表示コンポーネント
 */

import { Suspense, use } from 'react';

// ===============================================
// 【モックデータの型定義】
// ===============================================
type User = {
  id: number;
  name: string;
  email: string;
};

// ===============================================
// 【データフェッチモック関数】
// ===============================================
/**
 * 2秒の遅延を持つモックAPI
 * React Suspenseで使用するため、Promiseを返す
 * 
 * @param delay - 遅延時間（ミリ秒）デフォルト2000ms
 * @returns モックユーザーデータ
 */
function fetchUserDataMock(delay: number = 2000): Promise<User> {
  console.log('🚀 データフェッチ開始...');
  
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✅ データフェッチ完了！');
      
      // モックデータ
      resolve({
        id: 1,
        name: 'Camone',
        email: 'camone@example.com',
      });
    }, delay);
  });
}

// ===============================================
// 【キャッシュ機構】
// ===============================================
/**
 * Suspense用のシンプルなキャッシュ
 * 同じPromiseを複数回throwしないようにする
 */
let cache: Promise<User> | null = null;

function getUserData(): User {
  // キャッシュがない場合は新規フェッチ
  if (!cache) {
    cache = fetchUserDataMock(2000);
  }
  
  // SuspenseはthrowされたPromiseをキャッチして、
  // Promiseが解決されるまでfallbackを表示する
  return use(cache);
}

// ===============================================
// 【データ表示コンポーネント】
// ===============================================
/**
 * データを表示するコンポーネント
 * getUserData()がPromiseをthrowすると、
 * 最も近い親のSuspenseがfallbackを表示する
 */
function UserProfile() {
  // ここでPromiseがthrowされるため、Suspenseが動作する
  const user = getUserData();
  
  return (
    <div className="p-6 bg-green-50 rounded-lg border-2 border-green-300">
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        ✅ ロード完了！
      </h2>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">ID:</span> {user.id}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">名前:</span> {user.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}

// ===============================================
// 【Fallback UI コンポーネント】
// ===============================================
/**
 * ロード中に表示されるフォールバックUI
 * React Developer Tools で確認しやすいように、
 * 視覚的にわかりやすいデザインにしている
 */
function LoadingFallback() {
  return (
    <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-300 animate-pulse">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        ⏳ ロード中...
      </h2>
      <div className="space-y-3">
        <div className="h-4 bg-blue-200 rounded w-3/4"></div>
        <div className="h-4 bg-blue-200 rounded w-1/2"></div>
        <div className="h-4 bg-blue-200 rounded w-5/6"></div>
      </div>
      <p className="text-sm text-blue-600 mt-4">
        💡 React DevTools で Suspense の動作を確認できます
      </p>
    </div>
  );
}

// ===============================================
// 【メインコンポーネント（Suspense境界）】
// ===============================================
/**
 * Suspenseでラップしたメインコンポーネント
 * 
 * 【使い方】
 * 1. このコンポーネントをページにインポート
 * 2. React Developer Tools を開く
 * 3. Components タブで Suspense を探す
 * 4. fallbackが2秒間表示されることを確認
 * 
 * 【キャッシュをリセットする方法】
 * ページをリロードするか、下記のボタンをクリック
 */
export default function SuspenseDemo() {
  /**
   * キャッシュをクリアして再度ロード状態を確認する
   */
  const handleReset = () => {
    cache = null;
    // 再レンダリングを強制するため、ページをリロード
    window.location.reload();
  };
  
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6">
      {/* ヘッダー */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          React Suspense デモ
        </h1>
        <p className="text-gray-600">
          2秒間のロード中状態を確認できます
        </p>
      </div>
      
      {/* Suspense境界 */}
      <Suspense fallback={<LoadingFallback />}>
        <UserProfile />
      </Suspense>
      
      {/* 説明とリセットボタン */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          📋 使い方
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>React Developer Tools</strong> をブラウザで開く
          </li>
          <li>
            <strong>Components</strong> タブを選択
          </li>
          <li>
            <strong>Suspense</strong> コンポーネントを探す
          </li>
          <li>
            <strong>fallback</strong> が2秒間表示されることを確認
          </li>
        </ol>
        
        <button
          onClick={handleReset}
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          🔄 ロード状態を再確認する
        </button>
        
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <p className="text-sm text-yellow-800">
            <strong>💡 ヒント:</strong> ボタンをクリックするとページがリロードされ、
            再度2秒間のロード状態を確認できます
          </p>
        </div>
      </div>
    </div>
  );
}


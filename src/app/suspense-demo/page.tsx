/**
 * Suspense デモページ
 * 
 * 【アクセス方法】
 * http://localhost:3000/suspense-demo
 * 
 * 【目的】
 * React Suspenseのロード中状態（fallback）を
 * React Developer Tools で確認するための専用ページ
 */

import SuspenseDemo from '@/components/SuspenseDemo';

export default function SuspenseDemoPage() {
  return <SuspenseDemo />;
}


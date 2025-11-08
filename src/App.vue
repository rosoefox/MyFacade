<script setup lang="ts">
import { ref } from 'vue';
import { OrderProcessFacade } from './facade/OrderProcessFacade'; // 퍼사드 임포트

// --- 퍼사드 패턴 클라이언트 코드 ---
const facade = new OrderProcessFacade();
const orderStatus = ref('');

const executeOrder = () => {
  // 주문 처리 전, 콘솔 초기화 및 상태 메시지 설정
  console.clear();
  orderStatus.value = '주문 처리 중... 자세한 과정은 콘솔을 확인하세요.';

  // 클라이언트는 복잡한 서브시스템 대신 퍼사드의 단일 메서드만 호출합니다.
  const success = facade.placeOrder(
    '초프초프',           // 상품 ID
    15,                // 수량
    150000,            // 금액
    '멋진카드',      // 카드 정보
    'kgh_olivia@naver.com' // 이메일
  );

  // 결과에 따라 Vue 컴포넌트의 상태 업데이트
  if (success) {
    orderStatus.value = '✅ 주문이 성공적으로 완료되었습니다!';
  } else {
    orderStatus.value = '❌ 주문 처리에 실패했습니다. 콘솔을 확인하세요.';
  }
};
</script>

<template>
  <div class="container">
    <h1>💙 초프초프 주문하기!💙 </h1>
    <p class="description">
      "초프초프"는 초급프로젝트를 줄인 말이다.
    </p>

    <button @click="executeOrder">복잡한 주문 처리 실행</button>
    <p class="status">상태: {{ orderStatus }}</p>

    <p class="note">💙 개발자도구 콘솔을 확인하세요! 💙</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #4B0082; /* 남색 */
  border-bottom: 3px solid #6A5ACD;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.description {
  margin-bottom: 40px;
  color: #555;
  font-size: 1.1em;
}

button {
  padding: 12px 20px;
  background-color: #4B0082;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3f006e;
}

.status {
  font-weight: bold;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.note {
  color: gray;
  font-size: 0.9em;
  margin-top: 30px;
  padding: 10px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  border-radius: 4px;
}
</style>

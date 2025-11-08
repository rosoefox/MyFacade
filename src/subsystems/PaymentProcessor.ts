// src/subsystems/PaymentProcessor.ts

/**
 * 서브시스템 2: 결제 처리 서비스 (복잡한 외부 API 통신을 대신함)
 */
export class PaymentProcessor {
  // 결제 실행 메서드
  public processPayment(amount: number, cardInfo: string): boolean {
    console.log(`[결제] ${cardInfo}를 이용해 ${amount}원을 결제 시도합니다.`);
    // 실제로는 결제 게이트웨이(PG사)와 통신하는 복잡한 로직
    if (amount > 0) {
      console.log("[결제] 결제가 성공적으로 완료되었습니다.");
      return true;
    }
    return false;
  }
}

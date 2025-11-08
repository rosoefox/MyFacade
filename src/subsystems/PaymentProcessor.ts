// src/subsystems/PaymentProcessor.ts

//결제 서비스!
export class PaymentProcessor {
  // 결제 실행 메서드
  public processPayment(amount: number, cardInfo: string): boolean {
    console.log(`[결제] ${cardInfo}를 이용해 ${amount}원을 결제 시도합니다.`);
    // 금액이 0보다 크면 성공이라고 가정한다.
    if (amount > 0) {
      console.log("[결제] 결제가 성공적으로 완료되었습니다.");
      return true;
    }
    return false;
  }
}

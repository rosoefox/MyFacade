// src/facade/OrderProcessFacade.ts
import { InventoryService } from '../subsystems/InventoryService'; // 서브시스템 1 임포트
import { PaymentProcessor } from '../subsystems/PaymentProcessor'; // 서브시스템 2 임포트
import { NotificationService } from '../subsystems/NotificationService'; // 서브시스템 3 임포트

//퍼사드!
export class OrderProcessFacade {
  // 서브시스템 인스턴스들을 퍼사드 내부에 캡슐화합니다.
  private inventory: InventoryService;
  private payment: PaymentProcessor;
  private notification: NotificationService;

  constructor() {
    // 퍼사드가 내부적으로 필요한 서브시스템들을 생성합니다.
    this.inventory = new InventoryService();
    this.payment = new PaymentProcessor();
    this.notification = new NotificationService();
  }

 // 단순하게 이 메서드만 호출하면 됨!
  public placeOrder(
    productId: string,
    quantity: number,
    amount: number,
    cardInfo: string,
    customerEmail: string
  ): boolean {
    console.log("\n--- 주문 처리 시작 ---");

    // 1. 재고 확인 (InventoryService 호출)
    if (!this.inventory.checkStock(productId)) {
      console.log("--- 재고 부족으로 주문 실패 ---");
      return false;
    }

    // 2. 결제 처리 (PaymentProcessor 호출)
    if (!this.payment.processPayment(amount, cardInfo)) {
      console.log("--- 결제 실패로 주문 실패 ---");
      return false;
    }

    // 3. 재고 차감 (결제 성공 시에만 InventoryService 호출)
    this.inventory.deductStock(productId, quantity);

    // 4. 알림 전송 (NotificationService 호출)
    const message = `상품 ${productId} ${quantity}개 주문이 완료되었습니다. 감사합니다!`;
    this.notification.sendEmail(customerEmail, message);

    console.log("--- 주문이 성공적으로 완료되었습니다 ---");
    return true;
  }
}

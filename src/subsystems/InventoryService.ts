// src/subsystems/InventoryService.ts

/**
 * 서브시스템 1: 재고 관리 서비스 (복잡한 DB 로직을 대신함)
 */
export class InventoryService {
  // 재고 확인 메서드
  public checkStock(productId: string): boolean {
    console.log(`[재고] 상품 ID ${productId}의 재고를 확인합니다.`);
    // 실제로는 DB 조회, 여기서는 항상 true 반환
    return true;
  }

  // 재고 차감 메서드
  public deductStock(productId: string, quantity: number): void {
    console.log(`[재고] 상품 ID ${productId} ${quantity}개를 차감합니다.`);
    // 실제로는 DB의 재고 수량을 업데이트하는 복잡한 로직
  }
}

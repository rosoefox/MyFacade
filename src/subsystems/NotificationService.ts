// src/subsystems/NotificationService.ts

/**
 * 서브시스템 3: 알림 서비스 (복잡한 이메일/SMS 전송 시스템을 대신함)
 */
export class NotificationService {
  // 이메일 전송 메서드
  public sendEmail(email: string, message: string): void {
    console.log(`[알림] ${email}로 이메일 전송: "${message}"`);
    // 실제로는 이메일 서버에 SMTP 요청을 보내는 로직
  }
}

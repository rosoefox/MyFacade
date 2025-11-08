// src/subsystems/NotificationService.ts

//알림 서비스! 실제로는 이메일 서버를 사용하는 복잡한 로직이 포함되기도 함!
export class NotificationService {
  // 이메일 전송 메서드
  public sendEmail(email: string, message: string): void {
    console.log(`[알림] ${email}로 이메일 전송: "${message}"`);
  }
}

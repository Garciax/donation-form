/**
 * Транспортный объект сообщения от сервера
 */
export class ResponseDto {
  constructor(ok: boolean, error?: string) {
    this.ok = ok;
    this.error = error;
  }

  ok: boolean;
  error?: string;
}

/**
 * Тип запроса к серверу
 */
export type DonationRequest = {
  amount: number;
  currency: string;
};

/**
 * Тип ответа от сервера
 */
export type DonationResponse = {
  ok: boolean;
  error?: string;
};

/**
 * Интерфейс Rest-client
 */
export interface RestClient {
  sendRequest: (req: DonationRequest) => void;
}
const SUCCESS_MESSAGE = "Thank you for your donation!";

/**
 * Rest-клиент
 */
const client: RestClient = {
  sendRequest: (req) => {
    fetch("http://localhost:8080/donate", {
      method: "POST",
      body: JSON.stringify(req),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result: DonationResponse) => {
        result.ok ? alert(SUCCESS_MESSAGE) : alert(result.error);
      });
  },
};

export default client;

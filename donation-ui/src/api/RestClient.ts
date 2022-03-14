export type DonationRequest = {
  amount: number;
  currency: string;
};

export type DonationResponse = {
  ok: boolean;
  error?: string;
};

export interface RestClient {
  sendRequest: (req: DonationRequest) => Promise<DonationResponse>;
}

const client: RestClient = {
  sendRequest: async (req) => {
    const response = await fetch("http://localhost:8080/donate", {
      method: "POST",
      body: JSON.stringify(req),
    });
    return response.json();
  },
};

export default client;

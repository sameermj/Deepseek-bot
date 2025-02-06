export class DeepSeekService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async sendQuery(query: string): Promise<any> {
        const response = await fetch(`${this.apiUrl}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error('Failed to send query to DeepSeek API');
        }

        return response.json();
    }

    async processResponse(response: any): Promise<string> {
        // Process the response from the DeepSeek API and return a formatted string
        return response.result || 'No result found';
    }
}
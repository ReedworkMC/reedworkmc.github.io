export async function getExample(path: string): Promise<string> {
    const url = `https://raw.githubusercontent.com/ReedworkMC/ReedworkExamples/master/${path}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to load example '${path}': ${response.status} ${response.statusText}`,);
    }

    return response.text();
}
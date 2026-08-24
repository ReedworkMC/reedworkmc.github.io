const GITHUB_RELEASES_URL = 'https://api.github.com/repos/ReedworkMC/Reedwork/releases/latest';

export interface ReedworkRelease {
    tag: string;
    version: string;
    jarName: string;
    downloadUrl: string;
}

export async function getLatestReedworkRelease(): Promise<ReedworkRelease> {
    const response = await fetch(GITHUB_RELEASES_URL);


    if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
    }

    const release = await response.json();

    const tag = release.tag_name;
    const version = tag.replace(/^v/, '');

    const jarAsset = release.assets.find((asset: { name: string }) =>
        asset.name.endsWith('.jar') && asset.name.toLowerCase().includes('reedwork')
    );

    if (!jarAsset) {
        throw new Error(`No Reedwork JAR found in release ${tag}`);
    }

    return {tag: tag, version: version, jarName: jarAsset.name, downloadUrl: jarAsset.browser_download_url};
}
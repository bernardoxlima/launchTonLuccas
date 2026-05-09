import versionsData from '../../_config/versions.json';

export type HistoryEntry = {
  v: string;
  from: string | null;
  created: string;
  label: string;
  hypothesis: string;
  metric: string;
};

export type PageVersion = {
  latest: string;
  frozen: string[];
  history: HistoryEntry[];
};

export type VersionsConfig = Record<string, PageVersion>;

const versions = versionsData as VersionsConfig;

export function getLatest(page: string): string {
  const config = versions[page];
  if (!config) throw new Error(`Page "${page}" not found in _config/versions.json`);
  return config.latest;
}

export function getAllVersions(page: string): string[] {
  const config = versions[page];
  if (!config) return [];
  return [config.latest, ...config.frozen];
}

export function getAllPages(): string[] {
  return Object.keys(versions);
}

export function getHistoryEntry(page: string, v: string): HistoryEntry | undefined {
  return versions[page]?.history.find((h) => h.v === v);
}

export function isLatest(page: string, v: string): boolean {
  return versions[page]?.latest === v;
}

export function isFrozen(page: string, v: string): boolean {
  return versions[page]?.frozen.includes(v) ?? false;
}

export default versions;

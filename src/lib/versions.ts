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
  default?: string;
  default_pinned?: boolean;
  frozen: string[];
  deleted?: string[];
  history: HistoryEntry[];
};

export type VersionsConfig = Record<string, PageVersion>;

const versions = versionsData as VersionsConfig;

export function getLatest(page: string): string {
  const config = versions[page];
  if (!config) throw new Error(`Page "${page}" not found in _config/versions.json`);
  return config.latest;
}

export function getDefault(page: string): string {
  const config = versions[page];
  if (!config) throw new Error(`Page "${page}" not found in _config/versions.json`);
  return config.default ?? config.latest;
}

export function getAllVersions(page: string): string[] {
  const config = versions[page];
  if (!config) return [];
  const all = [config.latest, ...(config.default ? [config.default] : []), ...config.frozen];
  return Array.from(new Set(all));
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

export function isDefault(page: string, v: string): boolean {
  const config = versions[page];
  if (!config) return false;
  return (config.default ?? config.latest) === v;
}

export default versions;

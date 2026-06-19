import { promises as fs } from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "data.json");

export interface StatItem {
  id: string;
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PrestationsItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface DataFile {
  stats: StatItem[];
  services: ServiceItem[];
  prestations: PrestationsItem[];
  skills: SkillItem[];
  contactMessages: unknown[];
}

export async function getData(): Promise<DataFile> {
  const file = await fs.readFile(dataFilePath, "utf-8");
  return JSON.parse(file) as DataFile;
}

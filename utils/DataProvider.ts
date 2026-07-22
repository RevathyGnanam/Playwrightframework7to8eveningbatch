import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider {

  static getTestDataFromJson(filepath: string) {
    const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    return data;
  }

  static getTestDataFromCsv(filepath: string) {
    const data = parse(fs.readFileSync(filepath, 'utf8'), {
      columns: true,
      skip_empty_lines: true
    });
    return data;
  }

}
import { Data } from './data.model';
import { Support } from './Support.model';

export class List {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data: Data[];
    support: Support;

    constructor()
    {
        this.data =  [] as Data[];
        this.support = new Support();
    }
  }

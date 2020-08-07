import { DefaultNamingStrategy, Table, NamingStrategyInterface } from "typeorm";

export class CustomNamingStrategy extends DefaultNamingStrategy
  implements NamingStrategyInterface {
  primaryKeyName(tableOrName: Table | string) {
    const table = tableOrName instanceof Table ? tableOrName.name : tableOrName;

    return `pk_${table.toLowerCase()}`;
  }
}

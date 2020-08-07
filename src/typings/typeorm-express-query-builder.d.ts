declare module "typeorm-express-query-builder" {
  export class QueryBuilder {
    private expressQuery;
    private typeORMQuery;
    constructor(expressQuery: any);
    build(): any;
    private setPage;
    private setLimit;
    private setOrder;
    private getOrderCriteria;
  }
}

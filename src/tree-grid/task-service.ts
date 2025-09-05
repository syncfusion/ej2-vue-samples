import { Ajax } from '@syncfusion/ej2-base';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-vue-treegrid';
import { DataResult, Sorts } from '@syncfusion/ej2-vue-grids';

/**
 * TaskData Service.
 */

export class TaskService {

    public ajax: Ajax = new Ajax({
        type: 'GET', mode: true,
        onFailure: (e: Error) => { return false; }
    });

    private BASE_URL: string = 'https://services.syncfusion.com/vue/production/api/SupportTicketData';

    // Executes the data operation based on the provided treegrid state.
    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        if (state.requestType === 'expand') {
            return this.getChildData(state);
        } else {
            return this.getData(state);
        }
    }

    // Fetches child records for a given parent record when a row is expanded.
    private getChildData(state: any): Promise<DataResult> {
        var parentId = state.data.TicketID;
        this.ajax.url = "".concat(this.BASE_URL, "/?$filter=ParentTicketID%20eq%20").concat(parentId);
        return this.ajax.send().then(function (response: any) {
            var data = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    }


    // Fetches the main data based on the provided treegrid state (paging, sorting, filtering).
    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';
        let filterQuery: string = '';
        if (state.where) {
            filterQuery = this.buildFilterQuery(state.where);
        } else {
            filterQuery = "$filter=ParentTicketID eq null";
        }
        if (state.search) {
            filterQuery += this.buildSearchQuery(state.search);
        }
        if ((state.sorted || []).length) {
            sortQuery =
                `&$orderby=` +
                (state as any).sorted
                    .map((obj: any) => {
                        return obj.direction === 'descending'
                            ? `${obj.name} desc`
                            : obj.name;
                    })
                    .reverse()
                    .join(',');
        }

        this.ajax.url = `${this.BASE_URL}?$inlinecount=allpages&${pageQuery}&${filterQuery}${sortQuery}`;
        this.ajax.type = 'GET';
        return this.ajax.send().then((response: any) => {
            let data: any = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    }

    // Builds the filter query string from the treegrid's filter settings.
    private buildFilterQuery(where: any[]): string {
        if (!where || where.length === 0) return "$filter=ParentTicketID eq null";
        const andConds: string[] = [];
        for (const cond of where) {
            if (cond.predicates?.length) {
                const groupFilters = cond.predicates.map((pred: any) => this.predicateToString(pred));
                andConds.push(`(${groupFilters.join(` ${cond.condition ?? "and"} `)})`);
            } else {
                andConds.push(this.predicateToString(cond));
            }
        }
        if (andConds.length > 0) {
            return `$filter=ParentTicketID eq null and ${andConds.join(" and ")}`;
        }
        return "$filter=ParentTicketID eq null";
    }

    // Converts a single filter predicate object to the filter string.
    private predicateToString(pred: any): string {
        let field = pred.field;
        let value = pred.value;
        let ignoreCase = pred.ignoreCase;
        let valStr = typeof value === "string" ? `'${value}'` : value;

        switch (pred.operator) {
            case "equal":
                if (ignoreCase && typeof value === "string") {
                    return `(tolower(${field}) eq '${value.toLowerCase()}')`;
                }
                return `${field} eq ${valStr}`;
            case "contains":
                if (ignoreCase && typeof value === "string") {
                    return `contains(tolower(${field}), '${value.toLowerCase()}')`;
                }
                return `contains(${field}, ${valStr})`;
            case "startswith":
                if (ignoreCase && typeof value === "string") {
                    return `startswith(tolower(${field}), '${value.toLowerCase()}')`;
                }
                return `startswith(${field}, ${valStr})`;
            default:
                return "";
        }
    }

    // Builds the search query string from the treegrid's search settings.
    private buildSearchQuery(search: any[]): string {
        if (!search || !search.length) return "";
        const s = search[0];
        const searchStr = (s.key as string).toLowerCase();
        const fields = s.fields || [];
        const orConds: string[] = [];

        fields.forEach((field: string) => {
            orConds.push(`substringof('${searchStr}',tolower(cast(${field}, 'Edm.String')))`);
        });
        if (!orConds.length) return "";
        return ` and (${orConds.join(" or ")})`;
    }

    // Adds a new record to the database.
    public addRecord(state: any) {
        this.ajax.url = this.BASE_URL;
        this.ajax.type = 'POST',
            this.ajax.data = JSON.stringify(state.data);
        return this.ajax.send();
    }

    // Deletes a record from the database.
    public deleteRecord(state: any) {
        const id = state.data[0]?.TicketID;
        this.ajax.url = `${this.BASE_URL}/${id}`;
        this.ajax.type = 'DELETE';
        return this.ajax.send();
    }

    // Updates an existing record in the database.
    public updateRecord(state: any) {
        this.ajax.url = this.BASE_URL;
        this.ajax.type = 'PUT',
            this.ajax.data = JSON.stringify(state.data);
        return this.ajax.send();
    }
}

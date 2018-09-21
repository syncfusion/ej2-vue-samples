import { Ajax } from '@syncfusion/ej2-base';
import { DataResult, DataStateChangeEventArgs, Sorts } from '@syncfusion/ej2-vue-grids';

/**
 * OrderData Service.
 */

export class OrderService {

    public ajax: Ajax = new Ajax({
        type: 'GET', mode: true,
        onFailure: (e: Error) => { return false; }
    });

    private BASE_URL: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }

    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';

        if ((state.sorted || []).length) {
            sortQuery = `&$orderby=` + (<any> state).sorted.map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }

        this.ajax.url = `${this.BASE_URL}?${pageQuery}${sortQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            let data: any = JSON.parse(response);
            return <DataResult> { result: data['d']['results'], count: parseInt(data['d']['__count'], 10) };
        });
    }
}

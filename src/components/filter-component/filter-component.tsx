import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'filter-component',
    styleUrl: 'filter-component.css',
    shadow: false
})
export class FilterComponent {
    //@State() itemsToFilter: any[];
    @Prop() itemsToFilter: any; //List to which the filter is going to be applied
    @Prop() filterValue: any; //Selected value from the list of filters
    @Prop() rawData: any = []; //Raw unfiltered data
    //@Prop() options: string;

    filteredItems: any = []; //Items that meet the filtering criteria, not necessarily displayed.
    filteredResults: any = []; //Filtered results to be displayed
    // componentWillLoad() {
    //     console.log("--------");
    //     this.parseOptions();
    // }
    
    /* 
    HTML attributes need to be strings so the array
    needs to be passed as a JSON-encoded string attribute
    */

    // @Watch('options') //Method to update internal @State property
    // parseOptions() {
    //     if (this.options) {
    //         this.itemsToFilter = JSON.parse(this.options);
    //     }
    // }

    onFilterValueChanged(event: any){
        this.filterValue = event.target.value;
        //console.log("Items: ", this.filteredItems);
    }

    render() {
        //console.log("+++++", this.filterValue);
        //var e = document.getElementById("filterDropdown");
        //this.filterValue = e.options[e.selectedIndex];
        console.log("Filter Comp");
        if (this.filterValue === 'all') {
            this.filteredItems = this.itemsToFilter;
            this.filteredResults = this.rawData.map((order: {orderInfo: {orderId: string, orderDate: string, productName: string}}): any => {
                return order.orderInfo.productName
            });
        }
        else {
            this.filteredItems = this.itemsToFilter.filter(item => item.includes(this.filterValue));
            this.filteredResults = this.rawData.map((order: {orderInfo: {orderId: string, orderDate: string, productName: string}}): any => {
                return (this.filteredItems.map(item => {
                    if (item === order.orderInfo.orderDate){
                        return order.orderInfo.productName;
                    }
                }))
              })
        }
        
        //console.log("Items", this.filteredItems);
        return(
            <div>
                {console.log("Filter comp return")}
                <div class="filter-button">
                    <select id="filterDropdown" onChange={this.onFilterValueChanged.bind(this)}>
                        <option value='all'>All</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div>
                    <ul>
                        {this.filteredResults.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
        );
    }
}
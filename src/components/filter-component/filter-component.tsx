import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'filter-component',
    styleUrl: 'filter-component.css',
    shadow: false
})
export class FilterComponent {
    @Prop() filterValue: any; //Selected value from the list of filters
    @Prop() rawData: any = []; //Raw unfiltered data
    filteredResults: any = []; //Filtered results to be displayed

    //Event handler for when the filter value is changed
    onFilterValueChanged(event: any){
        this.filterValue = event.target.value;
    }

    render() {
        //Display all the results if the filter value is set to "All"
        if (this.filterValue === 'all') {
            this.filteredResults = this.rawData.map((order: {orderInfo: {orderId: string, orderDate: string, productName: string}}): any => {
                return order.orderInfo.productName
            });
        }
        //Go through the data and filter the dates and display the matching results
        else {
            this.filteredResults = this.rawData.map((order: {orderInfo: {orderId: string, orderDate: string, productName: string}}): any => {
                if (order.orderInfo.orderDate.includes(this.filterValue)) {
                    return order.orderInfo.productName
                }
              }).filter((item) => item) as string; //This filter function makes sure there are no 'undefined' values stored in the results array
        }
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
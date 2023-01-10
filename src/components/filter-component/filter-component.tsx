import { Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'filter-component',
    styleUrl: 'filter-component.css',
    shadow: false
})
export class FilterComponent {
    //@State() filterItems: any[];
    @Prop() filterItems: any[];
    @Prop() filterValue: any;
    //@Prop() options: string;

    filteredItems: any;

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
    //         this.filterItems = JSON.parse(this.options);
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
        if (this.filterValue === 'all') {
            this.filteredItems = this.filterItems;
        }
        else {
            this.filteredItems = this.filterItems.filter(item => item.includes(this.filterValue));
        }
        
        //console.log("Items", this.filteredItems);
        return(
            <div>
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
                        {this.filteredItems.map(item => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            
        );
    }
}
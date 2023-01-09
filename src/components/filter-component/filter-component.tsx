import { Component, h, Prop, State} from "@stencil/core";

@Component({
    tag: 'filter-component',
    styleUrl: 'filter-component.css',
    shadow: false
})
export class FilterComponent {
    //@State() items: any[];
    @Prop() items: any[];
    @State() filterValue: any;
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
    //         this.items = JSON.parse(this.options);
    //     }
    // }

    onFilterValueChanged(event: any){
        this.filterValue = event.target.value;
        //console.log(this.filterValue);
    }

    render() {
        console.log("+++++", this.filterValue);
        this.filteredItems = this.items.filter(item => item.includes(this.filterValue));

        return(
            <div>
                <div class="filter-button">
                    <select onChange={this.onFilterValueChanged}>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
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
import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
//import { data } from '../../data/sampleData';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  // onFilterValueSelected(filterValue): any{
  //   filterValue = 'a';
  //   return filterValue;
  // }

  data: any = 
  [{
    "orderList": 
    [
      {
        "orderInfo": {
          "orderId": "1231235",
          "orderDate": "2019-01-18T22:11:38.998Z",
          "productName": "Battery"
        }
      },
      {
        "orderInfo": {
          "orderId": "2231235",
          "orderDate": "2020-01-18T22:11:38.998Z",
          "productName": "Tires"
        }
      },
      {
        "orderInfo": {
          "orderId": "1231245",
          "orderDate": "2021-01-18T22:11:38.998Z",
          "productName": "Hubcap"
        }
      },
      {
        "orderInfo": {
          "orderId": "2233235",
          "orderDate": "2022-01-18T22:11:38.998Z",
          "productName": "Carpet"
        }
      }
    ]
  }];

  years: any = this.data.map(year => year = this.data.orderList.orderInfo.orderDate)

  render() {
    return (
    <div>
      <div>Hello, World! I'm {this.getText()}</div>
      <div>
        <filter-component filterValue="all" items={["orange", "juice", "banana", "apple", "milk"]} ></filter-component>
      </div>
    </div>
    );
  }
}

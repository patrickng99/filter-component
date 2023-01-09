import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

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

  render() {
    return (
    <div>
      <div>
        <filter-component items={["orange", "juice", "banana", "apple"]} ></filter-component>
      </div>
      <div>Hello, World! I'm {this.getText()}</div>
    </div>
    
    
    );
  }
}

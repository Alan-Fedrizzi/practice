import { html } from 'lit-html';

export default {
  title: 'Components/ChartRadial',
};

const Template = ({ success, warning, size }) => {
  return html` <med-chart-radial style="--success: ${success}; --warning: ${warning}" size="${size}"></med-chart-radial> `;
};

export const Default = Template.bind({});
Default.argTypes = {
  success: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
  warning: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
  size: {
    options: [undefined, 'lg', 'md', 'sm', 'xs'],
    control: {
      type: 'select',
    },
  },
};

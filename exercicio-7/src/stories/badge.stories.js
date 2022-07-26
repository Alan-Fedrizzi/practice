import { html } from 'lit-html';

export default {
  title: 'Components/Badge',
};

const Template = ({ size, name }) => {
  return html`
    <style></style>
    <div>
      <badge-test size=${size} name=${name}>Badge</badge-test>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  size: {
    options: [undefined, 'md', 'sm'],
    control: {
      type: 'select',
    },
  },
  name: {
    options: [undefined, 'fill', 'stroke'],
    control: {
      type: 'select',
    },
  },
};

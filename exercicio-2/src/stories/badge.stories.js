import { html } from 'lit-html';

export default {
  title: 'Components/Badge',
};

const Template = ({ size, name, color }) => {
  return html`
    <style></style>
    <div>
      <med-badge size=${size} name=${name} color=${color}>Badge</med-badge>
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
  color: {
    options: [undefined, 'brand', 'aula'],
    control: {
      type: 'select',
    },
  },
};

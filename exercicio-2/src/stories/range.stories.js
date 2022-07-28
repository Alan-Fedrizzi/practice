import { html } from 'lit-html';

export default {
  title: 'Components/Range',
};

const Template = ({ porcentagem }) => {
  return html`
    <div>
      <med-range style="--porcentagem: ${porcentagem}"> </med-range>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  porcentagem: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
};

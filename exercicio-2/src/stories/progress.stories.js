import { html } from 'lit-html';

export default {
  title: 'Components/Progress',
};

const Template = ({ porcentagem }) => {
  return html`
    <div>
      <med-progress style="--porcentagem: ${porcentagem}"></med-progress>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  porcentagem: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
};

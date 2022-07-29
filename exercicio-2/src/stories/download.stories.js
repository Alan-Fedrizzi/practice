import { html } from 'lit-html';

export default {
  title: 'Components/Download',
};

const Template = ({ state, size, porcentagem, color }) => {
  return html` <med-download state=${state} size=${size} style="--porcentagem: ${porcentagem}" color=${color}></med-download>`;
};

export const Default = Template.bind({});
Default.argTypes = {
  state: {
    options: [undefined, 'default', 'active', 'finished'],
    control: {
      type: 'select',
    },
  },
  size: {
    options: [undefined, 'medium', 'large'],
    control: {
      type: 'select',
    },
  },
  porcentagem: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
  color: {
    options: [undefined, 'brand', 'aula', 'material', 'questoes', 'revalida', 'provas'],
    control: {
      type: 'select',
    },
  },
};

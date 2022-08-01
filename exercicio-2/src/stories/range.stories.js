import { html } from 'lit-html';

export default {
  title: 'Components/Range',
};

const Template = ({ porcentagem, color }) => {
  return html`
    <div>
      <med-range style="--porcentagem: ${porcentagem}" color=${color}> </med-range>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  porcentagem: {
    control: { type: 'range', min: 0, max: 100, step: 1 },
  },
  color: {
    options: [
      undefined,
      'brand',
      'aula',
      'material',
      'questoes',
      'revalida',
      'provas',
      'neutral-1',
      'neutral-15',
      'neutral-2',
      'neutral-25',
      'neutral-3',
      'neutral-35',
      'neutral-4',
      'neutral-45',
      'neutral-5',
      'neutral-55',
      'neutral-6',
      'neutral-65',
      'neutral-7',
      'neutral-75',
      'neutral-8',
      'neutral-85',
      'neutral-9',
      'neutral-95',
      'neutral-10',
      'fb-attention',
      'fb-caution',
      'fb-warning',
      'fb-success',
    ],
    control: {
      type: 'select',
    },
  },
};

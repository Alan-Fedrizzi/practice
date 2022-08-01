import { html } from 'lit-html';

export default {
  title: 'Components/Button',
};

const Template = ({ size, disabled, expand, name, color }) => {
  return html`
    <style>
      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #ccc;
      }
    </style>
    <div>
      <med-button size=${size} .disabled=${disabled} expand=${expand} name=${name} color=${color}>Clique</med-button>

      <med-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}" color=${color}>
        <svg name="start">
          <use xlink:href="symbol-defs.svg#icon-arrow-left"></use>
        </svg>
        Clique
      </med-button>

      <med-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}" color=${color}>
        Clique
        <svg name="end">
          <use xlink:href="symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </med-button>

      <med-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}" color=${color}>
        <svg name="start">
          <use xlink:href="symbol-defs.svg#icon-arrow-left"></use>
        </svg>
        Clique
        <svg name="end">
          <use xlink:href="symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </med-button>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  size: {
    options: [undefined, 'sm', 'xs', 'xxs'],
    control: {
      type: 'select',
    },
  },
  disabled: {
    disabled: false,
    control: { type: 'boolean' },
    defautlValue: false,
  },
  expand: {
    options: [undefined, 'block'],
    control: {
      type: 'select',
    },
  },
  name: {
    options: [undefined, 'secondary', 'tertiary'],
    control: {
      type: 'select',
    },
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

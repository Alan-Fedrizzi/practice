import { html } from 'lit-html';

export default {
  title: 'Components/Button',
};

const Template = ({ size, disabled, expand, name }) => {
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
      <test-button size=${size} .disabled=${disabled} expand=${expand} name=${name}>Clique</test-button>

      <test-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}">
        <svg name="start">
          <use xlink:href="symbol-defs.svg#icon-arrow-left"></use>
        </svg>
        Clique
      </test-button>

      <test-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}">
        Clique
        <svg name="end">
          <use xlink:href="symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </test-button>

      <test-button size="${size}" .disabled="${disabled}" expand="${expand}" name="${name}">
        <svg name="start">
          <use xlink:href="symbol-defs.svg#icon-arrow-left"></use>
        </svg>
        Clique
        <svg name="end">
          <use xlink:href="symbol-defs.svg#icon-arrow-right"></use>
        </svg>
      </test-button>
    </div>
  `;
};

export const Default = Template.bind({});
Default.argTypes = {
  size: {
    options: [undefined, 'md', 'sm', 'xs', 'xxs'],
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
    options: [undefined, 'primary', 'secondary', 'tertiary'],
    control: {
      type: 'select',
    },
  },
};

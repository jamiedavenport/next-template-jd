import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../tailwind.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

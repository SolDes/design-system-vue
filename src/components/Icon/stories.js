/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import Icon from '@/components/Icon';

storiesOf('Icon', module)
  .add('Simple', () => ({
    components: { Icon },
    template: '<icon assistive-text="Case" category="standard" name="case" size="small" />'
  }));

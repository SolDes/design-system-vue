/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import VerticalNavigation from '@/components/VerticalNavigation';

const sampleReportCategories = [
  {
    id: 'reports',
    label: 'Reports',
    items: [
      { id: 'recent_reports', label: 'Recent' },
      { id: 'my_reports', label: 'Created by Me' },
      { id: 'private_reports', label: 'Private Reports' },
      { id: 'public_reports', label: 'Public Reports' },
      { id: 'all_reports', label: 'All Reports' }
    ]
  },
  {
    id: 'folders',
    label: 'Folders',
    items: [
      { id: 'my_folders', label: 'Created by Me' },
      { id: 'shared_folders', label: 'Shared with Me' },
      { id: 'all_folders', label: 'All Folders' }
    ]
  }
];

storiesOf('Vertical Navigation', module)
  .add('Simple', () => ({
    components: { VerticalNavigation },
    data() {
      return {
        sampleReportCategories
      };
    },
    methods: {
      handleClick(item) {
        console.log(item);
      }
    },
    template: '<vertical-navigation id="sample-navigation" :categories="sampleReportCategories" @handleClick="handleClick" />'
  }));

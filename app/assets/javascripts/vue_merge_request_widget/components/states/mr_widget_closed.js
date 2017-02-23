const mrWidgetAuthorTime = require('../../components/mr_widget_author_time.js');

module.exports = {
  name: 'MRWidgetClosed',
  props: {
    mr: { type: Object, required: true, default: () => ({}) },
  },
  components: {
    'mr-widget-author-and-time': mrWidgetAuthorTime,
  },
  template: `
    <div class="mr-widget-body">
      <mr-widget-author-and-time
        actionText="Closed by"
        :author="mr.closedBy"
        :dateTitle="mr.updatedAt"
        :dateReadable="mr.closedAt"
      />
      <section>
        <p>The changes were not merged into
          <a :href="mr.targetBranchPath" class="label-branch">
            {{mr.targetBranch}}
          </a>
        </p>
      </section>
    </div>
  `,
};

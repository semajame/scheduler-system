<template>
  <JqxScheduler
    ref="myScheduler"
    :width="getWidth"
    :source="dataAdapter"
    :date="date"
    :showLegend="true"
    :view="'weekView'"
    :appointmentDataFields="appointmentDataFields"
    :resources="resources"
    :views="views"
    class="scheduler"
  />
</template>
<script>
// import JqxScheduler from "jqwidgets-scripts/jqwidgets-vue/vue_jqxscheduler.vue";

import JqxScheduler from "jqwidgets-framework/jqwidgets-vue3/vue_jqxscheduler.vue";

export default {
  components: {
    JqxScheduler,
  },
  data: function () {
    return {
      getWidth: getWidth("scheduler"),

      date: new jqx.date(),
      appointmentDataFields: {
        from: "start",
        to: "end",
        id: "id",
        description: "description",
        location: "location",
        subject: "subject",
        resourceId: "calendar",
      },
      resources: {
        colorScheme: "scheme05",
        dataField: "calendar",
        source: new jqx.dataAdapter(this.source),
      },
      views: ["dayView", "weekView", "monthView"],
    };
  },
  beforeCreate: function () {
    const generateAppointments = function () {};
    this.source = {
      dataType: "array",
      dataFields: [
        { name: "id", type: "string" },
        { name: "description", type: "string" },
        { name: "location", type: "string" },
        { name: "subject", type: "string" },
        { name: "calendar", type: "string" },
        { name: "start", type: "date" },
        { name: "end", type: "date" },
      ],
      id: "id",
      localData: generateAppointments(),
    };
    this.dataAdapter = new jqx.dataAdapter(this.source);
  },
  mounted: function () {
    this.$refs.myScheduler.ensureAppointmentVisible("id1");
  },
};
</script>

<style scoped>
/* .scheduler {
  width: 99% !important;
  height: 100% !important;
} */
</style>

<template>
  <JqxScheduler
    ref="myScheduler"
    :width="'100%'"
    :height="'100%'"
    :source="dataAdapter"
    :date="date"
    :view="'weekView'"
    :appointmentDataFields="appointmentDataFields"
    :views="views"
    @appointmentAdd="handleAppointmentAdd"
    @appointmentDelete="handleAppointmentDelete"
  />
</template>

<script>
import JqxScheduler from "jqwidgets-scripts/jqwidgets-vue3/vue_jqxscheduler.vue";
import axios from "axios";

export default {
  components: {
    JqxScheduler,
  },
  data() {
    return {
      date: new jqx.date(),
      appointmentDataFields: {
        from: "start",
        to: "end",
        description: "description",
        location: "location",
        subject: "subject",
      },
      views: [
        "dayView",
        {
          type: "weekView",
          allDayRowHeight: 10, // Set your desired height
        },
        "monthView",
      ],
    };
  },
  computed: {
    dataAdapter() {
      return new jqx.dataAdapter(this.source);
    },
    source() {
      return {
        dataType: "json",
        dataFields: [
          { name: "subject", type: "string" },
          { name: "location", type: "string" },
          { name: "description", type: "string" },
          { name: "start", type: "date" },
          { name: "end", type: "date" },
        ],
        schedulerData: [],
      };
    },
  },

  mounted() {
    // Fetch data from the server when the component is mounted
    this.loadDataFromServer();
  },

  methods: {
    handleAppointmentAdd(event) {
      // Use this method if you want to perform an action when an appointment is added
      const appointment = event.args.appointment;
      this.saveEventToMongoDB(appointment);
    },

    saveEventToMongoDB(eventData) {
      axios
        .post("http://localhost:5174/", eventData)
        .then((response) => {
          this.loadDataFromServer();
        })
        .catch((error) => {
          console.error(error);
        });
    },

    loadDataFromServer() {
      axios
        .get("http://localhost:5174/")
        .then((response) => {
          this.schedulerData = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    handleAppointmentDelete(event) {
      // Assuming you have an event ID, you can delete it on the server
      const eventId = event.args.appointment._id;
      axios
        .delete(`http://localhost:5174/${eventId}`)
        .then((result) => {
          console.log(result);
          this.loadDataFromServer();
        })
        .catch((error) => {
          console.error("Error deleting event:", error);
        });
    },
  },
};
</script>

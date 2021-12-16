<script>
//*** Doughnut chat ***//

import { Doughnut } from "vue-chartjs";
import Chart from "chart.js";

export default {
extends: Doughnut,
  data: () => ({
  chartdata: {
  labels: ["Cambodia", "Thailand", "Vietnam", "Laos"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: ["#a3c7c9", "#889d9e", "#647678", "f87979"],
      data: [91, 3, 3, 3]
      }
     ]
     },
  options: {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false
  }
}),

mounted() {
  this.renderChart(this.chartdata, this.options);
  this.textCenter(880);
},
methods: {
  textCenter(val) {
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width;
        var height = chart.chart.height;
        var ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = val;
        var textX = Math.round((width - ctx.measureText(text).width) / 2);
        var textY = height / 2;

         ctx.fillText(text, textX, textY);
         ctx.save();
       }
     });

     Chart.plugins.unregister(this.chartdata);
   }
 }};
 //*** end Doughnut chat ***//
</script>

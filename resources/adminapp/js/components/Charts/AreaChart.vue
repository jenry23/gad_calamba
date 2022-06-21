<script>
import { Line } from "vue-chartjs";

export default {
    extends: Line,
    data () {
        return {
            gradient: null,
            gradient2: null
        };
    },
    mounted () {
        this.gradient = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);
        this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450);

        this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
        this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
        this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

        this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
        this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
        this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

        this.renderChart(
            {
                labels: [
                    "January",
                    "March",
                    "June",
                    "September",
                    "December",
                ],
                datasets: [
                    {
                        label: "Seniors",
                        borderColor: "#FC2525",
                        pointBackgroundColor: "white",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: this.gradient,
                        data: [5, 10, 3, 15, 0, 18, 20]
                    },
                    {
                        label: "Non-Seniors",
                        borderColor: "#05CBE1",
                        pointBackgroundColor: "white",
                        pointBorderColor: "white",
                        borderWidth: 1,
                        backgroundColor: this.gradient2,
                        data: [10, 20, 6, 0, 10, 12, 19]
                    }
                ]
            },
            {
                labels: {
                    render: 'percentage',
                    fontColor: ['Male', 'Female'],
                    precision: 2
                }, responsive: true, maintainAspectRatio: false
            }
        );
    }
};
</script>

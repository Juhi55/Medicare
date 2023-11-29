document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Add logic to send appointment details to the server
        console.log(`Appointment scheduled with ${doctor} on ${date} at ${time}`);
    });
});

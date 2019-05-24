calculateTimezone = {
    updateHour: (offset) => {
        let date = new Date(); // Generate time
        let utc = date.getTime() + (date.getTimezoneOffset() * 60000); // Generate UTC
        const dateUTC = new Date(utc + (3600000 * offset)); // Generate a new date with UTC
        let hour = dateUTC.getHours();
        let minutes = dateUTC.getMinutes();
        let seconds = dateUTC.getSeconds();

        if(hour < 10) {
            hour = "0" + hour
        }; // Add a "0" if hours are one digit
        if (minutes < 10) {
            minutes = "0" + minutes
        }; // Add a "0" if minutes are one digit
        if (seconds < 10) {
            seconds = "0" + seconds
        }; // Add a "0" if seconds are one digit
        return [hour, minutes, seconds]; // Return an array with the values of date
    },
};
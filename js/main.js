function date() 
    {   
        let today = new Date();
        let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let date = today.toLocaleDateString('en-US', { dateStyle: 'long'} );
        /*
        var a = Date.now();
        var b = new Date(a);
        var time_options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        var date_options = {
            dateStyle: 'long'
        }
        var f = b.toLocaleTimeString('en-US', time_options)
        var g = b.toLocaleDateString('en-US',date_options)
        */
        var timeString = time.toLowerCase()+" "+"|"+" "+date.toLowerCase()
        document.getElementById("todaysDate").innerHTML = timeString;
    }
    setInterval(date,1000);

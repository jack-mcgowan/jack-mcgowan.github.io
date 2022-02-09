function date() 
    {   
        let today = new Date();
        let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let date = today.toLocaleDateString('en-US', { dateStyle: 'long'} );

        var timeString = date.toLowerCase()+" "+"|"+" "+time.toLowerCase()
        document.getElementById("todaysDate").innerHTML = timeString;
    }
    setInterval(date,1000);

var status = /^[\d]{3}\.[\d]{3}\.[\d]{3}\-[\d]{2}$/; 

    function ValCPF(cpfIn){  
      var verify = status.exec(cpfIn.value);  
      if (!verify)  
        window.alert("Invalid CPF");  
      else
        window.alert("Thanks, CPF Valid " + verify[0]);  
    }
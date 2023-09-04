* {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  
  body {
    background: #e0e0e0;
    
    td {
      padding: 3px;
    }
  
    input {
      border: none;
    }
  }
  
  .calculator {
    max-width: 350px;
    margin: 50px auto;
    padding: 18px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
  
    input[type="text"] {
      color: #020403;
      width: 100%;
      font-size: 50px;
      margin: 10px 0;
      padding: 15px 0;
      background: transparent;
    }
  
    button {
      width: 100%;
      margin-bottom: 10px;
      padding: 2px 0;
      border-radius: 16px;
      border: none;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      cursor: pointer;
    }
  
    input[type="button"] {
      width: 100%;
      height: 65px;
      font-size: 22px;
      background: #f5f5f5;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .top-side {
      color: blue;
    }
  
    .right-side {
      color: red;
    }
    
    #eval {
      width: 100%;
      color: #ffffff;
      background: red;
    }
  }
  
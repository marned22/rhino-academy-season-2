function quarterOf(month) {
    if(month < 4){
      console.log(`Month ${month} belongs to the 1st quarter`);
    }
    else if(month < 7){
      console.log(`Month ${month} belongs to the 2nd quarter`);
    }
    else if(month < 10){
      console.log(`Month ${month} belongs to the 3rd quarter`);
    }
    else if(month < 13){
      console.log(`Month ${month} belongs to the 4th quarter`);
    }
    else{
      console.log("No month");
    }
}

quarterOf(6);
const counter = {
    count : 30,
    increment: function() {
        return this.count += 1;
    },
    decrement: function(){
        return this.count -= 1;
    },
    countToZero: function(){
        console.log(this.count)
        if(this.count > 0){
            this.decrement();
            this.countToZero()
        }

    }

}

console.log("Counter: ",counter.count);
console.log("Decrement: ",counter.decrement());
console.log("Increment: ",counter.increment());
counter.countToZero()
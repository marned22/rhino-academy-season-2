function cars<T>(arg: T): T{
    console.log(arg)
    return arg
}


const myCar = cars

interface Logger {
    <T>(arg: T):T
}


const myCarWithInterface1: Logger = cars

myCar("Audi")
myCarWithInterface1("Audi")


//-----------------------------


interface Post{
    ID: number
    description: string
    length: number
}

function logLength<T extends Post>(arg: T){
    console.log(arg.ID)
    console.log(arg.description)
    console.log(arg.length)
}

const loggingLength = logLength

loggingLength({ID: 2, description: "Hello world", length :3})

// ----------------------------------------------------------

interface IDataStorage {
    id: number
}

class DataStorage<T extends IDataStorage>{
    items:T[] = []

    add(item: T){
        return this.items.push(item)
    }

    findById(id: number){
        return this.items.find(item => item.id === id)
    }
}


const newStorage = new DataStorage<{id: number, name: string}>()

newStorage.add({id: 1, name: 'data1'})
newStorage.add({id: 2, name: 'data2'})



newStorage.findById(2)
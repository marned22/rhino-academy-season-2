var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName, yearOfBirth) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
    }
    Person.prototype.age = function () {
        return new Date().getFullYear() - this.yearOfBirth;
    };
    Person.prototype.information = function () {
        return "Hello ".concat(this.firstName, ", ").concat(this.lastName, " born in ").concat(this.yearOfBirth, " with ").concat(this.age(), " years. ");
    };
    return Person;
}());
var Position;
(function (Position) {
    Position[Position["frontEnd"] = 0] = "frontEnd";
    Position[Position["backEnd"] = 1] = "backEnd";
    Position[Position["fullStack"] = 2] = "fullStack";
})(Position || (Position = {}));
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, firstName, lastName, yearOfBirth, userName, email, position, expirience) {
        var _this = _super.call(this, id, firstName, lastName, yearOfBirth) || this;
        _this.userName = userName;
        _this.email = email;
        _this.position = position;
        _this.expirience = expirience;
        return _this;
    }
    User.prototype.userInfo = function () {
        if (this.expirience === 0) {
            return "".concat(this.firstName, " with user name ").concat(this.userName, ", user email").concat(this.email, ", and role ").concat(Position[this.position], " without expirience");
        }
        else {
            return "".concat(this.firstName, " with user name ").concat(this.userName, ", user email").concat(this.email, ", and role ").concat(Position[this.position], " with ").concat(this.expirience, " year of expirience");
        }
    };
    return User;
}(Person));
var users = [];
function addUser(user) {
    users.push((user));
}
function getUsersByPosition(position) {
    return (users.filter(function (user) { return user.position === position; }));
}
var jame = new Person(1, "Jame", "Jones", 1997);
var johny = new User(2, "Johny", "Thompson", 2005, 'john123', 'john@gmail.com', Position.frontEnd, 5);
var mike = new User(3, "Mike", "Miley", 20, 'john123', 'john@gmail.com', Position.backEnd, 0);
addUser(johny);
addUser(mike);
console.log(jame.information());
console.log(johny.userInfo());
console.log(mike.userInfo());
console.log(jame instanceof User);
console.log(johny instanceof User);
console.log(getUsersByPosition(Position.frontEnd));

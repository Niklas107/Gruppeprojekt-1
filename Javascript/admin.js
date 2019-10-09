class admin {
    constructor(adminName) {
        this.adminName = adminName;
    }
}
admin.prototype = new user();
admin.prototype.constructor = admin;

